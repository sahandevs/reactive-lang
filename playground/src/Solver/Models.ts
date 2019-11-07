export type Identifier = string;

export interface Namespace {
  type: NodeTypes.NameSpace;
  name: Identifier;
  parent: Namespace | null;
  children: (Struct | Namespace)[];
}

export interface Struct {
  type: NodeTypes.Struct;
  name: Identifier;
  parent: Namespace;
}
export enum NodeTypes {
  Struct = "Struct",
  NameSpace = "Namespace"
}
export function isNamespace(value: any): value is Namespace {
  return value.type === NodeTypes.NameSpace;
}

export function isStruct(value: any): value is Struct {
  return value.type === NodeTypes.Struct;
}
