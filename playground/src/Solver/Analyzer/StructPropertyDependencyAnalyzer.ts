import { Namespace, Struct, Property, NodeTypes, isStruct, isProperty } from "../Models";
import { flatStructsFromNamespace } from "../Solver";
import { getAllNewStructCalls, flattenNestedAtomExpression } from "./Utils";
import { ExpressionContext, AtomContext, RefrenceExpressionContext } from "../../Parser/ReactiveGrammerParser";
type ResolvedRefrence = Struct | Property | ExpressionContext | AtomContext | Node;
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

function isNode(value: any): value is Node {
  return value.refrence != null && typeof value.refrence.isRaw === "boolean";
}

export class StructPropertyDependencyAnalyzer {
  rootNode: Node;
  constructor(private root: Struct) {
    const label = root.context.labelableIdentifier().label();
    this.rootNode = {
      dependencies: [],
      refrence: {
        isRaw: false,
        value: root,
        label: label == null ? undefined : label.text
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
    this.resolveRawRefrences(this.rootNode);
    console.log(checkCircularDependencies(this.rootNode, [], []));
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

  resolveRawRefrences(node: Node) {
    // cache labels
    let labelToNode: { [key: string]: Node } = getAllLabelsFromNode(node);
    resolveRawRefrences(node, labelToNode);
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
  let label = ctx.LABEL_NAME() == null ? undefined : ctx.LABEL_NAME()!.text;
  // is multi expression or not ?
  if (expressions.length > 1) {
    return expressions.map(exp => {
      return {
        dependencies: expressionToNode(exp),
        refrence: {
          isRaw: false,
          value: ctx,
          label: label
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
          value: ctx,
          label: label
        }
      };
    });
  } else {
    let expression: ExpressionContext = expressions[0];
    if (expression == null) return [];
    // is atom?
    const atomExp = expression.atom() as AtomContext;
    if (atomExp) {
      let node = atomToNode(atomExp);
      return [
        {
          dependencies: [node],
          refrence: {
            isRaw: false,
            value: expression,
            label: label
          }
        }
      ];
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

function getAllLabelsFromNode(node: Node): { [key: string]: Node } {
  let _labels: { [key: string]: Node } = {};
  const label = node.refrence.label;
  if (label != null) {
    _labels[label] = node;
  }
  if (node.dependencies !== NOT_WALKED_YET) {
    node.dependencies.forEach(dep => {
      _labels = Object.assign(_labels, getAllLabelsFromNode(dep));
    });
  }
  return _labels;
}

function resolveRawRefrences(node: Node, labelCache: { [key: string]: Node }) {
  if (node.refrence.isRaw) {
    let refExp = (node.refrence.value as any).refrenceExpression();
    let ref = refExp.labelRefrenceMemberAccessExpression()!;
    const labelName = ref.LABEL_NAME().text;
    const targetNode = labelCache[labelName];
    if (targetNode == null) {
      throw new Error("cannot resolve label " + labelName);
    }
    node.refrence.isRaw = false;
    node.refrence.value = targetNode;
  }
  if (node.dependencies !== NOT_WALKED_YET) {
    node.dependencies.forEach(n => resolveRawRefrences(n, labelCache));
  }
}

function checkCircularDependencies(node: Node, resolved: Node[], seen: Node[]): string | null {
  seen.push(node);
  if (node.dependencies !== NOT_WALKED_YET) {
    let deps = [...node.dependencies];
    if (isNode(node.refrence.value)) {
      deps.push(node.refrence.value);
    }
    deps.forEach(dep => {
      if (!resolved.includes(dep)) {
        if (seen.includes(dep)) {
          return "Circular dependency found ";
        }
        checkCircularDependencies(dep, resolved, seen);
      }
    });
  }
  resolved.push(node);
  return null;
}
