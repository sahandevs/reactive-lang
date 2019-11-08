import { Namespace, Struct } from "./Models";
import { flatStructsFromNamespace } from "./Solver";
import { AtomContext, ExpressionContext } from "../Parser/ReactiveGrammerParser";

export class StructDependencyAnalyzer {
  private structs: Struct[];

  constructor(private root: Namespace) {
    this.structs = flatStructsFromNamespace(root);
  }

  analyze(): string {
    // get all new struct calls from each struct's properties
    let result = "";
    this.structs.forEach(struct => {
      result += struct.name + " depends on :" + getAllNewStructCalls(struct).join(", ") + "\n";
    });
    return result;
  }
}

function flattenAllExpressionsToAtoms(ctx: ExpressionContext): AtomContext[] {
  // if atom.refrenceExpression.labelRefrence? add refrence else
  let expressions = ctx.expression();
  expressions = expressions.length === 0 ? [ctx] : expressions;

  // is multi expression or not ?
  if (expressions.length > 1) {
    return expressions.map(x => flattenAllExpressionsToAtoms(x)).flatMap(x => x);
  } else if (expressions.length === 1 && expressions[0].childCount > 1) {
    return expressions[0]
      .expression()
      .map(exp => flattenAllExpressionsToAtoms(exp))
      .flatMap(x => x);
  } else {
    let expression: ExpressionContext = expressions[0];
    if (expression == null) return [];
    // is atom?
    const atomExp = expression.atom() as AtomContext;
    if (atomExp) {
      return [...flattenNestedAtomExpression(atomExp)];
    }
  }
  return [];
}

function flattenNestedAtomExpression(ctx: AtomContext): AtomContext[] {
  const conditionalCtx = ctx.conditionalValueExpression();
  if (conditionalCtx != null) {
    return [
      ...conditionalCtx
        .conditionalValueExpressionTrueBranch()
        .expression()
        .map(exp => flattenAllExpressionsToAtoms(exp))
        .flatMap(x => x),
      ...conditionalCtx
        .conditionalValueExpressionElseIfBranch()
        .flatMap(x => x.expression())
        .map(exp => flattenAllExpressionsToAtoms(exp))
        .flatMap(x => x),
      ...conditionalCtx
        .conditionalValueExpressionElseBranch()
        .flatMap(x => x.expression())
        .map(exp => flattenAllExpressionsToAtoms(exp))
        .flatMap(x => x)
    ];
  }

  const arrayCtx = ctx.arrayExpression();
  if (arrayCtx != null) {
    return arrayCtx
      .arrayMember()
      .map(member => {
        const expression = member.expression();
        if (expression != null) {
          return flattenAllExpressionsToAtoms(expression);
        }

        const forEachMember = member.arrayForeachMember();
        if (forEachMember != null) {
          return forEachMember
            .expression()
            .map(exp => flattenAllExpressionsToAtoms(exp))
            .flatMap(x => x);
        }
        return [];
      })
      .flatMap(x => x);
  }

  const namedCollection = ctx.namedCollectionExpression();
  if (namedCollection != null) {
    return namedCollection
      .namedCollectionMember()
      .map(x => flattenAllExpressionsToAtoms(x.expression()))
      .flatMap(x => x);
  }

  return [ctx];
}

function getAllNewStructCalls(struct: Struct): string[] {
  let neededStructs: string[] = [];
  struct.properties.forEach(prop => {
    if (prop.defaultOption != null) {
      const atoms = flattenAllExpressionsToAtoms(prop.defaultOption.context.expression());
      atoms.forEach(atom => {
        const newStructCtx = atom.newStructExpression();
        if (newStructCtx) {
          neededStructs.push(newStructCtx.refrenceName().text);
        }
      });
    }
  });
  return neededStructs;
}
