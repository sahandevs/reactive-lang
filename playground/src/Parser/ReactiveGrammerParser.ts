// Generated from ../ReactiveGrammer.g4 by ANTLR 4.7.3-SNAPSHOT
/* eslint-disable */

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ReactiveGrammerListener } from "./ReactiveGrammerListener";
import { ReactiveGrammerVisitor } from "./ReactiveGrammerVisitor";


export class ReactiveGrammerParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly NAMESPACE = 17;
	public static readonly ENUM = 18;
	public static readonly ATTRIBUTE = 19;
	public static readonly STRUCT = 20;
	public static readonly READONLY = 21;
	public static readonly DEFAULT = 22;
	public static readonly VAR = 23;
	public static readonly WHICH_IS = 24;
	public static readonly AND = 25;
	public static readonly OR = 26;
	public static readonly NOT = 27;
	public static readonly GTE = 28;
	public static readonly GT = 29;
	public static readonly LTE = 30;
	public static readonly LT = 31;
	public static readonly EQ = 32;
	public static readonly NEQ = 33;
	public static readonly IS = 34;
	public static readonly BASE = 35;
	public static readonly OF = 36;
	public static readonly FOR = 37;
	public static readonly NAME = 38;
	public static readonly IF = 39;
	public static readonly ELSEIF = 40;
	public static readonly ELSE = 41;
	public static readonly FOREACH = 42;
	public static readonly IN = 43;
	public static readonly INJECTOR = 44;
	public static readonly INJECTED = 45;
	public static readonly ARGUMENTS = 46;
	public static readonly StringLiteral = 47;
	public static readonly BooleanLiteral = 48;
	public static readonly NumberLiteral = 49;
	public static readonly DecimalLiteral = 50;
	public static readonly ATTRIBUTE_USAGE_NAME = 51;
	public static readonly ID_START = 52;
	public static readonly IDENTIFIER = 53;
	public static readonly LABEL_NAME = 54;
	public static readonly WS = 55;
	public static readonly COMMENT = 56;
	public static readonly NL = 57;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_defenition = 2;
	public static readonly RULE_namespaceDefinition = 3;
	public static readonly RULE_enumDefinition = 4;
	public static readonly RULE_enumCase = 5;
	public static readonly RULE_structDefinition = 6;
	public static readonly RULE_structWhichIsDefinition = 7;
	public static readonly RULE_structBlockItem = 8;
	public static readonly RULE_label = 9;
	public static readonly RULE_labelableIdentifier = 10;
	public static readonly RULE_labelableRefrenceName = 11;
	public static readonly RULE_parameterBody = 12;
	public static readonly RULE_parameters = 13;
	public static readonly RULE_argumentBody = 14;
	public static readonly RULE_arguments = 15;
	public static readonly RULE_attributeUsage = 16;
	public static readonly RULE_propertyDefinition = 17;
	public static readonly RULE_propertyOptions = 18;
	public static readonly RULE_propertyDefaultOption = 19;
	public static readonly RULE_propertyInjectedOption = 20;
	public static readonly RULE_propertyInjectorOption = 21;
	public static readonly RULE_propertyArgumentsOption = 22;
	public static readonly RULE_propertyReadonlyOption = 23;
	public static readonly RULE_typeRefrence = 24;
	public static readonly RULE_refrenceName = 25;
	public static readonly RULE_genericTypeRefrence = 26;
	public static readonly RULE_expression = 27;
	public static readonly RULE_atom = 28;
	public static readonly RULE_newStructExpression = 29;
	public static readonly RULE_arrayExpression = 30;
	public static readonly RULE_arrayMember = 31;
	public static readonly RULE_namedCollectionExpression = 32;
	public static readonly RULE_namedCollectionMember = 33;
	public static readonly RULE_arrayForeachMember = 34;
	public static readonly RULE_conditionalValueExpression = 35;
	public static readonly RULE_conditionalValueExpressionTrueBranch = 36;
	public static readonly RULE_conditionalValueExpressionElseBranch = 37;
	public static readonly RULE_conditionalValueExpressionElseIfBranch = 38;
	public static readonly RULE_primitiveExpression = 39;
	public static readonly RULE_refrenceExpression = 40;
	public static readonly RULE_labelRefrenceMemberAccessExpressionWithParameters = 41;
	public static readonly RULE_labelRefrenceMemberAccessExpression = 42;
	public static readonly RULE_typeStaticMemberAccessExpression = 43;
	public static readonly RULE_nameDefinition = 44;
	public static readonly RULE_nameOptions = 45;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "block", "defenition", "namespaceDefinition", "enumDefinition", 
		"enumCase", "structDefinition", "structWhichIsDefinition", "structBlockItem", 
		"label", "labelableIdentifier", "labelableRefrenceName", "parameterBody", 
		"parameters", "argumentBody", "arguments", "attributeUsage", "propertyDefinition", 
		"propertyOptions", "propertyDefaultOption", "propertyInjectedOption", 
		"propertyInjectorOption", "propertyArgumentsOption", "propertyReadonlyOption", 
		"typeRefrence", "refrenceName", "genericTypeRefrence", "expression", "atom", 
		"newStructExpression", "arrayExpression", "arrayMember", "namedCollectionExpression", 
		"namedCollectionMember", "arrayForeachMember", "conditionalValueExpression", 
		"conditionalValueExpressionTrueBranch", "conditionalValueExpressionElseBranch", 
		"conditionalValueExpressionElseIfBranch", "primitiveExpression", "refrenceExpression", 
		"labelRefrenceMemberAccessExpressionWithParameters", "labelRefrenceMemberAccessExpression", 
		"typeStaticMemberAccessExpression", "nameDefinition", "nameOptions",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "'('", "')'", "':'", "','", "'^'", "'*'", "'/'", 
		"'+'", "'-'", "'#'", "'['", "']'", "'->'", "'.'", "'namespace'", "'enum'", 
		"'attribute'", "'struct'", "'readonly'", "'default'", "'var'", "'which is'", 
		"'and'", "'or'", "'not'", "'>='", "'>'", "'<='", "'<'", "'=='", "'!='", 
		"'is'", "'base'", "'of'", "'for'", "'name'", "'if'", "'elseif'", "'else'", 
		"'foreach'", "'in'", "'injector'", "'injected'", "'arguments'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NAMESPACE", "ENUM", "ATTRIBUTE", "STRUCT", 
		"READONLY", "DEFAULT", "VAR", "WHICH_IS", "AND", "OR", "NOT", "GTE", "GT", 
		"LTE", "LT", "EQ", "NEQ", "IS", "BASE", "OF", "FOR", "NAME", "IF", "ELSEIF", 
		"ELSE", "FOREACH", "IN", "INJECTOR", "INJECTED", "ARGUMENTS", "StringLiteral", 
		"BooleanLiteral", "NumberLiteral", "DecimalLiteral", "ATTRIBUTE_USAGE_NAME", 
		"ID_START", "IDENTIFIER", "LABEL_NAME", "WS", "COMMENT", "NL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ReactiveGrammerParser._LITERAL_NAMES, ReactiveGrammerParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ReactiveGrammerParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ReactiveGrammer.g4"; }

	// @Override
	public get ruleNames(): string[] { return ReactiveGrammerParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ReactiveGrammerParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ReactiveGrammerParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ReactiveGrammerParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactiveGrammerParser.NAMESPACE) | (1 << ReactiveGrammerParser.ENUM) | (1 << ReactiveGrammerParser.STRUCT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (ReactiveGrammerParser.BASE - 35)) | (1 << (ReactiveGrammerParser.NAME - 35)) | (1 << (ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME - 35)) | (1 << (ReactiveGrammerParser.COMMENT - 35)) | (1 << (ReactiveGrammerParser.NL - 35)))) !== 0)) {
				{
				this.state = 94;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ReactiveGrammerParser.NAMESPACE:
				case ReactiveGrammerParser.ENUM:
				case ReactiveGrammerParser.STRUCT:
				case ReactiveGrammerParser.BASE:
				case ReactiveGrammerParser.NAME:
				case ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME:
				case ReactiveGrammerParser.NL:
					{
					this.state = 92;
					this.block();
					}
					break;
				case ReactiveGrammerParser.COMMENT:
					{
					this.state = 93;
					this.match(ReactiveGrammerParser.COMMENT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this.match(ReactiveGrammerParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ReactiveGrammerParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactiveGrammerParser.NL) {
				{
				this.state = 101;
				this.match(ReactiveGrammerParser.NL);
				}
			}

			this.state = 104;
			this.defenition();
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 105;
				this.match(ReactiveGrammerParser.NL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defenition(): DefenitionContext {
		let _localctx: DefenitionContext = new DefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ReactiveGrammerParser.RULE_defenition);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactiveGrammerParser.NAMESPACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.namespaceDefinition();
				}
				break;
			case ReactiveGrammerParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.enumDefinition();
				}
				break;
			case ReactiveGrammerParser.STRUCT:
			case ReactiveGrammerParser.BASE:
			case ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 110;
				this.structDefinition();
				}
				break;
			case ReactiveGrammerParser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 111;
				this.nameDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceDefinition(): NamespaceDefinitionContext {
		let _localctx: NamespaceDefinitionContext = new NamespaceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ReactiveGrammerParser.RULE_namespaceDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(ReactiveGrammerParser.NAMESPACE);
			this.state = 115;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 116;
			this.match(ReactiveGrammerParser.T__0);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReactiveGrammerParser.NAMESPACE) | (1 << ReactiveGrammerParser.ENUM) | (1 << ReactiveGrammerParser.STRUCT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (ReactiveGrammerParser.BASE - 35)) | (1 << (ReactiveGrammerParser.NAME - 35)) | (1 << (ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME - 35)) | (1 << (ReactiveGrammerParser.NL - 35)))) !== 0)) {
				{
				{
				this.state = 117;
				this.block();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.match(ReactiveGrammerParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefinition(): EnumDefinitionContext {
		let _localctx: EnumDefinitionContext = new EnumDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ReactiveGrammerParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(ReactiveGrammerParser.ENUM);
			this.state = 126;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 127;
			this.match(ReactiveGrammerParser.T__0);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 128;
				this.enumCase();
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ReactiveGrammerParser.IDENTIFIER);
			this.state = 133;
			this.match(ReactiveGrammerParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumCase(): EnumCaseContext {
		let _localctx: EnumCaseContext = new EnumCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ReactiveGrammerParser.RULE_enumCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ReactiveGrammerParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME) {
				{
				{
				this.state = 137;
				this.attributeUsage();
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactiveGrammerParser.BASE) {
				{
				this.state = 143;
				this.match(ReactiveGrammerParser.BASE);
				}
			}

			this.state = 146;
			this.match(ReactiveGrammerParser.STRUCT);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactiveGrammerParser.ATTRIBUTE) {
				{
				this.state = 147;
				this.match(ReactiveGrammerParser.ATTRIBUTE);
				}
			}

			this.state = 150;
			this.labelableIdentifier();
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactiveGrammerParser.WHICH_IS) {
				{
				this.state = 151;
				this.structWhichIsDefinition();
				}
			}

			this.state = 154;
			this.match(ReactiveGrammerParser.T__0);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (ReactiveGrammerParser.NAME - 38)) | (1 << (ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME - 38)) | (1 << (ReactiveGrammerParser.IDENTIFIER - 38)) | (1 << (ReactiveGrammerParser.LABEL_NAME - 38)))) !== 0)) {
				{
				{
				this.state = 155;
				this.structBlockItem();
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 161;
			this.match(ReactiveGrammerParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structWhichIsDefinition(): StructWhichIsDefinitionContext {
		let _localctx: StructWhichIsDefinitionContext = new StructWhichIsDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ReactiveGrammerParser.RULE_structWhichIsDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(ReactiveGrammerParser.WHICH_IS);
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 164;
				this.labelableRefrenceName();
				}
				break;

			case 2:
				{
				this.state = 165;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 166;
				this.labelableRefrenceName();
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReactiveGrammerParser.AND) {
					{
					{
					this.state = 167;
					this.match(ReactiveGrammerParser.AND);
					this.state = 168;
					this.labelableRefrenceName();
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 174;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structBlockItem(): StructBlockItemContext {
		let _localctx: StructBlockItemContext = new StructBlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ReactiveGrammerParser.RULE_structBlockItem);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME:
			case ReactiveGrammerParser.IDENTIFIER:
			case ReactiveGrammerParser.LABEL_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.propertyDefinition();
				}
				break;
			case ReactiveGrammerParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.nameDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ReactiveGrammerParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(ReactiveGrammerParser.LABEL_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelableIdentifier(): LabelableIdentifierContext {
		let _localctx: LabelableIdentifierContext = new LabelableIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ReactiveGrammerParser.RULE_labelableIdentifier);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactiveGrammerParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.match(ReactiveGrammerParser.IDENTIFIER);
				}
				break;
			case ReactiveGrammerParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 186;
				this.label();
				this.state = 187;
				this.match(ReactiveGrammerParser.IDENTIFIER);
				this.state = 188;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelableRefrenceName(): LabelableRefrenceNameContext {
		let _localctx: LabelableRefrenceNameContext = new LabelableRefrenceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ReactiveGrammerParser.RULE_labelableRefrenceName);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactiveGrammerParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.refrenceName();
				}
				break;
			case ReactiveGrammerParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 194;
				this.label();
				this.state = 195;
				this.refrenceName();
				this.state = 196;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterBody(): ParameterBodyContext {
		let _localctx: ParameterBodyContext = new ParameterBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ReactiveGrammerParser.RULE_parameterBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 200;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 201;
			this.match(ReactiveGrammerParser.T__4);
			this.state = 202;
			this.expression(0);
			}
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactiveGrammerParser.T__5) {
				{
				{
				this.state = 204;
				this.match(ReactiveGrammerParser.T__5);
				this.state = 205;
				this.match(ReactiveGrammerParser.IDENTIFIER);
				this.state = 206;
				this.match(ReactiveGrammerParser.T__4);
				this.state = 207;
				this.expression(0);
				}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ReactiveGrammerParser.RULE_parameters);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 214;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 215;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 216;
				this.parameterBody();
				this.state = 217;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentBody(): ArgumentBodyContext {
		let _localctx: ArgumentBodyContext = new ArgumentBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ReactiveGrammerParser.RULE_argumentBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 221;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 222;
			this.match(ReactiveGrammerParser.T__4);
			this.state = 223;
			this.typeRefrence();
			}
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactiveGrammerParser.T__5) {
				{
				{
				this.state = 225;
				this.match(ReactiveGrammerParser.T__5);
				this.state = 226;
				this.match(ReactiveGrammerParser.IDENTIFIER);
				this.state = 227;
				this.match(ReactiveGrammerParser.T__4);
				this.state = 228;
				this.typeRefrence();
				}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ReactiveGrammerParser.RULE_arguments);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 234;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 235;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 237;
				this.argumentBody();
				this.state = 238;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeUsage(): AttributeUsageContext {
		let _localctx: AttributeUsageContext = new AttributeUsageContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ReactiveGrammerParser.RULE_attributeUsage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactiveGrammerParser.T__2) {
				{
				this.state = 243;
				this.parameters();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDefinition(): PropertyDefinitionContext {
		let _localctx: PropertyDefinitionContext = new PropertyDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ReactiveGrammerParser.RULE_propertyDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME) {
				{
				{
				this.state = 246;
				this.attributeUsage();
				}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ReactiveGrammerParser.LABEL_NAME) {
				{
				this.state = 252;
				this.label();
				}
			}

			this.state = 255;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 256;
			this.match(ReactiveGrammerParser.T__4);
			this.state = 257;
			this.typeRefrence();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (ReactiveGrammerParser.READONLY - 21)) | (1 << (ReactiveGrammerParser.DEFAULT - 21)) | (1 << (ReactiveGrammerParser.INJECTOR - 21)) | (1 << (ReactiveGrammerParser.INJECTED - 21)) | (1 << (ReactiveGrammerParser.ARGUMENTS - 21)))) !== 0)) {
				{
				{
				this.state = 258;
				this.propertyOptions();
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyOptions(): PropertyOptionsContext {
		let _localctx: PropertyOptionsContext = new PropertyOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ReactiveGrammerParser.RULE_propertyOptions);
		try {
			this.state = 269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactiveGrammerParser.DEFAULT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.propertyDefaultOption();
				}
				break;
			case ReactiveGrammerParser.READONLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this.propertyReadonlyOption();
				}
				break;
			case ReactiveGrammerParser.INJECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 266;
				this.propertyInjectedOption();
				}
				break;
			case ReactiveGrammerParser.ARGUMENTS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 267;
				this.propertyArgumentsOption();
				}
				break;
			case ReactiveGrammerParser.INJECTOR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 268;
				this.propertyInjectorOption();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDefaultOption(): PropertyDefaultOptionContext {
		let _localctx: PropertyDefaultOptionContext = new PropertyDefaultOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ReactiveGrammerParser.RULE_propertyDefaultOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(ReactiveGrammerParser.DEFAULT);
			this.state = 272;
			this.match(ReactiveGrammerParser.T__2);
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 273;
				this.match(ReactiveGrammerParser.VAR);
				}
				break;
			}
			this.state = 276;
			this.expression(0);
			this.state = 277;
			this.match(ReactiveGrammerParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyInjectedOption(): PropertyInjectedOptionContext {
		let _localctx: PropertyInjectedOptionContext = new PropertyInjectedOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ReactiveGrammerParser.RULE_propertyInjectedOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(ReactiveGrammerParser.INJECTED);
			this.state = 280;
			this.match(ReactiveGrammerParser.T__2);
			this.state = 281;
			this.typeRefrence();
			this.state = 282;
			this.match(ReactiveGrammerParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyInjectorOption(): PropertyInjectorOptionContext {
		let _localctx: PropertyInjectorOptionContext = new PropertyInjectorOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ReactiveGrammerParser.RULE_propertyInjectorOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(ReactiveGrammerParser.INJECTOR);
			this.state = 285;
			this.match(ReactiveGrammerParser.T__2);
			this.state = 286;
			this.typeRefrence();
			this.state = 287;
			this.match(ReactiveGrammerParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyArgumentsOption(): PropertyArgumentsOptionContext {
		let _localctx: PropertyArgumentsOptionContext = new PropertyArgumentsOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ReactiveGrammerParser.RULE_propertyArgumentsOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(ReactiveGrammerParser.ARGUMENTS);
			this.state = 290;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyReadonlyOption(): PropertyReadonlyOptionContext {
		let _localctx: PropertyReadonlyOptionContext = new PropertyReadonlyOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ReactiveGrammerParser.RULE_propertyReadonlyOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.match(ReactiveGrammerParser.READONLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeRefrence(): TypeRefrenceContext {
		let _localctx: TypeRefrenceContext = new TypeRefrenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ReactiveGrammerParser.RULE_typeRefrence);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 294;
				this.genericTypeRefrence();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
				this.refrenceName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refrenceName(): RefrenceNameContext {
		let _localctx: RefrenceNameContext = new RefrenceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ReactiveGrammerParser.RULE_refrenceName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 299;
					this.match(ReactiveGrammerParser.T__4);
					this.state = 300;
					this.match(ReactiveGrammerParser.IDENTIFIER);
					}
					}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericTypeRefrence(): GenericTypeRefrenceContext {
		let _localctx: GenericTypeRefrenceContext = new GenericTypeRefrenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ReactiveGrammerParser.RULE_genericTypeRefrence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.refrenceName();
			this.state = 307;
			this.match(ReactiveGrammerParser.OF);
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactiveGrammerParser.IDENTIFIER:
				{
				this.state = 308;
				this.typeRefrence();
				}
				break;
			case ReactiveGrammerParser.T__2:
				{
				{
				this.state = 309;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 310;
				this.typeRefrence();
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ReactiveGrammerParser.AND) {
					{
					{
					this.state = 311;
					this.match(ReactiveGrammerParser.AND);
					this.state = 312;
					this.typeRefrence();
					}
					}
					this.state = 317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 318;
				this.match(ReactiveGrammerParser.T__3);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, ReactiveGrammerParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 323;
				this.match(ReactiveGrammerParser.NOT);
				this.state = 324;
				this.expression(4);
				}
				break;

			case 2:
				{
				this.state = 325;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 326;
				this.match(ReactiveGrammerParser.LABEL_NAME);
				this.state = 327;
				this.expression(0);
				this.state = 328;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;

			case 3:
				{
				this.state = 330;
				this.match(ReactiveGrammerParser.T__2);
				this.state = 331;
				this.expression(0);
				this.state = 332;
				this.match(ReactiveGrammerParser.T__3);
				}
				break;

			case 4:
				{
				this.state = 337;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 334;
						_la = this._input.LA(1);
						if (!(_la === ReactiveGrammerParser.T__9 || _la === ReactiveGrammerParser.T__10)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 339;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 340;
				this.atom();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 384;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 382;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 343;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 344;
						this.match(ReactiveGrammerParser.T__6);
						this.state = 345;
						this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 346;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 347;
						_la = this._input.LA(1);
						if (!(_la === ReactiveGrammerParser.T__7 || _la === ReactiveGrammerParser.T__8)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 348;
						this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 349;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 350;
						_la = this._input.LA(1);
						if (!(_la === ReactiveGrammerParser.T__9 || _la === ReactiveGrammerParser.T__10)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 351;
						this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 352;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 353;
						this.match(ReactiveGrammerParser.LTE);
						this.state = 354;
						this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 355;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 356;
						this.match(ReactiveGrammerParser.LT);
						this.state = 357;
						this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 358;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 359;
						this.match(ReactiveGrammerParser.GTE);
						this.state = 360;
						this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 361;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 362;
						this.match(ReactiveGrammerParser.GT);
						this.state = 363;
						this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 364;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 365;
						this.match(ReactiveGrammerParser.EQ);
						this.state = 366;
						this.expression(10);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 367;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 368;
						this.match(ReactiveGrammerParser.NEQ);
						this.state = 369;
						this.expression(9);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 370;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 371;
						this.match(ReactiveGrammerParser.OR);
						this.state = 372;
						this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 373;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 374;
						this.match(ReactiveGrammerParser.AND);
						this.state = 375;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ReactiveGrammerParser.RULE_expression);
						this.state = 376;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 377;
						this.match(ReactiveGrammerParser.IS);
						this.state = 380;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
						case 1:
							{
							this.state = 378;
							this.expression(0);
							}
							break;

						case 2:
							{
							this.state = 379;
							this.typeRefrence();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ReactiveGrammerParser.RULE_atom);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.primitiveExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.refrenceExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
				this.conditionalValueExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 390;
				this.newStructExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 391;
				this.arrayExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 392;
				this.namedCollectionExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newStructExpression(): NewStructExpressionContext {
		let _localctx: NewStructExpressionContext = new NewStructExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ReactiveGrammerParser.RULE_newStructExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.refrenceName();
			this.state = 396;
			this.parameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayExpression(): ArrayExpressionContext {
		let _localctx: ArrayExpressionContext = new ArrayExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ReactiveGrammerParser.RULE_arrayExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.typeRefrence();
			this.state = 399;
			this.match(ReactiveGrammerParser.T__11);
			this.state = 400;
			this.match(ReactiveGrammerParser.T__12);
			this.state = 406;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 401;
					this.arrayMember();
					this.state = 402;
					this.match(ReactiveGrammerParser.T__5);
					}
					}
				}
				this.state = 408;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 409;
			this.match(ReactiveGrammerParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayMember(): ArrayMemberContext {
		let _localctx: ArrayMemberContext = new ArrayMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ReactiveGrammerParser.RULE_arrayMember);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 411;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.arrayForeachMember();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedCollectionExpression(): NamedCollectionExpressionContext {
		let _localctx: NamedCollectionExpressionContext = new NamedCollectionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ReactiveGrammerParser.RULE_namedCollectionExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.typeRefrence();
			this.state = 416;
			this.match(ReactiveGrammerParser.T__11);
			this.state = 417;
			this.match(ReactiveGrammerParser.T__0);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactiveGrammerParser.IDENTIFIER || _la === ReactiveGrammerParser.LABEL_NAME) {
				{
				{
				this.state = 418;
				this.namedCollectionMember();
				this.state = 419;
				this.match(ReactiveGrammerParser.T__5);
				}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 426;
			this.match(ReactiveGrammerParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedCollectionMember(): NamedCollectionMemberContext {
		let _localctx: NamedCollectionMemberContext = new NamedCollectionMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ReactiveGrammerParser.RULE_namedCollectionMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ReactiveGrammerParser.IDENTIFIER:
				{
				this.state = 428;
				this.refrenceName();
				}
				break;
			case ReactiveGrammerParser.LABEL_NAME:
				{
				this.state = 429;
				this.labelRefrenceMemberAccessExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 432;
			this.match(ReactiveGrammerParser.T__14);
			this.state = 433;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayForeachMember(): ArrayForeachMemberContext {
		let _localctx: ArrayForeachMemberContext = new ArrayForeachMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ReactiveGrammerParser.RULE_arrayForeachMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(ReactiveGrammerParser.FOREACH);
			this.state = 436;
			this.match(ReactiveGrammerParser.T__2);
			this.state = 437;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 438;
			this.match(ReactiveGrammerParser.IN);
			this.state = 439;
			this.expression(0);
			this.state = 440;
			this.match(ReactiveGrammerParser.T__3);
			this.state = 441;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalValueExpression(): ConditionalValueExpressionContext {
		let _localctx: ConditionalValueExpressionContext = new ConditionalValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ReactiveGrammerParser.RULE_conditionalValueExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.conditionalValueExpressionTrueBranch();
			this.state = 447;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 444;
					this.conditionalValueExpressionElseIfBranch();
					}
					}
				}
				this.state = 449;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 453;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 450;
					this.conditionalValueExpressionElseBranch();
					}
					}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalValueExpressionTrueBranch(): ConditionalValueExpressionTrueBranchContext {
		let _localctx: ConditionalValueExpressionTrueBranchContext = new ConditionalValueExpressionTrueBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ReactiveGrammerParser.RULE_conditionalValueExpressionTrueBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.match(ReactiveGrammerParser.IF);
			this.state = 457;
			this.match(ReactiveGrammerParser.T__2);
			this.state = 458;
			this.expression(0);
			this.state = 459;
			this.match(ReactiveGrammerParser.T__3);
			this.state = 460;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalValueExpressionElseBranch(): ConditionalValueExpressionElseBranchContext {
		let _localctx: ConditionalValueExpressionElseBranchContext = new ConditionalValueExpressionElseBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ReactiveGrammerParser.RULE_conditionalValueExpressionElseBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(ReactiveGrammerParser.ELSE);
			this.state = 463;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalValueExpressionElseIfBranch(): ConditionalValueExpressionElseIfBranchContext {
		let _localctx: ConditionalValueExpressionElseIfBranchContext = new ConditionalValueExpressionElseIfBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ReactiveGrammerParser.RULE_conditionalValueExpressionElseIfBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(ReactiveGrammerParser.ELSEIF);
			this.state = 466;
			this.match(ReactiveGrammerParser.T__2);
			this.state = 467;
			this.expression(0);
			this.state = 468;
			this.match(ReactiveGrammerParser.T__3);
			this.state = 469;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveExpression(): PrimitiveExpressionContext {
		let _localctx: PrimitiveExpressionContext = new PrimitiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ReactiveGrammerParser.RULE_primitiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (ReactiveGrammerParser.StringLiteral - 47)) | (1 << (ReactiveGrammerParser.BooleanLiteral - 47)) | (1 << (ReactiveGrammerParser.NumberLiteral - 47)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refrenceExpression(): RefrenceExpressionContext {
		let _localctx: RefrenceExpressionContext = new RefrenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ReactiveGrammerParser.RULE_refrenceExpression);
		try {
			this.state = 478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
				this.refrenceName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 475;
				this.typeStaticMemberAccessExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 476;
				this.labelRefrenceMemberAccessExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 477;
				this.labelRefrenceMemberAccessExpressionWithParameters();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelRefrenceMemberAccessExpressionWithParameters(): LabelRefrenceMemberAccessExpressionWithParametersContext {
		let _localctx: LabelRefrenceMemberAccessExpressionWithParametersContext = new LabelRefrenceMemberAccessExpressionWithParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpressionWithParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.labelRefrenceMemberAccessExpression();
			this.state = 481;
			this.parameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelRefrenceMemberAccessExpression(): LabelRefrenceMemberAccessExpressionContext {
		let _localctx: LabelRefrenceMemberAccessExpressionContext = new LabelRefrenceMemberAccessExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(ReactiveGrammerParser.LABEL_NAME);
			this.state = 484;
			this.match(ReactiveGrammerParser.T__15);
			this.state = 485;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 490;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 486;
					this.match(ReactiveGrammerParser.T__15);
					this.state = 487;
					this.match(ReactiveGrammerParser.IDENTIFIER);
					}
					}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStaticMemberAccessExpression(): TypeStaticMemberAccessExpressionContext {
		let _localctx: TypeStaticMemberAccessExpressionContext = new TypeStaticMemberAccessExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ReactiveGrammerParser.RULE_typeStaticMemberAccessExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.typeRefrence();
			this.state = 494;
			this.match(ReactiveGrammerParser.T__15);
			this.state = 495;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 500;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 496;
					this.match(ReactiveGrammerParser.T__15);
					this.state = 497;
					this.match(ReactiveGrammerParser.IDENTIFIER);
					}
					}
				}
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameDefinition(): NameDefinitionContext {
		let _localctx: NameDefinitionContext = new NameDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ReactiveGrammerParser.RULE_nameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(ReactiveGrammerParser.NAME);
			this.state = 504;
			this.match(ReactiveGrammerParser.IDENTIFIER);
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ReactiveGrammerParser.FOR) {
				{
				{
				this.state = 505;
				this.nameOptions();
				}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameOptions(): NameOptionsContext {
		let _localctx: NameOptionsContext = new NameOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ReactiveGrammerParser.RULE_nameOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(ReactiveGrammerParser.FOR);
			this.state = 512;
			this.match(ReactiveGrammerParser.T__2);
			this.state = 513;
			this.refrenceName();
			this.state = 514;
			this.match(ReactiveGrammerParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 27:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03;\u0207\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x03\x02\x07\x02a\n\x02\f\x02" +
		"\x0E\x02d\v\x02\x03\x02\x03\x02\x03\x03\x05\x03i\n\x03\x03\x03\x03\x03" +
		"\x05\x03m\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04s\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x05y\n\x05\f\x05\x0E\x05|\v\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\x84\n\x06\r\x06\x0E\x06\x85" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x07\b\x8D\n\b\f\b\x0E\b\x90\v\b" +
		"\x03\b\x05\b\x93\n\b\x03\b\x03\b\x05\b\x97\n\b\x03\b\x03\b\x05\b\x9B\n" +
		"\b\x03\b\x03\b\x07\b\x9F\n\b\f\b\x0E\b\xA2\v\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x07\t\xAC\n\t\f\t\x0E\t\xAF\v\t\x03\t\x03\t\x05" +
		"\t\xB3\n\t\x03\n\x03\n\x05\n\xB7\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xC1\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\xC9\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\xD3\n\x0E\f\x0E\x0E\x0E\xD6\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xDE\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xE8\n\x10\f\x10\x0E\x10\xEB\v" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xF3\n\x11" +
		"\x03\x12\x03\x12\x05\x12\xF7\n\x12\x03\x13\x07\x13\xFA\n\x13\f\x13\x0E" +
		"\x13\xFD\v\x13\x03\x13\x05\x13\u0100\n\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x07\x13\u0106\n\x13\f\x13\x0E\x13\u0109\v\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\u0110\n\x14\x03\x15\x03\x15\x03\x15\x05\x15" +
		"\u0115\n\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u012B\n\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x07\x1B\u0130\n\x1B\f\x1B\x0E\x1B\u0133\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u013C\n\x1C\f\x1C\x0E\x1C\u013F" +
		"\v\x1C\x03\x1C\x03\x1C\x05\x1C\u0143\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u0152\n\x1D\f\x1D\x0E\x1D\u0155\v\x1D\x03\x1D\x05\x1D\u0158" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x05\x1D\u017F\n\x1D\x07\x1D\u0181\n\x1D\f\x1D\x0E\x1D" +
		"\u0184\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u018C" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x07 \u0197" +
		"\n \f \x0E \u019A\v \x03 \x03 \x03!\x03!\x05!\u01A0\n!\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x07\"\u01A8\n\"\f\"\x0E\"\u01AB\v\"\x03\"\x03\"\x03" +
		"#\x03#\x05#\u01B1\n#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03%\x03%\x07%\u01C0\n%\f%\x0E%\u01C3\v%\x03%\x07%\u01C6\n%\f%" +
		"\x0E%\u01C9\v%\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x05*\u01E1\n" +
		"*\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x07,\u01EB\n,\f,\x0E,\u01EE" +
		"\v,\x03-\x03-\x03-\x03-\x03-\x07-\u01F5\n-\f-\x0E-\u01F8\v-\x03.\x03." +
		"\x03.\x07.\u01FD\n.\f.\x0E.\u0200\v.\x03/\x03/\x03/\x03/\x03/\x03/\x02" +
		"\x02\x0380\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"\x02\x05\x03\x02\f\r\x03\x02\n\v\x03\x0213\x02\u021F\x02b\x03\x02\x02" +
		"\x02\x04h\x03\x02\x02\x02\x06r\x03\x02\x02\x02\bt\x03\x02\x02\x02\n\x7F" +
		"\x03\x02\x02\x02\f\x89\x03\x02\x02\x02\x0E\x8E\x03\x02\x02\x02\x10\xA5" +
		"\x03\x02\x02\x02\x12\xB6\x03\x02\x02\x02\x14\xB8\x03\x02\x02\x02\x16\xC0" +
		"\x03\x02\x02\x02\x18\xC8\x03\x02\x02\x02\x1A\xCA\x03\x02\x02\x02\x1C\xDD" +
		"\x03\x02\x02\x02\x1E\xDF\x03\x02\x02\x02 \xF2\x03\x02\x02\x02\"\xF4\x03" +
		"\x02\x02\x02$\xFB\x03\x02\x02\x02&\u010F\x03\x02\x02\x02(\u0111\x03\x02" +
		"\x02\x02*\u0119\x03\x02\x02\x02,\u011E\x03\x02\x02\x02.\u0123\x03\x02" +
		"\x02\x020\u0126\x03\x02\x02\x022\u012A\x03\x02\x02\x024\u012C\x03\x02" +
		"\x02\x026\u0134\x03\x02\x02\x028\u0157\x03\x02\x02\x02:\u018B\x03\x02" +
		"\x02\x02<\u018D\x03\x02\x02\x02>\u0190\x03\x02\x02\x02@\u019F\x03\x02" +
		"\x02\x02B\u01A1\x03\x02\x02\x02D\u01B0\x03\x02\x02\x02F\u01B5\x03\x02" +
		"\x02\x02H\u01BD\x03\x02\x02\x02J\u01CA\x03\x02\x02\x02L\u01D0\x03\x02" +
		"\x02\x02N\u01D3\x03\x02\x02\x02P\u01D9\x03\x02\x02\x02R\u01E0\x03\x02" +
		"\x02\x02T\u01E2\x03\x02\x02\x02V\u01E5\x03\x02\x02\x02X\u01EF\x03\x02" +
		"\x02\x02Z\u01F9\x03\x02\x02\x02\\\u0201\x03\x02\x02\x02^a\x05\x04\x03" +
		"\x02_a\x07:\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02ad\x03\x02\x02" +
		"\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03\x02\x02" +
		"\x02ef\x07\x02\x02\x03f\x03\x03\x02\x02\x02gi\x07;\x02\x02hg\x03\x02\x02" +
		"\x02hi\x03\x02\x02\x02ij\x03\x02\x02\x02jl\x05\x06\x04\x02km\x07;\x02" +
		"\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02m\x05\x03\x02\x02\x02ns\x05\b" +
		"\x05\x02os\x05\n\x06\x02ps\x05\x0E\b\x02qs\x05Z.\x02rn\x03\x02\x02\x02" +
		"ro\x03\x02\x02\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\x07\x03\x02\x02" +
		"\x02tu\x07\x13\x02\x02uv\x077\x02\x02vz\x07\x03\x02\x02wy\x05\x04\x03" +
		"\x02xw\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02" +
		"\x02{}\x03\x02\x02\x02|z\x03\x02\x02\x02}~\x07\x04\x02\x02~\t\x03\x02" +
		"\x02\x02\x7F\x80\x07\x14\x02\x02\x80\x81\x077\x02\x02\x81\x83\x07\x03" +
		"\x02\x02\x82\x84\x05\f\x07\x02\x83\x82\x03\x02\x02\x02\x84\x85\x03\x02" +
		"\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02" +
		"\x02\x02\x87\x88\x07\x04\x02\x02\x88\v\x03\x02\x02\x02\x89\x8A\x077\x02" +
		"\x02\x8A\r\x03\x02\x02\x02\x8B\x8D\x05\"\x12\x02\x8C\x8B\x03\x02\x02\x02" +
		"\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02" +
		"\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x93\x07%\x02\x02" +
		"\x92\x91\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02" +
		"\x94\x96\x07\x16\x02\x02\x95\x97\x07\x15\x02\x02\x96\x95\x03\x02\x02\x02" +
		"\x96\x97\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x05\x16\f\x02" +
		"\x99\x9B\x05\x10\t\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02" +
		"\x9B\x9C\x03\x02\x02\x02\x9C\xA0\x07\x03\x02\x02\x9D\x9F\x05\x12\n\x02" +
		"\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02" +
		"\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02" +
		"\xA3\xA4\x07\x04\x02\x02\xA4\x0F\x03\x02\x02\x02\xA5\xB2\x07\x1A\x02\x02" +
		"\xA6\xB3\x05\x18\r\x02\xA7\xA8\x07\x05\x02\x02\xA8\xAD\x05\x18\r\x02\xA9" +
		"\xAA\x07\x1B\x02\x02\xAA\xAC\x05\x18\r\x02\xAB\xA9\x03\x02\x02\x02\xAC" +
		"\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
		"\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB1\x07\x06\x02\x02\xB1" +
		"\xB3\x03\x02\x02\x02\xB2\xA6\x03\x02\x02\x02\xB2\xA7\x03\x02\x02\x02\xB3" +
		"\x11\x03\x02\x02\x02\xB4\xB7\x05$\x13\x02\xB5\xB7\x05Z.\x02\xB6\xB4\x03" +
		"\x02\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\x13\x03\x02\x02\x02\xB8\xB9\x07" +
		"8\x02\x02\xB9\x15\x03\x02\x02\x02\xBA\xC1\x077\x02\x02\xBB\xBC\x07\x05" +
		"\x02\x02\xBC\xBD\x05\x14\v\x02\xBD\xBE\x077\x02\x02\xBE\xBF\x07\x06\x02" +
		"\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBA\x03\x02\x02\x02\xC0\xBB\x03\x02\x02" +
		"\x02\xC1\x17\x03\x02\x02\x02\xC2\xC9\x054\x1B\x02\xC3\xC4\x07\x05\x02" +
		"\x02\xC4\xC5\x05\x14\v\x02\xC5\xC6\x054\x1B\x02\xC6\xC7\x07\x06\x02\x02" +
		"\xC7\xC9\x03\x02\x02\x02\xC8\xC2\x03\x02\x02\x02\xC8\xC3\x03\x02\x02\x02" +
		"\xC9\x19\x03\x02\x02\x02\xCA\xCB\x077\x02\x02\xCB\xCC\x07\x07\x02\x02" +
		"\xCC\xCD\x058\x1D\x02\xCD\xD4\x03\x02\x02\x02\xCE\xCF\x07\b\x02\x02\xCF" +
		"\xD0\x077\x02\x02\xD0\xD1\x07\x07\x02\x02\xD1\xD3\x058\x1D\x02\xD2\xCE" +
		"\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5" +
		"\x03\x02\x02\x02\xD5\x1B\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD8" +
		"\x07\x05\x02\x02\xD8\xDE\x07\x06\x02\x02\xD9\xDA\x07\x05\x02\x02\xDA\xDB" +
		"\x05\x1A\x0E\x02\xDB\xDC\x07\x06\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD7" +
		"\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02\xDE\x1D\x03\x02\x02\x02\xDF\xE0" +
		"\x077\x02\x02\xE0\xE1\x07\x07\x02\x02\xE1\xE2\x052\x1A\x02\xE2\xE9\x03" +
		"\x02\x02\x02\xE3\xE4\x07\b\x02\x02\xE4\xE5\x077\x02\x02\xE5\xE6\x07\x07" +
		"\x02\x02\xE6\xE8\x052\x1A\x02\xE7\xE3\x03\x02\x02\x02\xE8\xEB\x03\x02" +
		"\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\x1F\x03\x02" +
		"\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xED\x07\x05\x02\x02\xED\xF3\x07\x06" +
		"\x02\x02\xEE\xEF\x07\x05\x02\x02\xEF\xF0\x05\x1E\x10\x02\xF0\xF1\x07\x06" +
		"\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xEC\x03\x02\x02\x02\xF2\xEE\x03\x02" +
		"\x02\x02\xF3!\x03\x02\x02\x02\xF4\xF6\x075\x02\x02\xF5\xF7\x05\x1C\x0F" +
		"\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7#\x03\x02\x02" +
		"\x02\xF8\xFA\x05\"\x12\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFD\x03\x02\x02" +
		"\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFF\x03\x02\x02" +
		"\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0100\x05\x14\v\x02\xFF\xFE\x03\x02\x02" +
		"\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102" +
		"\x077\x02\x02\u0102\u0103\x07\x07\x02\x02\u0103\u0107\x052\x1A\x02\u0104" +
		"\u0106\x05&\x14\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02" +
		"\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108%\x03" +
		"\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u0110\x05(\x15\x02\u010B" +
		"\u0110\x050\x19\x02\u010C\u0110\x05*\x16\x02\u010D\u0110\x05.\x18\x02" +
		"\u010E\u0110\x05,\x17\x02\u010F\u010A\x03\x02\x02\x02\u010F\u010B\x03" +
		"\x02\x02\x02\u010F\u010C\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F" +
		"\u010E\x03\x02\x02\x02\u0110\'\x03\x02\x02\x02\u0111\u0112\x07\x18\x02" +
		"\x02\u0112\u0114\x07\x05\x02\x02\u0113\u0115\x07\x19\x02\x02\u0114\u0113" +
		"\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02" +
		"\u0116\u0117\x058\x1D\x02\u0117\u0118\x07\x06\x02\x02\u0118)\x03\x02\x02" +
		"\x02\u0119\u011A\x07/\x02\x02\u011A\u011B\x07\x05\x02\x02\u011B\u011C" +
		"\x052\x1A\x02\u011C\u011D\x07\x06\x02\x02\u011D+\x03\x02\x02\x02\u011E" +
		"\u011F\x07.\x02\x02\u011F\u0120\x07\x05\x02\x02\u0120\u0121\x052\x1A\x02" +
		"\u0121\u0122\x07\x06\x02\x02\u0122-\x03\x02\x02\x02\u0123\u0124\x070\x02" +
		"\x02\u0124\u0125\x05 \x11\x02\u0125/\x03\x02\x02\x02\u0126\u0127\x07\x17" +
		"\x02\x02\u01271\x03\x02\x02\x02\u0128\u012B\x056\x1C\x02\u0129\u012B\x05" +
		"4\x1B\x02\u012A\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B" +
		"3\x03\x02\x02\x02\u012C\u0131\x077\x02\x02\u012D\u012E\x07\x07\x02\x02" +
		"\u012E\u0130\x077\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03" +
		"\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"5\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0135\x054\x1B\x02" +
		"\u0135\u0142\x07&\x02\x02\u0136\u0143\x052\x1A\x02\u0137\u0138\x07\x05" +
		"\x02\x02\u0138\u013D\x052\x1A\x02\u0139\u013A\x07\x1B\x02\x02\u013A\u013C" +
		"\x052\x1A\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02" +
		"\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03" +
		"\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0141\x07\x06\x02\x02\u0141" +
		"\u0143\x03\x02\x02\x02\u0142\u0136\x03\x02\x02\x02\u0142\u0137\x03\x02" +
		"\x02\x02\u01437\x03\x02\x02\x02\u0144\u0145\b\x1D\x01\x02\u0145\u0146" +
		"\x07\x1D\x02\x02\u0146\u0158\x058\x1D\x06\u0147\u0148\x07\x05\x02\x02" +
		"\u0148\u0149\x078\x02\x02\u0149\u014A\x058\x1D\x02\u014A\u014B\x07\x06" +
		"\x02\x02\u014B\u0158\x03\x02\x02\x02\u014C\u014D\x07\x05\x02\x02\u014D" +
		"\u014E\x058\x1D\x02\u014E\u014F\x07\x06\x02\x02\u014F\u0158\x03\x02\x02" +
		"\x02\u0150\u0152\t\x02\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0155" +
		"\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02" +
		"\u0154\u0156\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0158\x05" +
		":\x1E\x02\u0157\u0144\x03\x02\x02\x02\u0157\u0147\x03\x02\x02\x02\u0157" +
		"\u014C\x03\x02\x02\x02\u0157\u0153\x03\x02\x02\x02\u0158\u0182\x03\x02" +
		"\x02\x02\u0159\u015A\f\x12\x02\x02\u015A\u015B\x07\t\x02\x02\u015B\u0181" +
		"\x058\x1D\x13\u015C\u015D\f\x11\x02\x02\u015D\u015E\t\x03\x02\x02\u015E" +
		"\u0181\x058\x1D\x12\u015F\u0160\f\x10\x02\x02\u0160\u0161\t\x02\x02\x02" +
		"\u0161\u0181\x058\x1D\x11\u0162\u0163\f\x0F\x02\x02\u0163\u0164\x07 \x02" +
		"\x02\u0164\u0181\x058\x1D\x10\u0165\u0166\f\x0E\x02\x02\u0166\u0167\x07" +
		"!\x02\x02\u0167\u0181\x058\x1D\x0F\u0168\u0169\f\r\x02\x02\u0169\u016A" +
		"\x07\x1E\x02\x02\u016A\u0181\x058\x1D\x0E\u016B\u016C\f\f\x02\x02\u016C" +
		"\u016D\x07\x1F\x02\x02\u016D\u0181\x058\x1D\r\u016E\u016F\f\v\x02\x02" +
		"\u016F\u0170\x07\"\x02\x02\u0170\u0181\x058\x1D\f\u0171\u0172\f\n\x02" +
		"\x02\u0172\u0173\x07#\x02\x02\u0173\u0181\x058\x1D\v\u0174\u0175\f\b\x02" +
		"\x02\u0175\u0176\x07\x1C\x02\x02\u0176\u0181\x058\x1D\t\u0177\u0178\f" +
		"\x07\x02\x02\u0178\u0179\x07\x1B\x02\x02\u0179\u0181\x058\x1D\b\u017A" +
		"\u017B\f\t\x02\x02\u017B\u017E\x07$\x02\x02\u017C\u017F\x058\x1D\x02\u017D" +
		"\u017F\x052\x1A\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017D\x03\x02\x02" +
		"\x02\u017F\u0181\x03\x02\x02\x02\u0180\u0159\x03\x02\x02\x02\u0180\u015C" +
		"\x03\x02\x02\x02\u0180\u015F\x03\x02\x02\x02\u0180\u0162\x03\x02\x02\x02" +
		"\u0180\u0165\x03\x02\x02\x02\u0180\u0168\x03\x02\x02\x02\u0180\u016B\x03" +
		"\x02\x02\x02\u0180\u016E\x03\x02\x02\x02\u0180\u0171\x03\x02\x02\x02\u0180" +
		"\u0174\x03\x02\x02\x02\u0180\u0177\x03\x02\x02\x02\u0180\u017A\x03\x02" +
		"\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182" +
		"\u0183\x03\x02\x02\x02\u01839\x03\x02\x02\x02\u0184\u0182\x03\x02\x02" +
		"\x02\u0185\u018C\x05P)\x02\u0186\u018C\x05R*\x02\u0187\u018C\x05H%\x02" +
		"\u0188\u018C\x05<\x1F\x02\u0189\u018C\x05> \x02\u018A\u018C\x05B\"\x02" +
		"\u018B\u0185\x03\x02\x02\x02\u018B\u0186\x03\x02\x02\x02\u018B\u0187\x03" +
		"\x02\x02\x02\u018B\u0188\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B" +
		"\u018A\x03\x02\x02\x02\u018C;\x03\x02\x02\x02\u018D\u018E\x054\x1B\x02" +
		"\u018E\u018F\x05\x1C\x0F\x02\u018F=\x03\x02\x02\x02\u0190\u0191\x052\x1A" +
		"\x02\u0191\u0192\x07\x0E\x02\x02\u0192\u0198\x07\x0F\x02\x02\u0193\u0194" +
		"\x05@!\x02\u0194\u0195\x07\b\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196" +
		"\u0193\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02" +
		"\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A" +
		"\u0198\x03\x02\x02\x02\u019B\u019C\x07\x10\x02\x02\u019C?\x03\x02\x02" +
		"\x02\u019D\u01A0\x058\x1D\x02\u019E\u01A0\x05F$\x02\u019F\u019D\x03\x02" +
		"\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0A\x03\x02\x02\x02\u01A1\u01A2" +
		"\x052\x1A\x02\u01A2\u01A3\x07\x0E\x02\x02\u01A3\u01A9\x07\x03\x02\x02" +
		"\u01A4\u01A5\x05D#\x02\u01A5\u01A6\x07\b\x02\x02\u01A6\u01A8\x03\x02\x02" +
		"\x02\u01A7\u01A4\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7" +
		"\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02" +
		"\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AD\x07\x04\x02\x02\u01ADC\x03\x02" +
		"\x02\x02\u01AE\u01B1\x054\x1B\x02\u01AF\u01B1\x05V,\x02\u01B0\u01AE\x03" +
		"\x02\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B3\x07\x11\x02\x02\u01B3\u01B4\x058\x1D\x02\u01B4E\x03\x02\x02\x02" +
		"\u01B5\u01B6\x07,\x02\x02\u01B6\u01B7\x07\x05\x02\x02\u01B7\u01B8\x07" +
		"7\x02\x02\u01B8\u01B9\x07-\x02\x02\u01B9\u01BA\x058\x1D\x02\u01BA\u01BB" +
		"\x07\x06\x02\x02\u01BB\u01BC\x058\x1D\x02\u01BCG\x03\x02\x02\x02\u01BD" +
		"\u01C1\x05J&\x02\u01BE\u01C0\x05N(\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0" +
		"\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02" +
		"\x02\x02\u01C2\u01C7\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4" +
		"\u01C6\x05L\'\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02" +
		"\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8I\x03" +
		"\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01CB\x07)\x02\x02\u01CB" +
		"\u01CC\x07\x05\x02\x02\u01CC\u01CD\x058\x1D\x02\u01CD\u01CE\x07\x06\x02" +
		"\x02\u01CE\u01CF\x058\x1D\x02\u01CFK\x03\x02\x02\x02\u01D0\u01D1\x07+" +
		"\x02\x02\u01D1\u01D2\x058\x1D\x02\u01D2M\x03\x02\x02\x02\u01D3\u01D4\x07" +
		"*\x02\x02\u01D4\u01D5\x07\x05\x02\x02\u01D5\u01D6\x058\x1D\x02\u01D6\u01D7" +
		"\x07\x06\x02\x02\u01D7\u01D8\x058\x1D\x02\u01D8O\x03\x02\x02\x02\u01D9" +
		"\u01DA\t\x04\x02\x02\u01DAQ\x03\x02\x02\x02\u01DB\u01E1\x03\x02\x02\x02" +
		"\u01DC\u01E1\x054\x1B\x02\u01DD\u01E1\x05X-\x02\u01DE\u01E1\x05V,\x02" +
		"\u01DF\u01E1\x05T+\x02\u01E0\u01DB\x03\x02\x02\x02\u01E0\u01DC\x03\x02" +
		"\x02\x02\u01E0\u01DD\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0" +
		"\u01DF\x03\x02\x02\x02\u01E1S\x03\x02\x02\x02\u01E2\u01E3\x05V,\x02\u01E3" +
		"\u01E4\x05\x1C\x0F\x02\u01E4U\x03\x02\x02\x02\u01E5\u01E6\x078\x02\x02" +
		"\u01E6\u01E7\x07\x12\x02\x02\u01E7\u01EC\x077\x02\x02\u01E8\u01E9\x07" +
		"\x12\x02\x02\u01E9\u01EB\x077\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB" +
		"\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02" +
		"\x02\x02\u01EDW\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F0" +
		"\x052\x1A\x02\u01F0\u01F1\x07\x12\x02\x02\u01F1\u01F6\x077\x02\x02\u01F2" +
		"\u01F3\x07\x12\x02\x02\u01F3\u01F5\x077\x02\x02\u01F4\u01F2\x03\x02\x02" +
		"\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7" +
		"\x03\x02\x02\x02\u01F7Y\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9" +
		"\u01FA\x07(\x02\x02\u01FA\u01FE\x077\x02\x02\u01FB\u01FD\x05\\/\x02\u01FC" +
		"\u01FB\x03\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02\u01FE\u01FC\x03\x02" +
		"\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF[\x03\x02\x02\x02\u0200\u01FE" +
		"\x03\x02\x02\x02\u0201\u0202\x07\'\x02\x02\u0202\u0203\x07\x05\x02\x02" +
		"\u0203\u0204\x054\x1B\x02\u0204\u0205\x07\x06\x02\x02\u0205]\x03\x02\x02" +
		"\x021`bhlrz\x85\x8E\x92\x96\x9A\xA0\xAD\xB2\xB6\xC0\xC8\xD4\xDD\xE9\xF2" +
		"\xF6\xFB\xFF\u0107\u010F\u0114\u012A\u0131\u013D\u0142\u0153\u0157\u017E" +
		"\u0180\u0182\u018B\u0198\u019F\u01A9\u01B0\u01C1\u01C7\u01E0\u01EC\u01F6" +
		"\u01FE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ReactiveGrammerParser.__ATN) {
			ReactiveGrammerParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ReactiveGrammerParser._serializedATN));
		}

		return ReactiveGrammerParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ReactiveGrammerParser.EOF, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.COMMENT);
		} else {
			return this.getToken(ReactiveGrammerParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public defenition(): DefenitionContext {
		return this.getRuleContext(0, DefenitionContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.NL);
		} else {
			return this.getToken(ReactiveGrammerParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_block; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefenitionContext extends ParserRuleContext {
	public namespaceDefinition(): NamespaceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDefinitionContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public nameDefinition(): NameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NameDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_defenition; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterDefenition) {
			listener.enterDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitDefenition) {
			listener.exitDefenition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitDefenition) {
			return visitor.visitDefenition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceDefinitionContext extends ParserRuleContext {
	public NAMESPACE(): TerminalNode { return this.getToken(ReactiveGrammerParser.NAMESPACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_namespaceDefinition; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterNamespaceDefinition) {
			listener.enterNamespaceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitNamespaceDefinition) {
			listener.exitNamespaceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitNamespaceDefinition) {
			return visitor.visitNamespaceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(ReactiveGrammerParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0); }
	public enumCase(): EnumCaseContext[];
	public enumCase(i: number): EnumCaseContext;
	public enumCase(i?: number): EnumCaseContext | EnumCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumCaseContext);
		} else {
			return this.getRuleContext(i, EnumCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumCaseContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_enumCase; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterEnumCase) {
			listener.enterEnumCase(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitEnumCase) {
			listener.exitEnumCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitEnumCase) {
			return visitor.visitEnumCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(ReactiveGrammerParser.STRUCT, 0); }
	public labelableIdentifier(): LabelableIdentifierContext {
		return this.getRuleContext(0, LabelableIdentifierContext);
	}
	public attributeUsage(): AttributeUsageContext[];
	public attributeUsage(i: number): AttributeUsageContext;
	public attributeUsage(i?: number): AttributeUsageContext | AttributeUsageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeUsageContext);
		} else {
			return this.getRuleContext(i, AttributeUsageContext);
		}
	}
	public BASE(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.BASE, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.ATTRIBUTE, 0); }
	public structWhichIsDefinition(): StructWhichIsDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructWhichIsDefinitionContext);
	}
	public structBlockItem(): StructBlockItemContext[];
	public structBlockItem(i: number): StructBlockItemContext;
	public structBlockItem(i?: number): StructBlockItemContext | StructBlockItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructBlockItemContext);
		} else {
			return this.getRuleContext(i, StructBlockItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructWhichIsDefinitionContext extends ParserRuleContext {
	public WHICH_IS(): TerminalNode { return this.getToken(ReactiveGrammerParser.WHICH_IS, 0); }
	public labelableRefrenceName(): LabelableRefrenceNameContext[];
	public labelableRefrenceName(i: number): LabelableRefrenceNameContext;
	public labelableRefrenceName(i?: number): LabelableRefrenceNameContext | LabelableRefrenceNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelableRefrenceNameContext);
		} else {
			return this.getRuleContext(i, LabelableRefrenceNameContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.AND);
		} else {
			return this.getToken(ReactiveGrammerParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_structWhichIsDefinition; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterStructWhichIsDefinition) {
			listener.enterStructWhichIsDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitStructWhichIsDefinition) {
			listener.exitStructWhichIsDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitStructWhichIsDefinition) {
			return visitor.visitStructWhichIsDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructBlockItemContext extends ParserRuleContext {
	public propertyDefinition(): PropertyDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PropertyDefinitionContext);
	}
	public nameDefinition(): NameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NameDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_structBlockItem; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterStructBlockItem) {
			listener.enterStructBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitStructBlockItem) {
			listener.exitStructBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitStructBlockItem) {
			return visitor.visitStructBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public LABEL_NAME(): TerminalNode { return this.getToken(ReactiveGrammerParser.LABEL_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_label; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelableIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0); }
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_labelableIdentifier; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterLabelableIdentifier) {
			listener.enterLabelableIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitLabelableIdentifier) {
			listener.exitLabelableIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitLabelableIdentifier) {
			return visitor.visitLabelableIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelableRefrenceNameContext extends ParserRuleContext {
	public refrenceName(): RefrenceNameContext {
		return this.getRuleContext(0, RefrenceNameContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_labelableRefrenceName; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterLabelableRefrenceName) {
			listener.enterLabelableRefrenceName(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitLabelableRefrenceName) {
			listener.exitLabelableRefrenceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitLabelableRefrenceName) {
			return visitor.visitLabelableRefrenceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterBodyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
		} else {
			return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_parameterBody; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterParameterBody) {
			listener.enterParameterBody(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitParameterBody) {
			listener.exitParameterBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitParameterBody) {
			return visitor.visitParameterBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameterBody(): ParameterBodyContext | undefined {
		return this.tryGetRuleContext(0, ParameterBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_parameters; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentBodyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
		} else {
			return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
		}
	}
	public typeRefrence(): TypeRefrenceContext[];
	public typeRefrence(i: number): TypeRefrenceContext;
	public typeRefrence(i?: number): TypeRefrenceContext | TypeRefrenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeRefrenceContext);
		} else {
			return this.getRuleContext(i, TypeRefrenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_argumentBody; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterArgumentBody) {
			listener.enterArgumentBody(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitArgumentBody) {
			listener.exitArgumentBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitArgumentBody) {
			return visitor.visitArgumentBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argumentBody(): ArgumentBodyContext | undefined {
		return this.tryGetRuleContext(0, ArgumentBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeUsageContext extends ParserRuleContext {
	public ATTRIBUTE_USAGE_NAME(): TerminalNode { return this.getToken(ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME, 0); }
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_attributeUsage; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterAttributeUsage) {
			listener.enterAttributeUsage(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitAttributeUsage) {
			listener.exitAttributeUsage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitAttributeUsage) {
			return visitor.visitAttributeUsage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0); }
	public typeRefrence(): TypeRefrenceContext {
		return this.getRuleContext(0, TypeRefrenceContext);
	}
	public attributeUsage(): AttributeUsageContext[];
	public attributeUsage(i: number): AttributeUsageContext;
	public attributeUsage(i?: number): AttributeUsageContext | AttributeUsageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeUsageContext);
		} else {
			return this.getRuleContext(i, AttributeUsageContext);
		}
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public propertyOptions(): PropertyOptionsContext[];
	public propertyOptions(i: number): PropertyOptionsContext;
	public propertyOptions(i?: number): PropertyOptionsContext | PropertyOptionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyOptionsContext);
		} else {
			return this.getRuleContext(i, PropertyOptionsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_propertyDefinition; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPropertyDefinition) {
			listener.enterPropertyDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPropertyDefinition) {
			listener.exitPropertyDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPropertyDefinition) {
			return visitor.visitPropertyDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyOptionsContext extends ParserRuleContext {
	public propertyDefaultOption(): PropertyDefaultOptionContext | undefined {
		return this.tryGetRuleContext(0, PropertyDefaultOptionContext);
	}
	public propertyReadonlyOption(): PropertyReadonlyOptionContext | undefined {
		return this.tryGetRuleContext(0, PropertyReadonlyOptionContext);
	}
	public propertyInjectedOption(): PropertyInjectedOptionContext | undefined {
		return this.tryGetRuleContext(0, PropertyInjectedOptionContext);
	}
	public propertyArgumentsOption(): PropertyArgumentsOptionContext | undefined {
		return this.tryGetRuleContext(0, PropertyArgumentsOptionContext);
	}
	public propertyInjectorOption(): PropertyInjectorOptionContext | undefined {
		return this.tryGetRuleContext(0, PropertyInjectorOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_propertyOptions; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPropertyOptions) {
			listener.enterPropertyOptions(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPropertyOptions) {
			listener.exitPropertyOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPropertyOptions) {
			return visitor.visitPropertyOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDefaultOptionContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(ReactiveGrammerParser.DEFAULT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_propertyDefaultOption; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPropertyDefaultOption) {
			listener.enterPropertyDefaultOption(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPropertyDefaultOption) {
			listener.exitPropertyDefaultOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPropertyDefaultOption) {
			return visitor.visitPropertyDefaultOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyInjectedOptionContext extends ParserRuleContext {
	public INJECTED(): TerminalNode { return this.getToken(ReactiveGrammerParser.INJECTED, 0); }
	public typeRefrence(): TypeRefrenceContext {
		return this.getRuleContext(0, TypeRefrenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_propertyInjectedOption; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPropertyInjectedOption) {
			listener.enterPropertyInjectedOption(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPropertyInjectedOption) {
			listener.exitPropertyInjectedOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPropertyInjectedOption) {
			return visitor.visitPropertyInjectedOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyInjectorOptionContext extends ParserRuleContext {
	public INJECTOR(): TerminalNode { return this.getToken(ReactiveGrammerParser.INJECTOR, 0); }
	public typeRefrence(): TypeRefrenceContext {
		return this.getRuleContext(0, TypeRefrenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_propertyInjectorOption; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPropertyInjectorOption) {
			listener.enterPropertyInjectorOption(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPropertyInjectorOption) {
			listener.exitPropertyInjectorOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPropertyInjectorOption) {
			return visitor.visitPropertyInjectorOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyArgumentsOptionContext extends ParserRuleContext {
	public ARGUMENTS(): TerminalNode { return this.getToken(ReactiveGrammerParser.ARGUMENTS, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_propertyArgumentsOption; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPropertyArgumentsOption) {
			listener.enterPropertyArgumentsOption(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPropertyArgumentsOption) {
			listener.exitPropertyArgumentsOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPropertyArgumentsOption) {
			return visitor.visitPropertyArgumentsOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyReadonlyOptionContext extends ParserRuleContext {
	public READONLY(): TerminalNode { return this.getToken(ReactiveGrammerParser.READONLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_propertyReadonlyOption; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPropertyReadonlyOption) {
			listener.enterPropertyReadonlyOption(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPropertyReadonlyOption) {
			listener.exitPropertyReadonlyOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPropertyReadonlyOption) {
			return visitor.visitPropertyReadonlyOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRefrenceContext extends ParserRuleContext {
	public genericTypeRefrence(): GenericTypeRefrenceContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeRefrenceContext);
	}
	public refrenceName(): RefrenceNameContext | undefined {
		return this.tryGetRuleContext(0, RefrenceNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_typeRefrence; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterTypeRefrence) {
			listener.enterTypeRefrence(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitTypeRefrence) {
			listener.exitTypeRefrence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitTypeRefrence) {
			return visitor.visitTypeRefrence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefrenceNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
		} else {
			return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_refrenceName; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterRefrenceName) {
			listener.enterRefrenceName(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitRefrenceName) {
			listener.exitRefrenceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitRefrenceName) {
			return visitor.visitRefrenceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericTypeRefrenceContext extends ParserRuleContext {
	public refrenceName(): RefrenceNameContext {
		return this.getRuleContext(0, RefrenceNameContext);
	}
	public OF(): TerminalNode { return this.getToken(ReactiveGrammerParser.OF, 0); }
	public typeRefrence(): TypeRefrenceContext[];
	public typeRefrence(i: number): TypeRefrenceContext;
	public typeRefrence(i?: number): TypeRefrenceContext | TypeRefrenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeRefrenceContext);
		} else {
			return this.getRuleContext(i, TypeRefrenceContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.AND);
		} else {
			return this.getToken(ReactiveGrammerParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_genericTypeRefrence; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterGenericTypeRefrence) {
			listener.enterGenericTypeRefrence(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitGenericTypeRefrence) {
			listener.exitGenericTypeRefrence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitGenericTypeRefrence) {
			return visitor.visitGenericTypeRefrence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LTE(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.LTE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.LT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.GTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.GT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.NEQ, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.IS, 0); }
	public typeRefrence(): TypeRefrenceContext | undefined {
		return this.tryGetRuleContext(0, TypeRefrenceContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.AND, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.NOT, 0); }
	public LABEL_NAME(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.LABEL_NAME, 0); }
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_expression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public primitiveExpression(): PrimitiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveExpressionContext);
	}
	public refrenceExpression(): RefrenceExpressionContext | undefined {
		return this.tryGetRuleContext(0, RefrenceExpressionContext);
	}
	public conditionalValueExpression(): ConditionalValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalValueExpressionContext);
	}
	public newStructExpression(): NewStructExpressionContext | undefined {
		return this.tryGetRuleContext(0, NewStructExpressionContext);
	}
	public arrayExpression(): ArrayExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayExpressionContext);
	}
	public namedCollectionExpression(): NamedCollectionExpressionContext | undefined {
		return this.tryGetRuleContext(0, NamedCollectionExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_atom; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewStructExpressionContext extends ParserRuleContext {
	public refrenceName(): RefrenceNameContext {
		return this.getRuleContext(0, RefrenceNameContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_newStructExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterNewStructExpression) {
			listener.enterNewStructExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitNewStructExpression) {
			listener.exitNewStructExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitNewStructExpression) {
			return visitor.visitNewStructExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayExpressionContext extends ParserRuleContext {
	public typeRefrence(): TypeRefrenceContext {
		return this.getRuleContext(0, TypeRefrenceContext);
	}
	public arrayMember(): ArrayMemberContext[];
	public arrayMember(i: number): ArrayMemberContext;
	public arrayMember(i?: number): ArrayMemberContext | ArrayMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayMemberContext);
		} else {
			return this.getRuleContext(i, ArrayMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_arrayExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayMemberContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public arrayForeachMember(): ArrayForeachMemberContext | undefined {
		return this.tryGetRuleContext(0, ArrayForeachMemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_arrayMember; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterArrayMember) {
			listener.enterArrayMember(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitArrayMember) {
			listener.exitArrayMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitArrayMember) {
			return visitor.visitArrayMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedCollectionExpressionContext extends ParserRuleContext {
	public typeRefrence(): TypeRefrenceContext {
		return this.getRuleContext(0, TypeRefrenceContext);
	}
	public namedCollectionMember(): NamedCollectionMemberContext[];
	public namedCollectionMember(i: number): NamedCollectionMemberContext;
	public namedCollectionMember(i?: number): NamedCollectionMemberContext | NamedCollectionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedCollectionMemberContext);
		} else {
			return this.getRuleContext(i, NamedCollectionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_namedCollectionExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterNamedCollectionExpression) {
			listener.enterNamedCollectionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitNamedCollectionExpression) {
			listener.exitNamedCollectionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitNamedCollectionExpression) {
			return visitor.visitNamedCollectionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedCollectionMemberContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public refrenceName(): RefrenceNameContext | undefined {
		return this.tryGetRuleContext(0, RefrenceNameContext);
	}
	public labelRefrenceMemberAccessExpression(): LabelRefrenceMemberAccessExpressionContext | undefined {
		return this.tryGetRuleContext(0, LabelRefrenceMemberAccessExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_namedCollectionMember; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterNamedCollectionMember) {
			listener.enterNamedCollectionMember(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitNamedCollectionMember) {
			listener.exitNamedCollectionMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitNamedCollectionMember) {
			return visitor.visitNamedCollectionMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayForeachMemberContext extends ParserRuleContext {
	public FOREACH(): TerminalNode { return this.getToken(ReactiveGrammerParser.FOREACH, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0); }
	public IN(): TerminalNode { return this.getToken(ReactiveGrammerParser.IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_arrayForeachMember; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterArrayForeachMember) {
			listener.enterArrayForeachMember(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitArrayForeachMember) {
			listener.exitArrayForeachMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitArrayForeachMember) {
			return visitor.visitArrayForeachMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalValueExpressionContext extends ParserRuleContext {
	public conditionalValueExpressionTrueBranch(): ConditionalValueExpressionTrueBranchContext {
		return this.getRuleContext(0, ConditionalValueExpressionTrueBranchContext);
	}
	public conditionalValueExpressionElseIfBranch(): ConditionalValueExpressionElseIfBranchContext[];
	public conditionalValueExpressionElseIfBranch(i: number): ConditionalValueExpressionElseIfBranchContext;
	public conditionalValueExpressionElseIfBranch(i?: number): ConditionalValueExpressionElseIfBranchContext | ConditionalValueExpressionElseIfBranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalValueExpressionElseIfBranchContext);
		} else {
			return this.getRuleContext(i, ConditionalValueExpressionElseIfBranchContext);
		}
	}
	public conditionalValueExpressionElseBranch(): ConditionalValueExpressionElseBranchContext[];
	public conditionalValueExpressionElseBranch(i: number): ConditionalValueExpressionElseBranchContext;
	public conditionalValueExpressionElseBranch(i?: number): ConditionalValueExpressionElseBranchContext | ConditionalValueExpressionElseBranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalValueExpressionElseBranchContext);
		} else {
			return this.getRuleContext(i, ConditionalValueExpressionElseBranchContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_conditionalValueExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterConditionalValueExpression) {
			listener.enterConditionalValueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitConditionalValueExpression) {
			listener.exitConditionalValueExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitConditionalValueExpression) {
			return visitor.visitConditionalValueExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalValueExpressionTrueBranchContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(ReactiveGrammerParser.IF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_conditionalValueExpressionTrueBranch; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterConditionalValueExpressionTrueBranch) {
			listener.enterConditionalValueExpressionTrueBranch(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitConditionalValueExpressionTrueBranch) {
			listener.exitConditionalValueExpressionTrueBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitConditionalValueExpressionTrueBranch) {
			return visitor.visitConditionalValueExpressionTrueBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalValueExpressionElseBranchContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(ReactiveGrammerParser.ELSE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_conditionalValueExpressionElseBranch; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterConditionalValueExpressionElseBranch) {
			listener.enterConditionalValueExpressionElseBranch(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitConditionalValueExpressionElseBranch) {
			listener.exitConditionalValueExpressionElseBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitConditionalValueExpressionElseBranch) {
			return visitor.visitConditionalValueExpressionElseBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalValueExpressionElseIfBranchContext extends ParserRuleContext {
	public ELSEIF(): TerminalNode { return this.getToken(ReactiveGrammerParser.ELSEIF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_conditionalValueExpressionElseIfBranch; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterConditionalValueExpressionElseIfBranch) {
			listener.enterConditionalValueExpressionElseIfBranch(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitConditionalValueExpressionElseIfBranch) {
			listener.exitConditionalValueExpressionElseIfBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitConditionalValueExpressionElseIfBranch) {
			return visitor.visitConditionalValueExpressionElseIfBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveExpressionContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.BooleanLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(ReactiveGrammerParser.NumberLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_primitiveExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterPrimitiveExpression) {
			listener.enterPrimitiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitPrimitiveExpression) {
			listener.exitPrimitiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitPrimitiveExpression) {
			return visitor.visitPrimitiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefrenceExpressionContext extends ParserRuleContext {
	public refrenceName(): RefrenceNameContext | undefined {
		return this.tryGetRuleContext(0, RefrenceNameContext);
	}
	public typeStaticMemberAccessExpression(): TypeStaticMemberAccessExpressionContext | undefined {
		return this.tryGetRuleContext(0, TypeStaticMemberAccessExpressionContext);
	}
	public labelRefrenceMemberAccessExpression(): LabelRefrenceMemberAccessExpressionContext | undefined {
		return this.tryGetRuleContext(0, LabelRefrenceMemberAccessExpressionContext);
	}
	public labelRefrenceMemberAccessExpressionWithParameters(): LabelRefrenceMemberAccessExpressionWithParametersContext | undefined {
		return this.tryGetRuleContext(0, LabelRefrenceMemberAccessExpressionWithParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_refrenceExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterRefrenceExpression) {
			listener.enterRefrenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitRefrenceExpression) {
			listener.exitRefrenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitRefrenceExpression) {
			return visitor.visitRefrenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelRefrenceMemberAccessExpressionWithParametersContext extends ParserRuleContext {
	public labelRefrenceMemberAccessExpression(): LabelRefrenceMemberAccessExpressionContext {
		return this.getRuleContext(0, LabelRefrenceMemberAccessExpressionContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpressionWithParameters; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterLabelRefrenceMemberAccessExpressionWithParameters) {
			listener.enterLabelRefrenceMemberAccessExpressionWithParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitLabelRefrenceMemberAccessExpressionWithParameters) {
			listener.exitLabelRefrenceMemberAccessExpressionWithParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitLabelRefrenceMemberAccessExpressionWithParameters) {
			return visitor.visitLabelRefrenceMemberAccessExpressionWithParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelRefrenceMemberAccessExpressionContext extends ParserRuleContext {
	public LABEL_NAME(): TerminalNode { return this.getToken(ReactiveGrammerParser.LABEL_NAME, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
		} else {
			return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterLabelRefrenceMemberAccessExpression) {
			listener.enterLabelRefrenceMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitLabelRefrenceMemberAccessExpression) {
			listener.exitLabelRefrenceMemberAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitLabelRefrenceMemberAccessExpression) {
			return visitor.visitLabelRefrenceMemberAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStaticMemberAccessExpressionContext extends ParserRuleContext {
	public typeRefrence(): TypeRefrenceContext {
		return this.getRuleContext(0, TypeRefrenceContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
		} else {
			return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_typeStaticMemberAccessExpression; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterTypeStaticMemberAccessExpression) {
			listener.enterTypeStaticMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitTypeStaticMemberAccessExpression) {
			listener.exitTypeStaticMemberAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitTypeStaticMemberAccessExpression) {
			return visitor.visitTypeStaticMemberAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ReactiveGrammerParser.NAME, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0); }
	public nameOptions(): NameOptionsContext[];
	public nameOptions(i: number): NameOptionsContext;
	public nameOptions(i?: number): NameOptionsContext | NameOptionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameOptionsContext);
		} else {
			return this.getRuleContext(i, NameOptionsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_nameDefinition; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterNameDefinition) {
			listener.enterNameDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitNameDefinition) {
			listener.exitNameDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitNameDefinition) {
			return visitor.visitNameDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameOptionsContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(ReactiveGrammerParser.FOR, 0); }
	public refrenceName(): RefrenceNameContext {
		return this.getRuleContext(0, RefrenceNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ReactiveGrammerParser.RULE_nameOptions; }
	// @Override
	public enterRule(listener: ReactiveGrammerListener): void {
		if (listener.enterNameOptions) {
			listener.enterNameOptions(this);
		}
	}
	// @Override
	public exitRule(listener: ReactiveGrammerListener): void {
		if (listener.exitNameOptions) {
			listener.exitNameOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ReactiveGrammerVisitor<Result>): Result {
		if (visitor.visitNameOptions) {
			return visitor.visitNameOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


