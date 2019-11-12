/*
 * Parser Rules
 */
grammar ReactiveGrammer;

sourceFile: (block | COMMENT)* EOF;
block: NL? defenition NL?;

defenition:
	namespaceDefinition
	| enumDefinition
	| structDefinition
	| nameDefinition;

namespaceDefinition: NAMESPACE IDENTIFIER '{' block* '}';
// enum
enumDefinition: ENUM IDENTIFIER '{' enumCase+ '}';
enumCase: IDENTIFIER;
// struct
structDefinition:
	attributeUsage* BASE? STRUCT ATTRIBUTE? labelableIdentifier structWhichIsDefinition? '{'
		structBlockItem* '}';

structWhichIsDefinition:
	WHICH_IS (
		labelableRefrenceName
		| '(' labelableRefrenceName (AND labelableRefrenceName)* ')'
	);

structBlockItem: propertyDefinition | nameDefinition;

// label

label: LABEL_NAME;

labelableIdentifier: IDENTIFIER | '(' label IDENTIFIER ')';
labelableRefrenceName:
	refrenceName
	| '(' label refrenceName ')';

// parameter

parameterBody: (IDENTIFIER ':' expression) (
		',' IDENTIFIER ':' expression
	)*;

parameters: '(' ')' | '(' parameterBody ')';

argumentBody: (IDENTIFIER ':' typeRefrence) (
		',' IDENTIFIER ':' typeRefrence
	)*;

arguments: '(' ')' | '(' argumentBody ')';

// attribute usage

attributeUsage: ATTRIBUTE_USAGE_NAME parameters?;

// property
propertyDefinition:
	attributeUsage* label? IDENTIFIER ':' typeRefrence propertyOptions*;

propertyOptions:
	propertyDefaultOption
	| propertyReadonlyOption
	| propertyInjectedOption
	| propertyArgumentsOption
	| propertyInjectorOption;

propertyDefaultOption: DEFAULT '(' VAR? expression ')';
propertyInjectedOption: INJECTED '(' typeRefrence ')';
propertyInjectorOption: INJECTOR '(' typeRefrence ')';
propertyArgumentsOption: ARGUMENTS arguments;
propertyReadonlyOption: READONLY;

typeRefrence: genericTypeRefrence | refrenceName;

refrenceName: IDENTIFIER (':' IDENTIFIER)*;

genericTypeRefrence:
	refrenceName OF (
		typeRefrence
		| ('(' typeRefrence (AND typeRefrence)* ')')
	);

// expression

expression:
	expression '^' expression
	| expression ('*' | '/') expression
	| expression ('+' | '-') expression
	| expression LTE expression
	| expression LT expression
	| expression GTE expression
	| expression GT expression
	| expression EQ expression
	| expression NEQ expression
	| expression IS (expression | typeRefrence)
	| expression OR expression
	| expression AND expression
	| NOT expression
	| '(' LABEL_NAME expression ')'
	| '(' expression ')'
	| ('+' | '-')* atom;

atom:
	primitiveExpression
	| refrenceExpression
	| conditionalValueExpression
	| newStructExpression
	| arrayExpression
	| namedCollectionExpression;

newStructExpression: refrenceName parameters;

arrayExpression: typeRefrence '#' '[' ( arrayMember ',')* ']';
arrayMember: expression | arrayForeachMember;

namedCollectionExpression:
	typeRefrence '#' '{' (namedCollectionMember ',')* '}';
namedCollectionMember: (
		refrenceName
		| labelRefrenceMemberAccessExpression
	) '->' expression;

arrayForeachMember:
	FOREACH '(' label IN expression ')' expression;
conditionalValueExpression:
	conditionalValueExpressionTrueBranch conditionalValueExpressionElseIfBranch*
		conditionalValueExpressionElseBranch*;

conditionalValueExpressionTrueBranch:
	IF '(' expression ')' expression;
conditionalValueExpressionElseBranch: ELSE expression;
conditionalValueExpressionElseIfBranch:
	ELSEIF '(' expression ')' expression;

primitiveExpression:
	StringLiteral
	| BooleanLiteral
	| NumberLiteral;

refrenceExpression:
	| refrenceName
	| typeStaticMemberAccessExpression
	| labelRefrenceMemberAccessExpression
	| labelRefrenceMemberAccessExpressionWithParameters;

labelRefrenceMemberAccessExpressionWithParameters:
	labelRefrenceMemberAccessExpression parameters;
labelRefrenceMemberAccessExpression:
	LABEL_NAME '.' IDENTIFIER ('.' IDENTIFIER)*;
typeStaticMemberAccessExpression:
	typeRefrence '.' IDENTIFIER ('.' IDENTIFIER)*;

// name

nameDefinition: NAME IDENTIFIER nameOptions*;

nameOptions: FOR '(' refrenceName ')';

/*
 * lexer rules
 */

NAMESPACE: 'namespace';
ENUM: 'enum';
ATTRIBUTE: 'attribute';
STRUCT: 'struct';
READONLY: 'readonly';
DEFAULT: 'default';
VAR: 'var';
WHICH_IS: 'which is';
AND: 'and';
OR: 'or';
NOT: 'not';
GTE: '>=';
GT: '>';
LTE: '<=';
LT: '<';
EQ: '==';
NEQ: '!=';
IS: 'is';
BASE: 'base';
OF: 'of';
FOR: 'for';
NAME: 'name';
IF: 'if';
ELSEIF: 'elseif';
ELSE: 'else';
FOREACH: 'foreach';
IN: 'in';
INJECTOR: 'injector';
INJECTED: 'injected';
ARGUMENTS: 'arguments';

StringLiteral: '"' DoubleStringCharacter* '"';

BooleanLiteral: 'true' | 'false';

NumberLiteral: '-'? DecimalLiteral;

DecimalLiteral:
	DecimalIntegerLiteral '.' [0-9]* ExponentPart?
	| '.' [0-9]+ ExponentPart?
	| DecimalIntegerLiteral ExponentPart?;

fragment DecimalIntegerLiteral: '0' | [1-9] [0-9]*;

fragment ExponentPart: [eE] [+-]? [0-9]+;

fragment DoubleStringCharacter: ~["\\\r\n];

ATTRIBUTE_USAGE_NAME: '@' IDENTIFIER;

ID_START: ([a-zA-Z] | '_');
IDENTIFIER: ID_START (ID_START | [0-9])*;
LABEL_NAME: '$' IDENTIFIER;
WS: [ \n\t\r]+ -> skip;
COMMENT: WS* '/*' ~[\n]* '*/' WS* -> skip;

NL: '\n';