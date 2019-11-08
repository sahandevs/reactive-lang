import { Namespace, Struct, Property, NodeTypes, isStruct, isProperty } from "../Models";
import { flatStructsFromNamespace } from "../Solver";
import { getAllNewStructCalls, flattenNestedAtomExpression } from "./Utils";
import { ExpressionContext, AtomContext, RefrenceExpressionContext } from "../../Parser/ReactiveGrammerParser";
type ResolvedRefrence = Struct | Property | ExpressionContext | AtomContext;
type RawRefrence = RefrenceExpressionContext;
const NOT_WALKED_YET = "NOT_WALKED_YET";
type Refrence = {
  isRaw: boolean;
  value: ResolvedRefrence | RawRefrence;
  label?: string;
};

interface Node {
  dependencies: Node[] | "NOT_WALKED_YET";
  refrence: Refrence;
}

export class StructPropertyDependencyAnalyzer {
  rootNode: Node;
  constructor(private root: Struct) {
    this.rootNode = {
      dependencies: [],
      refrence: {
        isRaw: false,
        value: root
      }
    };
  }

  analyze() {
    // add all properties to the rootNode
    this.rootNode.dependencies = this.root.properties.map(x => {
      return {
        dependencies: NOT_WALKED_YET,
        refrence: {
          isRaw: false,
          value: x
        }
      };
    });
    this.resolveNodeDependencies(this.rootNode);
    console.log(this.rootNode);
  }

  resolveNodeDependencies(node: Node) {
    // resolve depencies
    if (node.dependencies === NOT_WALKED_YET) {
      if (node.refrence.isRaw) {
        // raw refrence can't have dependency probably
        // because it is label refrence
        node.dependencies = [];
      } else {
        // must be resolved refrence
        this.handleRRefNode(node);
      }
    }
    // resolve child depencies
    if (node.dependencies !== NOT_WALKED_YET) {
      node.dependencies.forEach(d => this.resolveNodeDependencies(d));
    }
  }

  private handleRRefNode(node: Node) {
    const rRef = node.refrence.value as ResolvedRefrence;
    if (isStruct(rRef)) {
    } else if (isProperty(rRef)) {
      if (rRef.defaultOption == null) {
        node.dependencies = [];
        return;
      }
      node.dependencies = expressionToNode(rRef.defaultOption.context.expression());
      // convert expression to node
    }
  }
}

function expressionToNode(ctx: ExpressionContext): Node[] {
  let expressions = ctx.expression();
  expressions = expressions.length === 0 ? [ctx] : expressions;
  // is multi expression or not ?
  if (expressions.length > 1) {
    return expressions.map(exp => {
      return {
        dependencies: expressionToNode(exp),
        refrence: {
          isRaw: false,
          value: ctx
        }
      };
    });
  } else if (expressions.length === 1 && expressions[0].childCount > 1) {
    // like not, sum, + - and etc.
    // TODO: add aditional meta like this is a sum for later
    return expressions[0].expression().map(exp => {
      return {
        dependencies: expressionToNode(exp),
        refrence: {
          isRaw: false,
          value: ctx
        }
      };
    });
  } else {
    let expression: ExpressionContext = expressions[0];
    if (expression == null) return [];
    // is atom?
    const atomExp = expression.atom() as AtomContext;
    if (atomExp) {
      return [atomToNode(atomExp)];
    }
  }
  return [];
}

function atomToNode(atom: AtomContext): Node {
  // if ref
  const labelRefrenceExpr = atom.refrenceExpression();
  if (labelRefrenceExpr != null) {
    return {
      dependencies: [],
      refrence: {
        isRaw: true,
        value: atom
      }
    };
  }
  // else

  return {
    dependencies: flattenNestedAtomExpression(atom)
      .filter(x => x !== atom)
      .map(a => {
        return {
          dependencies: [atomToNode(a)],
          refrence: {
            isRaw: false,
            value: a
          }
        };
      }),
    refrence: {
      isRaw: false,
      value: atom
    }
  };
}
