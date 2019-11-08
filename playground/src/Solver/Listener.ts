import * as C from "../Parser/ReactiveGrammerParser";
import { ReactiveGrammerListener } from "../Parser/ReactiveGrammerListener";
import { describeNamespaceTree } from "./Utils";
import { Namespace, Struct, NodeTypes, Property } from "./Models";
import { Solver } from "./Solver";

export class ReactiveListener implements ReactiveGrammerListener {
  rootNamespace: Namespace;
  currentNamespace: Namespace;

  constructor(private logger: (v: string) => void, private solver: (v: Solver) => void) {
    this.rootNamespace = {
      type: NodeTypes.NameSpace,
      name: "root",
      children: [],
      parent: null
    };
    this.currentNamespace = this.rootNamespace;
  }

  enterSourceFile(ctx: C.SourceFileContext) {
    this.rootNamespace = {
      type: NodeTypes.NameSpace,
      name: "root",
      children: [],
      parent: null
    };
    this.currentNamespace = this.rootNamespace;
  }

  enterNamespaceDefinition(ctx: C.NamespaceDefinitionContext) {
    const namespace: Namespace = {
      type: NodeTypes.NameSpace,
      name: ctx.IDENTIFIER().text,
      children: [],
      parent: this.currentNamespace
    };
    this.currentNamespace.children.push(namespace);
    this.currentNamespace = namespace;
  }

  exitNamespaceDefinition() {
    this.currentNamespace = this.currentNamespace.parent == null ? this.rootNamespace : this.currentNamespace.parent;
  }

  currentStruct: Struct | null = null;

  enterStructDefinition(ctx: C.StructDefinitionContext) {
    const struct: Struct = {
      type: NodeTypes.Struct,
      name: ctx.labelableIdentifier().IDENTIFIER().text,
      parent: this.currentNamespace,
      properties: [],
      context: ctx
    };
    this.currentNamespace.children.push(struct);
    this.currentStruct = struct;
  }

  exitStructDefinition() {
    this.currentStruct = null;
  }

  enterPropertyDefinition(ctx: C.PropertyDefinitionContext) {
    let propertyDefaultOptionContext: C.PropertyDefaultOptionContext | null = null;
    ctx.propertyOptions().forEach(option => {
      propertyDefaultOptionContext = option.propertyDefaultOption()!;
    });

    const property: Property = {
      name: ctx.IDENTIFIER().text,
      parent: this.currentStruct!,
      typeName: {
        name: ctx.typeRefrence().text
      },
      type: NodeTypes.Property,
      defaultOption:
        propertyDefaultOptionContext == null
          ? null
          : {
              context: propertyDefaultOptionContext,
              isVar: propertyDefaultOptionContext!.VAR() != null
            }
    };
    this.currentStruct!.properties.push(property);
  }

  exitSourceFile() {
    this.logger(`
number of children in root: ${this.rootNamespace.children.length}

======TREE========
${describeNamespaceTree(this.rootNamespace)}
==================
    `);
    this.solver(new Solver(this.rootNamespace));
  }
}
