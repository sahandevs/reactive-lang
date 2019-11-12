import { ExpressionContext, AtomContext } from "../../Parser/ReactiveGrammerParser";

import { Struct } from "../Models";
import { Observable, Subscription } from "rxjs";

function createArray(length: number): any[] {
  let items: any[] = [];
  for (let index = 0; index < length; index++) {
    items[index] = undefined;
  }
  return items;
}

export function flattenObservables(observables: Observable<any>[]): Observable<any> {
  return Observable.create((observer: any) => {

    let items: any[] = createArray(observables.length);
    let subs: Subscription[] = [];

    function check() {
      if (!items.includes(undefined)) {
        observer.next(items);
        items = createArray(observables.length);
      }
    }

    observables.forEach((element, i) => {
      subs.push(element.subscribe(v => {
        items[i] = v;
        check();
      }))
    })
  });
}

export function flattenAllExpressionsToAtoms(ctx: ExpressionContext): AtomContext[] {
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

export function flattenNestedAtomExpression(ctx: AtomContext): AtomContext[] {
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

  const newStructCtx = ctx.newStructExpression();
  if (newStructCtx != null) {
    const parameterBody = newStructCtx.parameters().parameterBody();
    if (parameterBody == null) return [ctx]; //
    return [
      ctx,
      ...parameterBody
        .expression()
        .map(x => flattenAllExpressionsToAtoms(x))
        .flatMap(x => x)
    ];
  }

  return [ctx];
}

export function getAllNewStructCalls(struct: Struct): string[] {
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
