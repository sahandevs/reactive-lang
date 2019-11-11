import { PropertyDefaultOptionContext, StructDefinitionContext, NameDefinitionContext } from "../Parser/ReactiveGrammerParser";

export type Identifier = string;

export interface Namespace {
  type: NodeTypes.NameSpace;
  name: Identifier;
  parent: Namespace | null;
  names: NameDefinition[];
  children: (Struct | Namespace)[];
}

export interface TypeName {
  name: String;
}

export interface NameDefinition {
  context: NameDefinitionContext
}

export interface Struct {
  type: NodeTypes.Struct;
  name: Identifier;
  parent: Namespace;
  properties: Property[];
  names: NameDefinition[];
  context: StructDefinitionContext;
}

export interface PropertyDefaultOption {
  context: PropertyDefaultOptionContext;
  isVar: boolean;
}

export interface Property {
  type: NodeTypes.Property;
  name: Identifier;
  typeName: TypeName;
  parent: Struct;
  defaultOption: PropertyDefaultOption | null;
  readonly: boolean
}

export enum NodeTypes {
  Struct = "Struct",
  NameSpace = "Namespace",
  Property = "Property"
}
export function isNamespace(value: any): value is Namespace {
  return value.type === NodeTypes.NameSpace;
}

export function isStruct(value: any): value is Struct {
  return value.type === NodeTypes.Struct;
}

export function isProperty(value: any): value is Property {
  return value.type === NodeTypes.Property;
}
