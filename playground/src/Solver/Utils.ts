import { Namespace, isNamespace } from "./Models";
import { BehaviorSubject, isObservable } from "rxjs";

export function describeNamespaceTree(namespace: Namespace, space: string = "  "): string {
  let result = namespace.name;
  result +=
    "\n" +
    namespace.children.map(v => `${space}${isNamespace(v) ? describeNamespaceTree(v, space + space) : v.name}\n`);
  return result;
}

export function isSubject(value: any): value is BehaviorSubject<any> {
  return typeof value.next === "function" && isObservable(value);
}