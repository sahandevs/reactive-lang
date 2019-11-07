import { Namespace, isNamespace } from "./Models";

export function describeNamespaceTree(namespace: Namespace, space: string = "  "): string {
  let result = namespace.name;
  result +=
    "\n" +
    namespace.children.map(v => `${space}${isNamespace(v) ? describeNamespaceTree(v, space + space) : v.name}\n`);
  return result;
}
