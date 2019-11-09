import { Namespace, Struct, isNamespace, isStruct } from "./Models";
import { NodeInstance, Instance } from "./NodeInstance";
import { Observable, BehaviorSubject } from "rxjs";
import { StructPropertyDependencyAnalyzer } from "./Analyzer/StructPropertyDependencyAnalyzer";

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
    return getStructFromFullname(reducedName, namespace.children.find(
      x => isNamespace(x) && x.name === namespacePath[0]
    ) as Namespace);
  }
}

export class Solver {
  private structs: Struct[];

  constructor(public root: Namespace) {
    this.structs = flatStructsFromNamespace(root);
    // analyzer
  }

  getStructByName(name: string): Struct {
    return this.structs.find(x => getStructFullName(x) === name)!;
  }

  getStructFullNames(): string[] {
    return this.structs.map(x => getStructFullName(x));
  }

  instantiateStruct(fullName: string, defaultValue: any = null): Instance {
    let instance = this.tryInstantiateCoreTypes(fullName);
    if (instance) return instance;
    const struct = getStructFromFullname(fullName, this.root);
    const node = new StructPropertyDependencyAnalyzer(struct);
    let _nodeInstance = new NodeInstance(node.rootNode, this);
    return _nodeInstance;
  }

  tryInstantiateCoreTypes(fullName: string, isVar: boolean = false, defaultValue: any = null): Observable<any> | null {
    let observable: BehaviorSubject<any> | null = null;
    if (fullName === `Core:String`) {
      observable = new BehaviorSubject(defaultValue);
    } else if (fullName === `Core:Int`) {
      observable = new BehaviorSubject(defaultValue);
    } else if (fullName.startsWith(`Core:List`)) {
      observable = new BehaviorSubject(defaultValue);
    } else if (fullName.startsWith(`Core:Core:NamedCollection`)) {
      observable = new BehaviorSubject(defaultValue);
    } else if (fullName.startsWith(`Core:Var`)) {
      const reducedName = fullName
        .replace(`Core:Var`, "")
        .replace("of", "")
        .trimLeft();
      observable = this.tryInstantiateCoreTypes(reducedName, true, defaultValue) as any;
      isVar = true;
    }

    if (observable != null && !isVar) {
      return observable.asObservable();
    }

    return observable;
  }
}
