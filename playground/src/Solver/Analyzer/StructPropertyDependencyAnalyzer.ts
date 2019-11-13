import { Struct, Property, isStruct, isProperty, MixinDefinition } from "../Models";
import {
  ExpressionContext,
  AtomContext,
  RefrenceExpressionContext,
  LabelRefrenceMemberAccessExpressionContext,
  NamedCollectionMemberContext,
  RefrenceNameContext,
  ArrayMemberContext
} from "../../Parser/ReactiveGrammerParser";
import { Instance } from "../NodeInstance";
type ResolvedRefrence =
  | Struct
  | Property
  | ExpressionContext
  | AtomContext
  | Node
  | NamedCollectionMemberContext
  | UnknownLabelRefrence
  | RefrenceNameContext
  | ArrayMemberContext
  | MixinDefinition
  | Instance;

export enum ArrayMemberRefrenceType {
  ExpressionMember = "ArrayMemberRefrenceType:Member",
  ForEachMember = "ArrayMemberRefrenceType:ForEachMember"
}

type UnknownLabelRefrence = {
  isUnknownLabelRefrence: true;
  context: LabelRefrenceMemberAccessExpressionContext;
};

export function isUnknownLabelRefrence(value: any): value is UnknownLabelRefrence {
  return value.isUnknownLabelRefrence;
}

type RawRefrence = RefrenceExpressionContext;
export const NOT_WALKED_YET = "NOT_WALKED_YET";
export type Refrence = {
  isRaw: boolean;
  value: ResolvedRefrence | RawRefrence;
  label?: string;
};

export interface Node {
  dependencies: Node[] | "NOT_WALKED_YET";
  refrence: Refrence;
}

export function isNode(value: any): value is Node {
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
    this.analyze();
  }

  analyze() {
    // add all mixins
    const mixins: Node[] = this.root.mixins.map(mixin => {
      return {
        // TODO: mixin dependencies are overrides in current struct ( overrides )
        dependencies: [],
        refrence: {
          label: mixin.label,
          isRaw: false,
          value: mixin
        }
      }
    });
    // add all properties to the rootNode
    const properties: Node[] = this.root.properties.map(x => {
      return {
        dependencies: NOT_WALKED_YET,
        refrence: {
          isRaw: false,
          value: x
        }
      };
    });
    this.rootNode.dependencies = [...mixins, ...properties];
    this.resolveNodeDependencies(this.rootNode);
    this.resolveRawRefrences(this.rootNode);
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

  labelCache: { [key: string]: Node } = {};

  resolveRawRefrences(node: Node) {
    // cache labels
    this.labelCache = getAllLabelsFromNode(node);
    try {
      resolveRawRefrences(node, this.labelCache);
    } catch (e) {
      // TODO: fix me! I KNOW THIS IS SHITTY WAY TO DETECT CIRCULAR DEPENDENCIES :)
      if ((e + "").includes("Maximum call stack size exceeded")) {
        throw new Error("Circular dependency detected!");
      } else {
        throw e;
      }
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

export function expressionToNode(ctx: ExpressionContext): Node[] {
  // if atom
  const atomExp = ctx.atom();
  if (atomExp) {
    let node = atomToNode(atomExp);
    return [
      {
        dependencies: [node],
        refrence: {
          isRaw: false,
          value: ctx
        }
      }
    ];
  }

  let expressions = ctx.expression();
  let label = ctx.LABEL_NAME() == null ? undefined : ctx.LABEL_NAME()!.text;
  return [
    {
      dependencies: expressions.map(exp => {
        return {
          dependencies: expressionToNode(exp),
          refrence: {
            isRaw: false,
            value: exp
          }
        };
      }),
      refrence: {
        isRaw: false,
        value: ctx,
        label: label
      }
    }
  ];
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

  // dependencies
  let dependencies: Node[] = [];

  const conditionalCtx = atom.conditionalValueExpression();
  if (conditionalCtx != null) {
    // true branch
    const true_ = conditionalCtx.conditionalValueExpressionTrueBranch();
    const trueCond = true_.expression(0)!;
    const trueResult = true_.expression(1)!;
    dependencies.push({
      dependencies: expressionToNode(trueCond),
      refrence: {
        isRaw: false,
        value: trueCond
      }
    });
    dependencies.push({
      dependencies: expressionToNode(trueResult),
      refrence: {
        isRaw: false,
        value: trueResult
      }
    });
    // else branches
    [
      ...conditionalCtx.conditionalValueExpressionElseIfBranch(),
      ...conditionalCtx.conditionalValueExpressionElseBranch()
    ].forEach(exp => {
      const cond = exp.expression(0)!;
      const result = exp.expression(1)!;
      dependencies.push({
        dependencies: expressionToNode(cond),
        refrence: {
          isRaw: false,
          value: cond
        }
      });
      dependencies.push({
        dependencies: expressionToNode(result),
        refrence: {
          isRaw: false,
          value: result
        }
      });
    });
  }

  const listCtx = atom.arrayExpression();
  if (listCtx != null) {
    // TODO: add support for list
    listCtx.arrayMember().forEach(member => {
      const expressionCtx = member.expression();
      if (expressionCtx != null) {
        dependencies.push({
          dependencies: expressionToNode(expressionCtx),
          refrence: {
            isRaw: false,
            value: member
          }
        });
        return;
      }

      const forEachMember = member.arrayForeachMember();
      if (forEachMember != null) {
        const [condition] = forEachMember.expression();
        dependencies.push({
          dependencies: expressionToNode(condition),
          refrence: {
            isRaw: false,
            value: member
          }
        });
        return;
      }
      throw new Error("Not supported");
    });
  }

  const namedCollectionCtx = atom.namedCollectionExpression();
  if (namedCollectionCtx != null) {
    namedCollectionCtx.namedCollectionMember().forEach(member => {
      dependencies.push({
        dependencies: expressionToNode(member.expression()),
        refrence: {
          isRaw: false,
          value: member
        }
      });
    });
  }

  const newStructCtx = atom.newStructExpression();
  if (newStructCtx != null) {
    const parBody = newStructCtx.parameters().parameterBody();
    if (parBody != null) {
      parBody.expression().forEach(exp => {
        dependencies.push({
          dependencies: expressionToNode(exp),
          refrence: {
            isRaw: false,
            value: exp
          }
        });
      });
    }
  }

  return {
    dependencies: dependencies,
    refrence: {
      isRaw: false,
      value: atom
    }
  };
}

export function getAllLabelsFromNode(node: Node): { [key: string]: Node } {
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

export function resolveRawRefrences(node: Node, labelCache: { [key: string]: Node }) {
  if (node.refrence.isRaw) {
    let refExp = (node.refrence.value as any).refrenceExpression() as RefrenceExpressionContext;
    let labelRef = refExp.labelRefrenceMemberAccessExpression();
    if (labelRef != null) {
      const labelName = labelRef.LABEL_NAME().text;
      const member = labelRef.IDENTIFIER().map(x => x.text)[0];
      let targetNode = labelCache[labelName];
      if (targetNode == null) {
        throw new Error("cannot resolve label " + labelName);
      }
      if (member !== "self") {
        if (isStruct(targetNode.refrence.value) && targetNode.dependencies !== NOT_WALKED_YET) {
          const targetProperty = targetNode.dependencies.find(x => (x.refrence.value as Property).name === member);
          if (targetProperty != null) {
            targetNode = targetProperty;
            node.refrence.isRaw = false;
            node.dependencies = [targetNode];
          } else {
            node.refrence.isRaw = false;
            const refCon: UnknownLabelRefrence = {
              context: labelRef,
              isUnknownLabelRefrence: true
            };
            node.dependencies = [
              {
                dependencies: [],
                refrence: {
                  isRaw: false,
                  value: refCon
                }
              }
            ];
            // throw new Error("cannot resolve property " + ref.text);
          }
        } else {
          throw new Error("Node not supported yet!");
        }
      } else {
        node.refrence.isRaw = false;
        node.dependencies = [targetNode];
      }
    }

    const namespaceMemberRef = refExp.refrenceName();
    if (namespaceMemberRef != null) {
      node.refrence.isRaw = false;
      node.dependencies = [
        {
          dependencies: [],
          refrence: {
            isRaw: false,
            value: namespaceMemberRef
          }
        }
      ];
    }
  }
  if (node.dependencies !== NOT_WALKED_YET) {
    node.dependencies.forEach(n => resolveRawRefrences(n, labelCache));
  }
}
