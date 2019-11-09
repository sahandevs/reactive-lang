import { Solver } from "./Solver";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { Node, NOT_WALKED_YET, Refrence } from "./Analyzer/StructPropertyDependencyAnalyzer";
import { AtomContext, PrimitiveExpressionContext, ExpressionContext } from "../Parser/ReactiveGrammerParser";
import { isProperty } from "./Models";
export type Instance = Observable<any>;

type InstanceNodeTree = {
  instance: Instance | null;
  dependecies: InstanceNodeTree[];
  node: Node;
};

export function nodeToInstanceNodeTree(node: Node): InstanceNodeTree {
  if (node.dependencies === NOT_WALKED_YET) {
    throw new Error("node needs full structPropAnalyze");
  }
  return {
    instance: null,
    dependecies: node.dependencies.map(x => nodeToInstanceNodeTree(x)),
    node: node
  };
}

export class NodeInstance {
  tree: InstanceNodeTree;
  constructor(node: Node, private solver: Solver) {
    this.tree = nodeToInstanceNodeTree(node);
    this.init({
      propIn: new BehaviorSubject<string>(":)")
    });
  }

  init(initialValue: { [key: string]: Instance }) {
    resolve(this.tree, initialValue);
  }
}

function resolve(tree: InstanceNodeTree, initialValue: { [key: string]: Instance }) {
  // check if has an instance (resolved)
  if (tree.instance != null) return;
  // resolve dependecies if have any
  if (tree.dependecies.length > 0) {
    tree.dependecies.forEach(dep => resolve(dep, initialValue));
  }
  // create the instance

  const source = tree.node.refrence.value;

  if (isExpressionContext(source)) {
    // single expressions
    const expressions = source.expression();
    if (expressions.length === 1 && source.IS() == null) {
      let instance = tree.dependecies[0].instance!;
      const expr = expressions[0];
      // handle not
      if (expr.NOT()) {
        instance = instance.pipe(map(x => !x));
      }
      // handle paran
      tree.instance = instance;
      return;
    }

    // TODO: handle is expression

    // multi expression
    if (expressions.length === 2) {
      const operator = source.children![1].text;
      if (tree.dependecies.length === 1) {
        tree.instance = tree.dependecies[0].instance;
        return;
      }
      if (operator === "+") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a + b)
        );
      } else if (operator === "-") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a - b)
        );
      } else if (operator === "*") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a * b)
        );
      } else if (operator === "/") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a / b)
        );
      } else if (operator === "-") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a - b)
        );
      } else if (operator === ">") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a > b)
        );
      } else if (operator === ">=") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a >= b)
        );
      } else if (operator === "<") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a < b)
        );
      } else if (operator === "<=") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a <= b)
        );
      } else if (operator === "or") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a || b)
        );
      } else if (operator === "and") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a && b)
        );
      } else {
        throw new Error("operator " + operator + " not supported yet!");
      }
      return;
    }
  }

  // property

  if (isProperty(source)) {
    if (source.defaultOption == null) {
      const name = source.name;
      const value = initialValue[name];
      if (value == null) throw new Error(name + " is required");
      tree.instance = value;
    } else {
      tree.instance = tree.dependecies[0].instance!;
    }
  }

  // atom
  handleAtom(source, tree);
}

type CondValueExp = {
  condition: any;
  value: any;
};

function handleAtom(source: Refrence["value"], tree: InstanceNodeTree): void {
  // atom
  if (isAtomContext(source)) {
    // primitve

    const primitiveCtx = source.primitiveExpression();
    if (primitiveCtx != null) {
      tree.instance = makePrimitive(primitiveCtx);
      return;
    }

    // refrence

    const refrenceCtx = source.refrenceExpression();
    if (refrenceCtx != null) {
      if (refrenceCtx.labelRefrenceMemberAccessExpression() != null) {
        // first dep of this node must be the resolved refrence
        tree.instance = tree.dependecies[0].instance;
        return;
      } else {
        throw new Error("this type of refrence is not supported yet!");
      }
    }

    // conditional

    const conditionalCtx = source.conditionalValueExpression();
    if (conditionalCtx != null) {
      const hasElseBranch = conditionalCtx.conditionalValueExpressionElseBranch().length > 0;
      if (tree.dependecies.length >= 2) {
        tree.instance = combineLatest(tree.dependecies.map(x => x.instance!)).pipe(
          map(deps => {
            const trueBranch: CondValueExp = {
              condition: deps[0],
              value: deps[1]
            };
            if (trueBranch.condition) return trueBranch.value;
            let elseIfBranches: CondValueExp[] = chunk(
              deps.slice(2, hasElseBranch ? deps.length - 1 : deps.length)
            ).map(x => {
              return {
                condition: x[0],
                value: x[1]
              };
            });

            for (let i = 0; i < elseIfBranches.length; i++) {
              const element = elseIfBranches[i];
              if (element.condition) return element.value;
            }

            let elseBranch = hasElseBranch ? deps[deps.length - 1] : null;

            if (elseBranch != null) {
              return elseBranch;
            }

            throw new Error("not all paths returns a value");
          })
        );
        return;
      } else if (tree.dependecies.length === 1) {
        tree.instance = tree.dependecies[0].instance;
      }
    }
  }

  // expression atom
  if (isExpressionContext(source)) {
    // if has single atom just check for prefix + or -
    const atom = source.atom();
    if (atom != null) {
      return handleAtom(atom, tree);
    }
  }

  return;
}

function chunk<T>(input: T[], parts: number = 2): T[][] {
  let result: T[][] = [];
  for (let i = 0; i < input.length - 1; i += parts) {
    result.push([input[i], input[i + 1]]);
  }
  return result;
}

function makePrimitive(atom: PrimitiveExpressionContext): Observable<any> {
  const stringCtx = atom.StringLiteral();
  if (stringCtx != null) {
    let value = stringCtx.text;
    value = value.substring(1, value.length - 1);
    return new BehaviorSubject<string>(value).asObservable();
  }

  const boolCtx = atom.BooleanLiteral();
  if (boolCtx != null) {
    let value = boolCtx.text === "true";
    return new BehaviorSubject<boolean>(value).asObservable();
  }

  const numberCtx = atom.NumberLiteral();
  if (numberCtx != null) {
    let value = Number(numberCtx.text);
    return new BehaviorSubject<number>(value).asObservable();
  }

  throw new Error("primitive type not supported!");
}

function isAtomContext(value: any): value is AtomContext {
  return value instanceof AtomContext;
}

function isExpressionContext(value: any): value is ExpressionContext {
  return value instanceof ExpressionContext;
}
