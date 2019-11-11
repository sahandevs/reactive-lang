import { Solver } from "./Solver";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { Node, NOT_WALKED_YET, Refrence } from "./Analyzer/StructPropertyDependencyAnalyzer";
import {
  AtomContext,
  PrimitiveExpressionContext,
  ExpressionContext,
  RefrenceNameContext,
  LabelRefrenceMemberAccessExpressionContext
} from "../Parser/ReactiveGrammerParser";
import { isProperty, NameDefinition, Namespace, Struct, isStruct } from "./Models";
export type Instance = Observable<any> | NodeInstance;

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

export class NameInstance {
  constructor(private definition: NameDefinition, private parent: Namespace | Struct) {}
}

function createNameInstancesFromNode(node: Node): NameInstance[] {
  if (!isStruct(node.refrence.value)) return [];
  return node.refrence.value.names.map(name => new NameInstance(name, node.refrence.value as Struct));
}

export class NodeInstance {
  tree: InstanceNodeTree;
  names: NameInstance[];
  constructor(node: Node, private solver: Solver) {
    this.tree = nodeToInstanceNodeTree(node);
    this.names = createNameInstancesFromNode(node);
  }

  getName(name: RefrenceNameContext | LabelRefrenceMemberAccessExpressionContext): NameInstance {
    // if is LabelRefrenceMemberAccessExpressionContext => find in NodeInstance
    if (name instanceof LabelRefrenceMemberAccessExpressionContext) {
      throw new Error("not implemented yet");
    } else {
      // else if is RefrenceNameContext find in globalNames from solver
      return this.solver.getName(name);
    }
  }

  init(initialValue: { [key: string]: Instance }) {
    // TODO: resolve names
    // handle property default overrides
    this.tree.dependecies.forEach(dep => {
      if (isProperty(dep.node.refrence.value)) {
        const name = dep.node.refrence.value.name;
        const value = initialValue[name];
        if (value == null) return;
        if (dep.node.refrence.value.readonly) throw new Error("Readonly properties default value cannot be overridden");
        dep.instance = value;
      }
    });

    resolve(this.tree, initialValue, this.solver);
  }
}

function resolve(tree: InstanceNodeTree, initialValue: { [key: string]: Instance }, solver: Solver) {
  // check if has an instance (resolved)
  if (tree.instance != null) return;
  // resolve dependecies if have any
  if (tree.dependecies.length > 0) {
    tree.dependecies.forEach(dep => resolve(dep, initialValue, solver));
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
        if (instance instanceof NodeInstance) throw new Error("cannot use not operator for struct");
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
      if (
        tree.dependecies[0].instance! instanceof NodeInstance ||
        tree.dependecies[1].instance! instanceof NodeInstance
      )
        throw new Error("cannot use basic operators for struct");

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
      } else if (operator === "==") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a === b)
        );
      } else if (operator === "!=") {
        tree.instance = combineLatest(tree.dependecies[0].instance!, tree.dependecies[1].instance!).pipe(
          map(([a, b]) => a !== b)
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
  handleAtom(source, tree, solver);
}

type CondValueExp = {
  condition: any;
  value: any;
};

function handleAtom(source: Refrence["value"], tree: InstanceNodeTree, solver: Solver): void {
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
        tree.instance = combineLatest(
          tree.dependecies.map(x => {
            if (x.instance! instanceof NodeInstance) return new BehaviorSubject<NodeInstance>(x.instance!);
            return x.instance!;
          })
        ).pipe(
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
        // TODO: check why i should check this?!
        tree.instance = tree.dependecies[0].instance;
        return;
      }
    }

    // new struct expression
    const newStructCtx = source.newStructExpression();
    if (newStructCtx != null) {
      if (
        tree.dependecies.length === 1 &&
        tree.dependecies[0].instance !== null &&
        tree.dependecies[0].instance! instanceof NodeInstance
      ) {
        // TODO: check why i should check this?!
        // clue : it may because of nested expressions! same as the
        // check in the atomExpression above
        tree.instance = tree.dependecies[0].instance!;
        return;
      } else {
        const structName = newStructCtx.refrenceName().text;
        const struct = solver.instantiateStruct(structName) as NodeInstance;
        // collect parameters
        let params: { [key: string]: Instance } = {};
        let paramNames: string[];
        const paramBody = newStructCtx.parameters().parameterBody();
        if (paramBody != null) {
          // TODO: optimize this:
          paramNames = paramBody.text.split(",").map(x => x.split(":")[0]);
        }
        tree.dependecies.forEach((dep, i) => {
          params[paramNames[i]] = dep.instance!;
        });
        struct.init(params);
        tree.instance = struct;
        return;
      }
    }
  }

  // expression atom
  if (isExpressionContext(source)) {
    // if has single atom just check for prefix + or -
    const atom = source.atom();
    if (atom != null) {
      handleAtom(atom, tree, solver);
      return;
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
