import * as C from "../Parser/ReactiveGrammerParser";
import { ReactiveGrammerListener } from "../Parser/ReactiveGrammerListener";
import { describeNamespaceTree } from "./Utils";
import {
  Namespace,
  Struct,
  NodeTypes,
  Property,
  NameDefinition,
  MixinDefinition,
  AttributeUsageDefinition
} from "./Models";
import { Solver } from "./Solver";

const zip = (arr1: any[], arr2: any[]) => arr1.map((k, i) => [k, arr2[i]]);

export class ReactiveListener implements ReactiveGrammerListener {
  rootNamespace: Namespace;
  currentNamespace: Namespace;

  constructor(private logger: (v: string) => void, private solver: (v: Solver) => void) {
    this.rootNamespace = {
      type: NodeTypes.NameSpace,
      name: "root",
      children: [],
      parent: null,
      names: []
    };
    this.currentNamespace = this.rootNamespace;
  }

  enterSourceFile(ctx: C.SourceFileContext) {
    this.rootNamespace = {
      type: NodeTypes.NameSpace,
      name: "root",
      children: [],
      parent: null,
      names: []
    };
    this.currentNamespace = this.rootNamespace;
  }

  enterNamespaceDefinition(ctx: C.NamespaceDefinitionContext) {
    const namespace: Namespace = {
      type: NodeTypes.NameSpace,
      name: ctx.IDENTIFIER().text,
      children: [],
      parent: this.currentNamespace,
      names: []
    };
    this.currentNamespace.children.push(namespace);
    this.currentNamespace = namespace;
  }

  exitNamespaceDefinition() {
    this.currentNamespace = this.currentNamespace.parent == null ? this.rootNamespace : this.currentNamespace.parent;
  }

  currentStruct: Struct | null = null;

  enterStructDefinition(ctx: C.StructDefinitionContext) {
    const mixins: MixinDefinition[] = [];
    const whichIsCtx = ctx.structWhichIsDefinition();
    if (whichIsCtx != null) {
      whichIsCtx.labelableRefrenceName().forEach(ref => {
        let label = ref.label();
        let name = ref.refrenceName().text;
        mixins.push({
          label: label == null ? undefined : label.text,
          refrenceName: name
        });
      });
    }
    const struct: Struct = {
      type: NodeTypes.Struct,
      name: ctx.labelableIdentifier().IDENTIFIER().text,
      parent: this.currentNamespace,
      properties: [],
      names: [],
      context: ctx,
      mixins: mixins,
      attributes: []
    };
    this.currentNamespace.children.push(struct);
    this.currentStruct = struct;
  }

  exitStructDefinition() {
    this.currentStruct = null;
  }

  enterNameDefinition(ctx: C.NameDefinitionContext) {
    const name: NameDefinition = {
      context: ctx
    };
    if (this.currentStruct != null) {
      this.currentStruct.names.push(name);
    } else {
      this.currentNamespace.names.push(name);
    }
  }

  currentProperty: Property | null = null;
  enterPropertyDefinition(ctx: C.PropertyDefinitionContext) {
    let propertyDefaultOptionContext: C.PropertyDefaultOptionContext | null = null;
    let readonly: boolean = false;
    ctx.propertyOptions().forEach(option => {
      propertyDefaultOptionContext = option.propertyDefaultOption()!;
      if (option.propertyReadonlyOption() != null) {
        readonly = true;
      }
    });

    const property: Property = {
      name: ctx.IDENTIFIER().text,
      parent: this.currentStruct!,
      typeName: {
        name: ctx.typeRefrence().text
      },
      type: NodeTypes.Property,
      attributes: [],
      defaultOption:
        propertyDefaultOptionContext == null
          ? null
          : {
              context: propertyDefaultOptionContext,
              isVar: propertyDefaultOptionContext!.VAR() != null
            },
      readonly: readonly
    };
    this.currentProperty = property;
    this.currentStruct!.properties.push(property);
  }

  exitPropertyDefinition() {
    this.currentProperty = null;
  }

  enterAttributeUsage(ctx: C.AttributeUsageContext) {
    const attrNameTerminal = ctx.ATTRIBUTE_USAGE_NAME().text;
    let parameters: { [key: string]: string } = {};
    const paramCtx = ctx.parameters();
    if (paramCtx != null) {
      const paramBodyCtx = paramCtx.parameterBody();
      if (paramBodyCtx != null) {
        zip(paramBodyCtx.IDENTIFIER(), paramBodyCtx.expression()).forEach(
          ([name, value]) => (parameters[name.text] = value.text)
        );
      }
    }
    const attr: AttributeUsageDefinition = {
      context: ctx,
      name: attrNameTerminal.substring(1, attrNameTerminal.length),
      parameters: parameters
    };

    if (this.currentProperty != null) {
      this.currentProperty.attributes.push(attr);
      return;
    }

    if (this.currentStruct != null) {
      this.currentStruct.attributes.push(attr);
      return;
    }
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
