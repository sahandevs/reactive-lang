import { Namespace, Struct, isNamespace, isStruct } from "./Models";
import { NodeInstance, Instance, NameInstance } from "./NodeInstance";
import { Observable, BehaviorSubject } from "rxjs";
import { StructPropertyDependencyAnalyzer } from "./Analyzer/StructPropertyDependencyAnalyzer";
import { RefrenceNameContext } from "../Parser/ReactiveGrammerParser";
import { isSubject } from "./Utils";
import { map } from "rxjs/operators";

export interface Application {
  root: Namespace;
}

export function flatStructsFromNamespace(root: Namespace): Struct[] {
  let result: Struct[] = [];
  root.children.forEach(element => {
    if (isNamespace(element)) {
      result = [...result, ...flatStructsFromNamespace(element)];
    } else if (isStruct(element)) {
      result.push(element);
    }
  });
  return result;
}

export function getStructFullName(struct: Struct): string {
  let suffix = "";
  let parent: Namespace | null = struct.parent;
  while (parent != null && parent.name !== "root") {
    suffix = `${parent.name}:${suffix}`;
    parent = parent.parent;
  }
  return `${suffix}${struct.name}`;
}

function getStructFromFullname(fullname: string, namespace: Namespace): Struct {
  const parts = fullname.split(":");
  const structName = parts[parts.length - 1];
  if (parts.length === 1) {
    return namespace.children.find(x => isStruct(x) && x.name === structName) as Struct;
  } else {
    const namespacePath = parts.slice(0, parts.length - 1);
    let reducedName = namespacePath.slice(1, namespacePath.length).join(":") + ":" + structName;
    reducedName = reducedName.startsWith(":") ? reducedName.substring(1, reducedName.length) : reducedName;
    return getStructFromFullname(
      reducedName,
      namespace.children.find(x => isNamespace(x) && x.name === namespacePath[0]) as Namespace
    );
  }
}

function createNameInstancesFromNamespace(node: Namespace, solver: Solver): NameInstance[] {
  let names: NameInstance[] = [];
  node.names.forEach(name => {
    names.push(new NameInstance(name, node, solver));
  });
  node.children.forEach(child => {
    if (isNamespace(child)) {
      names = [...names, ...createNameInstancesFromNamespace(child, solver)];
    }
  });
  return names;
}

export class Solver {
  private structs: Struct[];
  private globalNames: NameInstance[];
  globalNameInstanceCounter: number = 0;

  constructor(public root: Namespace) {
    this.structs = flatStructsFromNamespace(root);
    this.globalNames = createNameInstancesFromNamespace(root, this);
    // analyzer
  }

  getStructsByAttribute(name: string): Struct[] {
    return this.structs.filter(x => x.attributes.find(a => a.name === name) != null);
  }

  getName(name: RefrenceNameContext): NameInstance | undefined {
    const target = `root:${name.text}`;
    return this.globalNames.find(x => x.name === target);
  }

  getStructByName(name: string): Struct {
    return this.structs.find(x => getStructFullName(x) === name)!;
  }

  getStructFullNames(): string[] {
    return this.structs.map(x => getStructFullName(x));
  }

  instantiateStruct(
    fullName: string,
    scope: NodeInstance | null = null,
    defaultValue?: { [key: string]: Instance }
  ): Instance {
    let instance = this.tryInstantiateCoreTypes(fullName, defaultValue);
    if (instance) return instance;
    const struct = getStructFromFullname(fullName, this.root);
    const node = new StructPropertyDependencyAnalyzer(struct);
    let _nodeInstance = new NodeInstance(node.rootNode, this, node.labelCache, scope);
    if (defaultValue != null) {
      _nodeInstance.init(defaultValue);
    }
    return _nodeInstance;
  }

  tryInstantiateCoreTypes(
    fullName: string,
    defaultValue?: { [key: string]: Instance },
    isVar = true
  ): Observable<any> | null {
    let observable: BehaviorSubject<any> | null = null;
    if (fullName === `Core:String`) {
      observable = new BehaviorSubject(defaultValue!["value"]!);
    } else if (fullName === `Core:Int`) {
      observable = new BehaviorSubject(defaultValue!["value"]!);
    } else if (fullName.startsWith(`Core:List`)) {
      observable = new BehaviorSubject(defaultValue!["value"]!);
    } else if (fullName.startsWith(`Core:Core:NamedCollection`)) {
      observable = new BehaviorSubject(defaultValue!["value"]!);
    } else if (fullName.startsWith(`Core:Var`)) {
      const reducedName = fullName
        .replace(`Core:Var`, "")
        .replace("of", "")
        .trimLeft();
      observable = this.tryInstantiateCoreTypes(reducedName, defaultValue, true) as any;
      isVar = true;
    } else if (fullName === `Core:Set`) {
      const variableToSet = defaultValue!["variable"] as BehaviorSubject<any>;
      if (!isSubject(variableToSet)) {
        throw new Error("var must be a Subject (a property without any expressions)");
      }
      const expression = defaultValue!["value"] as Observable<any>;
      return expression.pipe(
        map(value => () => {
          variableToSet.next(new BehaviorSubject(value));
        })
      );
    } else if (fullName === `Core:Log`) {
    }

    if (observable != null && !isVar) {
      return observable.asObservable();
    }

    return observable;
  }
}
