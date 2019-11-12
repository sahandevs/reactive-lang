import { Solver } from "./Solver";
import {
  Observable,
  BehaviorSubject,
  combineLatest,
  isObservable,
  Subscription
} from "rxjs";
import { map, flatMap } from "rxjs/operators";
import {
  Node,
  NOT_WALKED_YET,
  Refrence,
  isUnknownLabelRefrence,
  expressionToNode,
  resolveRawRefrences
} from "./Analyzer/StructPropertyDependencyAnalyzer";
import {
  AtomContext,
  PrimitiveExpressionContext,
  ExpressionContext,
  RefrenceNameContext,
  LabelRefrenceMemberAccessExpressionContext,
  NamedCollectionMemberContext,
  ArrayMemberContext
} from "../Parser/ReactiveGrammerParser";
import {
  isProperty,
  NameDefinition,
  Namespace,
  Struct,
  isStruct
} from "./Models";
import { isArray } from "util";
import { flattenObservables } from "./Analyzer/Utils";
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

function getNamespaceFullName(namespace: Namespace): string {
  let parent: Namespace | null = namespace.parent;
  let name = namespace.name;
  while (parent != null) {
    name = `${parent.name}:${name}`;
    parent = parent.parent;
  }
  return name;
}

export class NameInstance {
  get value(): Observable<any> {
    return this._value;
  }

  private _value: Observable<any>;
  public name: string;
  constructor(
    public definition: NameDefinition,
    private parent: Namespace | Struct,
    private solver: Solver
  ) {
    const baseName = definition.context.IDENTIFIER().text;
    if (isStruct(parent)) {
      this.name = baseName;
    } else {
      this.name = `${getNamespaceFullName(parent)}:${baseName}`;
    }

    this._value = new BehaviorSubject<string>(
      `name:${definition.context.text}#${solver.globalNameInstanceCounter}`
    ).asObservable();
    solver.globalNameInstanceCounter += 1;
  }
}

function createNameInstancesFromNode(
  node: Node,
  solver: Solver
): NameInstance[] {
  if (!isStruct(node.refrence.value)) return [];
  return node.refrence.value.names.map(
    name => new NameInstance(name, node.refrence.value as Struct, solver)
  );
}

export class NodeInstance {
  tree: InstanceNodeTree;
  names: NameInstance[];
  constructor(
    node: Node,
    public solver: Solver,
    public labelCache: { [key: string]: Node }
  ) {
    this.tree = nodeToInstanceNodeTree(node);
    this.names = createNameInstancesFromNode(node, solver);
  }

  getName(
    name: RefrenceNameContext | LabelRefrenceMemberAccessExpressionContext
  ): NameInstance | undefined {
    // if is LabelRefrenceMemberAccessExpressionContext => find in NodeInstance
    if (name instanceof LabelRefrenceMemberAccessExpressionContext) {
      const accessChain = name.IDENTIFIER();
      // TODO: add support for chain call
      return this.names.find(x => x.name === accessChain[0].text);
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
        if (dep.node.refrence.value.readonly)
          throw new Error(
            "Readonly properties default value cannot be overridden"
          );
        dep.instance = value;
      }
    });

    resolve(this.tree, initialValue, this);
  }
}

function handleExpression(
  source: ExpressionContext,
  tree: InstanceNodeTree,
  initialValue: { [key: string]: Instance },
  scope: NodeInstance
): boolean {
  // single expressions
  let expressions = source.expression();

  if (expressions.length === 0) {
    tree.instance = tree.dependecies[0].instance!;
    return true;
  }

  if (expressions.length === 1 && source.IS() == null) {
    let instance = tree.dependecies[0].instance!;
    const expr = expressions[0];
    // handle not
    if (expr.NOT()) {
      if (instance instanceof NodeInstance)
        throw new Error("cannot use not operator for struct");
      instance = instance.pipe(map(x => !x));
    }
    // handle paran
    tree.instance = instance;
    return true;
  }

  // TODO: handle is expression

  // multi expression
  if (expressions.length === 2) {
    const operator = source.children![1].text;
    if (tree.dependecies.length === 1) {
      tree.instance = tree.dependecies[0].instance;
      return true;
    }
    if (
      tree.dependecies[0].instance! instanceof NodeInstance ||
      tree.dependecies[1].instance! instanceof NodeInstance
    )
      throw new Error("cannot use basic operators for struct");

    if (operator === "+") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a + b));
    } else if (operator === "-") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a - b));
    } else if (operator === "*") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a * b));
    } else if (operator === "/") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a / b));
    } else if (operator === "-") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a - b));
    } else if (operator === ">") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a > b));
    } else if (operator === ">=") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a >= b));
    } else if (operator === "<") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a < b));
    } else if (operator === "<=") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a <= b));
    } else if (operator === "or") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a || b));
    } else if (operator === "and") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a && b));
    } else if (operator === "==") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a === b));
    } else if (operator === "!=") {
      tree.instance = combineLatest(
        tree.dependecies[0].instance!,
        tree.dependecies[1].instance!
      ).pipe(map(([a, b]) => a !== b));
    } else {
      throw new Error("operator " + operator + " not supported yet!");
    }
    return true;
  }

  return false;
}

function resolve(
  tree: InstanceNodeTree,
  initialValue: { [key: string]: Instance },
  scope: NodeInstance
) {
  // check if has an instance (resolved)
  if (tree.instance != null) return;
  // resolve dependecies if have any
  if (tree.dependecies.length > 0) {
    tree.dependecies.forEach(dep => resolve(dep, initialValue, scope));
  }
  // create the instance

  const source = tree.node.refrence.value;

  if (isExpressionContext(source)) {
    if (handleExpression(source, tree, initialValue, scope)) return;
  }

  // named collection member

  if (source instanceof NamedCollectionMemberContext) {
    if (handleExpression(source.expression(), tree, initialValue, scope)) {
      return;
    } else {
      throw new Error("unhandled situtation");
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

  // handle unsure cases

  if (isUnknownLabelRefrence(source)) {
    const nameInstance = scope.getName(source.context);
    if (nameInstance != null) {
      tree.instance = nameInstance.value;
    } else {
      throw new Error(`cannot resolve ${source.context.text}`);
    }
  }

  if (source instanceof RefrenceNameContext) {
    const nameInstance = scope.getName(source);
    if (nameInstance != null) {
      tree.instance = nameInstance.value;
    } else {
      throw new Error(`cannot resolve ${source.text}`);
    }
  }

  // atom
  handleAtom(source, tree, scope, initialValue);
}

function isInstance(value: any): value is Instance {
  return isObservable(value) || value instanceof NodeInstance;
}

type CondValueExp = {
  condition: any;
  value: any;
};

function handleAtom(
  source: Refrence["value"],
  tree: InstanceNodeTree,
  scope: NodeInstance,
  initialValue: { [key: string]: Instance }
): void {
  // expression atom
  if (isExpressionContext(source)) {
    // if has single atom just check for prefix + or -
    const atom = source.atom();
    if (atom != null) {
      handleAtom(atom, tree, scope, initialValue);
      return;
    }
  }

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
      if (
        tree.node.dependencies !== NOT_WALKED_YET &&
        isInstance(tree.node.dependencies[0].refrence.value)
      ) {
        // it's a direct value from forEach or ...
        tree.instance = tree.node.dependencies[0].refrence.value;
      } else {
        tree.instance = tree.dependecies[0].instance;
      }

      return;
    }

    // conditional

    const conditionalCtx = source.conditionalValueExpression();
    if (conditionalCtx != null) {
      const hasElseBranch =
        conditionalCtx.conditionalValueExpressionElseBranch().length > 0;
      if (tree.dependecies.length >= 2) {
        tree.instance = combineLatest(
          tree.dependecies.map(x => {
            if (x.instance! instanceof NodeInstance)
              return new BehaviorSubject<NodeInstance>(x.instance!);
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

            return null;
          })
        );
        return;
      } else {
        throw new Error("unresolved dependencies");
        // return;
      }
    }

    // new struct expression
    const newStructCtx = source.newStructExpression();
    if (newStructCtx != null) {
      const structName = newStructCtx.refrenceName().text;
      const struct = scope.solver.instantiateStruct(structName) as NodeInstance;
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

    const namedCollection = source.namedCollectionExpression();
    if (namedCollection != null) {
      // if names and expressino length is not equal there is a bug
      // clue: it may be because of expression in expressions like others ( see above )
      const members = namedCollection.namedCollectionMember();
      const expressions = tree.dependecies.map(x => {
        if (x.instance instanceof NodeInstance) {
          return new BehaviorSubject<NodeInstance>(x.instance);
        } else {
          return x.instance!;
        }
      });
      const names = members.map(member => {
        const refName = member.refrenceName();
        return scope.getName(
          refName == null
            ? member.labelRefrenceMemberAccessExpression()!
            : refName
        )!.value;
      });
      const combined = zipFlatten(names, expressions);
      tree.instance = combineLatest(combined).pipe(
        map(pairs => {
          const chunkedPairs = chunk(pairs, 2);
          let result: any = {};
          for (let [key, value] of chunkedPairs) {
            result[key] = value;
          }
          return result;
        })
      );
    }

    if (source.arrayExpression() != null) {
      const result: (Observable<any> | NodeInstance)[] = [];
      // if member type is expression simply add to value
      // else it's a forEach member
      tree.dependecies.forEach(dep => {
        const ref = dep.node.refrence.value as ArrayMemberContext;
        if (ref.arrayForeachMember()) {
          result.push(
            createForeachItemsExpression(dep, tree, scope, initialValue)
          );
          return;
        }

        if (ref.expression()) {
          result.push(dep.dependecies[0]!.instance!);
          return;
        }

        throw new Error("not supported");
      });

      tree.instance = combineLatest(
        result.map(i => {
          if (i instanceof NodeInstance) {
            return new BehaviorSubject<NodeInstance>(i);
          }
          return i;
        })
      ).pipe(
        map(items => {
          return flattenObservables(
            flatten(items)
              .filter(x => x != null)
              .map(x => {
                if (isObservable(x)) return x;
                return new BehaviorSubject(x);
              })
          );
        }),
        flatMap(x => x)
      );
    }
  }

  return;
}

function flatten(array: any[]): any[] {
  let result: any[] = [];
  array.forEach(x => {
    if (isArray(x)) {
      x.forEach(v => result.push(v));
    } else {
      result.push(x);
    }
  });
  return result;
}

function createForeachItemsExpression(
  instanceNode: InstanceNodeTree,
  tree: InstanceNodeTree,
  scope: NodeInstance,
  initialValue: { [key: string]: Instance }
): Observable<any> {
  const _forEachExpr = (instanceNode.node.refrence
    .value as ArrayMemberContext).arrayForeachMember()!;
  const _exprNode = _forEachExpr.expression(1)!;
  const label = _forEachExpr.label().text;
  // array for each member
  const itemsInstance = instanceNode.dependecies[0].instance!;
  if (itemsInstance instanceof NodeInstance) {
    throw new Error("using a node instance here is invalid!");
  }

  let updated = new BehaviorSubject<null>(null);
  let subscriptions: Subscription[] = [];
  function updateUpstream() {
    subscriptions.forEach(x => x.unsubscribe());
    subscriptions = [];
    updated.next(null);
  }

  return combineLatest(itemsInstance, updated).pipe(
    map(([items, _]) => {
      const instances: Observable<any>[] = [];
      items.forEach((item: any, i: number) => {
        let _node = expressionToNode(_exprNode)[0];
        let labelToNode: { [key: string]: Node } = { ...scope.labelCache };
        const ref = {
          isRaw: false,
          value: new BehaviorSubject(item)
        };
        labelToNode[label] = {
          dependencies: [
            {
              dependencies: [],
              refrence: ref
            }
          ],
          refrence: ref
        };
        resolveRawRefrences(_node, labelToNode);
        const vInstanceNode = nodeToInstanceNodeTree(_node);
        resolve(vInstanceNode, initialValue, scope);
        if (vInstanceNode.instance! instanceof NodeInstance)
          instances.push(new BehaviorSubject(vInstanceNode.instance!));
        else instances.push(vInstanceNode.instance!);
      });
      let updateCount = 0;

      instances.forEach(i =>
        subscriptions.push(
          i.subscribe(x => {
            updateCount += 1;
            if (updateCount > instances.length) {
              updateUpstream();
            }
          })
        )
      );

      return instances;
    })
  );
}

function chunk<T>(input: T[], parts: number = 2): T[][] {
  let result: T[][] = [];
  for (let i = 0; i < input.length - 1; i += parts) {
    result.push([input[i], input[i + 1]]);
  }
  return result;
}

function zipFlatten<T>(a: T[], b: T[]) {
  var arr: T[] = [];
  for (let key in a) {
    arr.push(a[key]);
    arr.push(b[key]);
  }
  return arr;
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
