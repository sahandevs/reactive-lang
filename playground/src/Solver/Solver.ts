import { Namespace, Struct, isNamespace, isStruct } from "./Models";
import { StructInstance, Instance } from "./StructInstance";
import { Observable, BehaviorSubject } from "rxjs";

export interface Application {
  root: Namespace;
}

function flatStructsFromNamespace(root: Namespace): Struct[] {
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

  constructor(private root: Namespace) {
    this.structs = flatStructsFromNamespace(root);
    // analyzer
  }

  getStructFullNames(): string[] {
    return this.structs.map(x => getStructFullName(x));
  }

  instantiateStruct(fullName: string): Instance {
    let instance = this.tryInstantiateCoreTypes(fullName);
    if (instance) return instance;
    return new StructInstance(getStructFromFullname(fullName, this.root), this);
  }

  tryInstantiateCoreTypes(fullName: string, isVar: boolean = false): Observable<any> | null {
    let observable: BehaviorSubject<any> | null = null;
    if (fullName === core`String`) {
      observable = new BehaviorSubject("");
    } else if (fullName === core`Int`) {
      observable = new BehaviorSubject(0);
    } else if (fullName.startsWith(core`List`)) {
      observable = new BehaviorSubject([]);
    } else if (fullName.startsWith(core`Core:NamedCollection`)) {
      observable = new BehaviorSubject({});
    } else if (fullName.startsWith(core`Var`)) {
      const reducedName = fullName.replace(core`Var`, '').replace('of', '').trimLeft();
      observable = this.tryInstantiateCoreTypes(reducedName, true) as any;
      isVar = true;
    }

    if (observable != null && !isVar) {
      return observable.asObservable();
    }

    return observable;
  }
}
function core(a: TemplateStringsArray): string {
  return `Core:${a}`;
}
