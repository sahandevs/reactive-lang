import { Namespace, Struct, isNamespace, isStruct } from "./Models";
import { StructInstance } from "./StructInstance";

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

  instantiateStruct(fullName: string): StructInstance {
    return new StructInstance(getStructFromFullname(fullName, this.root), this);
  }
}
