import { Struct, Property } from "./Models";
import { Observable } from "rxjs";
import { getStructFullName, Solver } from "./Solver";
import {
  ExpressionContext,
  AtomContext,
  RefrenceExpressionContext,
  LabelRefrenceMemberAccessExpressionContext
} from "../Parser/ReactiveGrammerParser";

export type Instance = Observable<any> | StructInstance;

interface PropertyInstance {
  instance: Instance;
  property: Property;
}

export class StructInstance {
  typeFullname: string;
  inited = false;
  private properties: { [key: string]: PropertyInstance } = {};

  constructor(private schema: Struct, private solver: Solver) {
    this.typeFullname = getStructFullName(schema);
  }

  init(initialValue: { [key: string]: StructInstance }) {
    this.inited = true;
    // create observable instances
    this.schema.properties.forEach(prop => {
      let instance: Instance;
      if (prop.defaultOption == null) {
        let _instance = initialValue[prop.name];
        if (_instance == null) throw new Error(`${prop.name} must be provided`);
        instance = _instance;
      } else {
        instance = this.initPropertyWithDefaultOption(prop);
      }
      const propInstance: PropertyInstance = {
        property: prop,
        instance: instance
      };
      this.properties[prop.name] = propInstance;
    });
  }

  private initPropertyWithDefaultOption(prop: Property): Instance {
    const context = prop.defaultOption!.context;
    const isVar = prop.defaultOption!.isVar;
    console.log(calculatePropDeps(context.expression()));
    const primitiveExp = context
      .expression()
      .atom()!
      .primitiveExpression()!;
    let stringEXP = primitiveExp.StringLiteral();
    if (stringEXP) {
      return this.solver.tryInstantiateCoreTypes("Core:String", isVar, stringEXP.text)!;
    }
    let boolEXP = primitiveExp.BooleanLiteral();
    if (boolEXP) {
      return this.solver.tryInstantiateCoreTypes("Core:Boolean", isVar, boolEXP.text)!;
    }
    throw new Error(`cant init ${prop}`);
  }
}

function calculatePropDeps(ctx: ExpressionContext): string[] {
  // if atom.refrenceExpression.labelRefrence? add refrence else
  const expressions = ctx.expression();

  // is multi expression or not ?
  if (Array.isArray(expressions)) {
    if (expressions.length !== 2) return [];
    return [...calculatePropDeps(expressions[0]), ...calculatePropDeps(expressions[1])];
  } else if (ctx.NOT()) {
    // is not expression ?
    return calculatePropDeps(expressions as any);
  } else {
    const expression = (expressions as unknown) as ExpressionContext;
    // is atom?
    const atmoExp = expression.atom() as AtomContext;
    if (atmoExp) {
      const refrenceExpression = atmoExp.refrenceExpression() as RefrenceExpressionContext;
      if (refrenceExpression) {
        const labelExpression = refrenceExpression.labelRefrenceMemberAccessExpression() as LabelRefrenceMemberAccessExpressionContext;
        if (labelExpression) {
          return [labelExpression.text];
        }
      } else {
        /*
	primitiveExpression
	| conditionalValueExpression
	| newStructExpression
	| arrayExpression
	| namedCollectionExpression
      */
      }
    } else {
    }
  }
  return [];
}
