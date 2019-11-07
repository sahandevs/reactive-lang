// Generated from ../ReactiveGrammer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SourceFileContext } from "./ReactiveGrammerParser";
import { BlockContext } from "./ReactiveGrammerParser";
import { DefenitionContext } from "./ReactiveGrammerParser";
import { NamespaceDefinitionContext } from "./ReactiveGrammerParser";
import { EnumDefinitionContext } from "./ReactiveGrammerParser";
import { EnumCaseContext } from "./ReactiveGrammerParser";
import { StructDefinitionContext } from "./ReactiveGrammerParser";
import { StructWhichIsDefinitionContext } from "./ReactiveGrammerParser";
import { StructBlockItemContext } from "./ReactiveGrammerParser";
import { LabelContext } from "./ReactiveGrammerParser";
import { LabelableIdentifierContext } from "./ReactiveGrammerParser";
import { LabelableRefrenceNameContext } from "./ReactiveGrammerParser";
import { ParameterBodyContext } from "./ReactiveGrammerParser";
import { ParametersContext } from "./ReactiveGrammerParser";
import { ArgumentBodyContext } from "./ReactiveGrammerParser";
import { ArgumentsContext } from "./ReactiveGrammerParser";
import { AttributeUsageContext } from "./ReactiveGrammerParser";
import { PropertyDefinitionContext } from "./ReactiveGrammerParser";
import { PropertyOptionsContext } from "./ReactiveGrammerParser";
import { PropertyDefaultOptionContext } from "./ReactiveGrammerParser";
import { PropertyInjectedOptionContext } from "./ReactiveGrammerParser";
import { PropertyInjectorOptionContext } from "./ReactiveGrammerParser";
import { PropertyArgumentsOptionContext } from "./ReactiveGrammerParser";
import { PropertyReadonlyOptionContext } from "./ReactiveGrammerParser";
import { TypeRefrenceContext } from "./ReactiveGrammerParser";
import { RefrenceNameContext } from "./ReactiveGrammerParser";
import { GenericTypeRefrenceContext } from "./ReactiveGrammerParser";
import { ExpressionContext } from "./ReactiveGrammerParser";
import { AtomContext } from "./ReactiveGrammerParser";
import { NewStructExpressionContext } from "./ReactiveGrammerParser";
import { ArrayExpressionContext } from "./ReactiveGrammerParser";
import { ArrayMemberContext } from "./ReactiveGrammerParser";
import { NamedCollectionExpressionContext } from "./ReactiveGrammerParser";
import { NamedCollectionMemberContext } from "./ReactiveGrammerParser";
import { ArrayForeachMemberContext } from "./ReactiveGrammerParser";
import { ConditionalValueExpressionContext } from "./ReactiveGrammerParser";
import { ConditionalValueExpressionTrueBranchContext } from "./ReactiveGrammerParser";
import { ConditionalValueExpressionElseBranchContext } from "./ReactiveGrammerParser";
import { ConditionalValueExpressionElseIfBranchContext } from "./ReactiveGrammerParser";
import { PrimitiveExpressionContext } from "./ReactiveGrammerParser";
import { RefrenceExpressionContext } from "./ReactiveGrammerParser";
import { LabelRefrenceMemberAccessExpressionWithParametersContext } from "./ReactiveGrammerParser";
import { LabelRefrenceMemberAccessExpressionContext } from "./ReactiveGrammerParser";
import { TypeStaticMemberAccessExpressionContext } from "./ReactiveGrammerParser";
import { NameDefinitionContext } from "./ReactiveGrammerParser";
import { NameOptionsContext } from "./ReactiveGrammerParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ReactiveGrammerParser`.
 */
export interface ReactiveGrammerListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.defenition`.
	 * @param ctx the parse tree
	 */
	enterDefenition?: (ctx: DefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.defenition`.
	 * @param ctx the parse tree
	 */
	exitDefenition?: (ctx: DefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.namespaceDefinition`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDefinition?: (ctx: NamespaceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.namespaceDefinition`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDefinition?: (ctx: NamespaceDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	enterEnumDefinition?: (ctx: EnumDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	exitEnumDefinition?: (ctx: EnumDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.enumCase`.
	 * @param ctx the parse tree
	 */
	enterEnumCase?: (ctx: EnumCaseContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.enumCase`.
	 * @param ctx the parse tree
	 */
	exitEnumCase?: (ctx: EnumCaseContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.structDefinition`.
	 * @param ctx the parse tree
	 */
	enterStructDefinition?: (ctx: StructDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.structDefinition`.
	 * @param ctx the parse tree
	 */
	exitStructDefinition?: (ctx: StructDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.structWhichIsDefinition`.
	 * @param ctx the parse tree
	 */
	enterStructWhichIsDefinition?: (ctx: StructWhichIsDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.structWhichIsDefinition`.
	 * @param ctx the parse tree
	 */
	exitStructWhichIsDefinition?: (ctx: StructWhichIsDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.structBlockItem`.
	 * @param ctx the parse tree
	 */
	enterStructBlockItem?: (ctx: StructBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.structBlockItem`.
	 * @param ctx the parse tree
	 */
	exitStructBlockItem?: (ctx: StructBlockItemContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.labelableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterLabelableIdentifier?: (ctx: LabelableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.labelableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitLabelableIdentifier?: (ctx: LabelableIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.labelableRefrenceName`.
	 * @param ctx the parse tree
	 */
	enterLabelableRefrenceName?: (ctx: LabelableRefrenceNameContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.labelableRefrenceName`.
	 * @param ctx the parse tree
	 */
	exitLabelableRefrenceName?: (ctx: LabelableRefrenceNameContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.parameterBody`.
	 * @param ctx the parse tree
	 */
	enterParameterBody?: (ctx: ParameterBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.parameterBody`.
	 * @param ctx the parse tree
	 */
	exitParameterBody?: (ctx: ParameterBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.argumentBody`.
	 * @param ctx the parse tree
	 */
	enterArgumentBody?: (ctx: ArgumentBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.argumentBody`.
	 * @param ctx the parse tree
	 */
	exitArgumentBody?: (ctx: ArgumentBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.attributeUsage`.
	 * @param ctx the parse tree
	 */
	enterAttributeUsage?: (ctx: AttributeUsageContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.attributeUsage`.
	 * @param ctx the parse tree
	 */
	exitAttributeUsage?: (ctx: AttributeUsageContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.propertyDefinition`.
	 * @param ctx the parse tree
	 */
	enterPropertyDefinition?: (ctx: PropertyDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.propertyDefinition`.
	 * @param ctx the parse tree
	 */
	exitPropertyDefinition?: (ctx: PropertyDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.propertyOptions`.
	 * @param ctx the parse tree
	 */
	enterPropertyOptions?: (ctx: PropertyOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.propertyOptions`.
	 * @param ctx the parse tree
	 */
	exitPropertyOptions?: (ctx: PropertyOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.propertyDefaultOption`.
	 * @param ctx the parse tree
	 */
	enterPropertyDefaultOption?: (ctx: PropertyDefaultOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.propertyDefaultOption`.
	 * @param ctx the parse tree
	 */
	exitPropertyDefaultOption?: (ctx: PropertyDefaultOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.propertyInjectedOption`.
	 * @param ctx the parse tree
	 */
	enterPropertyInjectedOption?: (ctx: PropertyInjectedOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.propertyInjectedOption`.
	 * @param ctx the parse tree
	 */
	exitPropertyInjectedOption?: (ctx: PropertyInjectedOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.propertyInjectorOption`.
	 * @param ctx the parse tree
	 */
	enterPropertyInjectorOption?: (ctx: PropertyInjectorOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.propertyInjectorOption`.
	 * @param ctx the parse tree
	 */
	exitPropertyInjectorOption?: (ctx: PropertyInjectorOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.propertyArgumentsOption`.
	 * @param ctx the parse tree
	 */
	enterPropertyArgumentsOption?: (ctx: PropertyArgumentsOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.propertyArgumentsOption`.
	 * @param ctx the parse tree
	 */
	exitPropertyArgumentsOption?: (ctx: PropertyArgumentsOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.propertyReadonlyOption`.
	 * @param ctx the parse tree
	 */
	enterPropertyReadonlyOption?: (ctx: PropertyReadonlyOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.propertyReadonlyOption`.
	 * @param ctx the parse tree
	 */
	exitPropertyReadonlyOption?: (ctx: PropertyReadonlyOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.typeRefrence`.
	 * @param ctx the parse tree
	 */
	enterTypeRefrence?: (ctx: TypeRefrenceContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.typeRefrence`.
	 * @param ctx the parse tree
	 */
	exitTypeRefrence?: (ctx: TypeRefrenceContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.refrenceName`.
	 * @param ctx the parse tree
	 */
	enterRefrenceName?: (ctx: RefrenceNameContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.refrenceName`.
	 * @param ctx the parse tree
	 */
	exitRefrenceName?: (ctx: RefrenceNameContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.genericTypeRefrence`.
	 * @param ctx the parse tree
	 */
	enterGenericTypeRefrence?: (ctx: GenericTypeRefrenceContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.genericTypeRefrence`.
	 * @param ctx the parse tree
	 */
	exitGenericTypeRefrence?: (ctx: GenericTypeRefrenceContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.newStructExpression`.
	 * @param ctx the parse tree
	 */
	enterNewStructExpression?: (ctx: NewStructExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.newStructExpression`.
	 * @param ctx the parse tree
	 */
	exitNewStructExpression?: (ctx: NewStructExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.arrayMember`.
	 * @param ctx the parse tree
	 */
	enterArrayMember?: (ctx: ArrayMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.arrayMember`.
	 * @param ctx the parse tree
	 */
	exitArrayMember?: (ctx: ArrayMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.namedCollectionExpression`.
	 * @param ctx the parse tree
	 */
	enterNamedCollectionExpression?: (ctx: NamedCollectionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.namedCollectionExpression`.
	 * @param ctx the parse tree
	 */
	exitNamedCollectionExpression?: (ctx: NamedCollectionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.namedCollectionMember`.
	 * @param ctx the parse tree
	 */
	enterNamedCollectionMember?: (ctx: NamedCollectionMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.namedCollectionMember`.
	 * @param ctx the parse tree
	 */
	exitNamedCollectionMember?: (ctx: NamedCollectionMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.arrayForeachMember`.
	 * @param ctx the parse tree
	 */
	enterArrayForeachMember?: (ctx: ArrayForeachMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.arrayForeachMember`.
	 * @param ctx the parse tree
	 */
	exitArrayForeachMember?: (ctx: ArrayForeachMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.conditionalValueExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalValueExpression?: (ctx: ConditionalValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalValueExpression?: (ctx: ConditionalValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionTrueBranch`.
	 * @param ctx the parse tree
	 */
	enterConditionalValueExpressionTrueBranch?: (ctx: ConditionalValueExpressionTrueBranchContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionTrueBranch`.
	 * @param ctx the parse tree
	 */
	exitConditionalValueExpressionTrueBranch?: (ctx: ConditionalValueExpressionTrueBranchContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionElseBranch`.
	 * @param ctx the parse tree
	 */
	enterConditionalValueExpressionElseBranch?: (ctx: ConditionalValueExpressionElseBranchContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionElseBranch`.
	 * @param ctx the parse tree
	 */
	exitConditionalValueExpressionElseBranch?: (ctx: ConditionalValueExpressionElseBranchContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionElseIfBranch`.
	 * @param ctx the parse tree
	 */
	enterConditionalValueExpressionElseIfBranch?: (ctx: ConditionalValueExpressionElseIfBranchContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionElseIfBranch`.
	 * @param ctx the parse tree
	 */
	exitConditionalValueExpressionElseIfBranch?: (ctx: ConditionalValueExpressionElseIfBranchContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.primitiveExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.primitiveExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.refrenceExpression`.
	 * @param ctx the parse tree
	 */
	enterRefrenceExpression?: (ctx: RefrenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.refrenceExpression`.
	 * @param ctx the parse tree
	 */
	exitRefrenceExpression?: (ctx: RefrenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.labelRefrenceMemberAccessExpressionWithParameters`.
	 * @param ctx the parse tree
	 */
	enterLabelRefrenceMemberAccessExpressionWithParameters?: (ctx: LabelRefrenceMemberAccessExpressionWithParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.labelRefrenceMemberAccessExpressionWithParameters`.
	 * @param ctx the parse tree
	 */
	exitLabelRefrenceMemberAccessExpressionWithParameters?: (ctx: LabelRefrenceMemberAccessExpressionWithParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.labelRefrenceMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	enterLabelRefrenceMemberAccessExpression?: (ctx: LabelRefrenceMemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.labelRefrenceMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	exitLabelRefrenceMemberAccessExpression?: (ctx: LabelRefrenceMemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.typeStaticMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeStaticMemberAccessExpression?: (ctx: TypeStaticMemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.typeStaticMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeStaticMemberAccessExpression?: (ctx: TypeStaticMemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.nameDefinition`.
	 * @param ctx the parse tree
	 */
	enterNameDefinition?: (ctx: NameDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.nameDefinition`.
	 * @param ctx the parse tree
	 */
	exitNameDefinition?: (ctx: NameDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ReactiveGrammerParser.nameOptions`.
	 * @param ctx the parse tree
	 */
	enterNameOptions?: (ctx: NameOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `ReactiveGrammerParser.nameOptions`.
	 * @param ctx the parse tree
	 */
	exitNameOptions?: (ctx: NameOptionsContext) => void;
}

