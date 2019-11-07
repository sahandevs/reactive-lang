// Generated from ../ReactiveGrammer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ReactiveGrammerParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ReactiveGrammerVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.defenition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefenition?: (ctx: DefenitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.namespaceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDefinition?: (ctx: NamespaceDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.enumDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.enumCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumCase?: (ctx: EnumCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.structDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefinition?: (ctx: StructDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.structWhichIsDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructWhichIsDefinition?: (ctx: StructWhichIsDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.structBlockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBlockItem?: (ctx: StructBlockItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.labelableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelableIdentifier?: (ctx: LabelableIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.labelableRefrenceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelableRefrenceName?: (ctx: LabelableRefrenceNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.parameterBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterBody?: (ctx: ParameterBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.argumentBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentBody?: (ctx: ArgumentBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.attributeUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeUsage?: (ctx: AttributeUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.propertyDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDefinition?: (ctx: PropertyDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.propertyOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyOptions?: (ctx: PropertyOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.propertyDefaultOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDefaultOption?: (ctx: PropertyDefaultOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.propertyInjectedOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyInjectedOption?: (ctx: PropertyInjectedOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.propertyInjectorOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyInjectorOption?: (ctx: PropertyInjectorOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.propertyArgumentsOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyArgumentsOption?: (ctx: PropertyArgumentsOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.propertyReadonlyOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyReadonlyOption?: (ctx: PropertyReadonlyOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.typeRefrence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRefrence?: (ctx: TypeRefrenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.refrenceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefrenceName?: (ctx: RefrenceNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.genericTypeRefrence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypeRefrence?: (ctx: GenericTypeRefrenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.newStructExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewStructExpression?: (ctx: NewStructExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.arrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.arrayMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayMember?: (ctx: ArrayMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.namedCollectionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedCollectionExpression?: (ctx: NamedCollectionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.namedCollectionMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedCollectionMember?: (ctx: NamedCollectionMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.arrayForeachMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayForeachMember?: (ctx: ArrayForeachMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalValueExpression?: (ctx: ConditionalValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionTrueBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalValueExpressionTrueBranch?: (ctx: ConditionalValueExpressionTrueBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionElseBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalValueExpressionElseBranch?: (ctx: ConditionalValueExpressionElseBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.conditionalValueExpressionElseIfBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalValueExpressionElseIfBranch?: (ctx: ConditionalValueExpressionElseIfBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.primitiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.refrenceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefrenceExpression?: (ctx: RefrenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.labelRefrenceMemberAccessExpressionWithParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelRefrenceMemberAccessExpressionWithParameters?: (ctx: LabelRefrenceMemberAccessExpressionWithParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.labelRefrenceMemberAccessExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelRefrenceMemberAccessExpression?: (ctx: LabelRefrenceMemberAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.typeStaticMemberAccessExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStaticMemberAccessExpression?: (ctx: TypeStaticMemberAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.nameDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameDefinition?: (ctx: NameDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReactiveGrammerParser.nameOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameOptions?: (ctx: NameOptionsContext) => Result;
}

