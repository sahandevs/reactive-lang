var antlrEditor = require('.');

var editor = antlrEditor.createEditor();
editor.setEditorPlaceholderText('Enter your code here...');

editor.setShowLineNumbers(true);
editor.setDisplayEditorErrors(true);

//editor.setTheme('idea');
editor.focus();

var el = editor.getDomElement();

// Render the editor
document.body.appendChild(el);

//
// Rule Styles
//
var ruleStyles = {};
//ruleStyles['sourceFile'] = 'cm-keyword';
//ruleStyles['block'] = 'cm-keyword';
//ruleStyles['defenition'] = 'cm-keyword';
//ruleStyles['namespaceDefinition'] = 'cm-keyword';
//ruleStyles['enumDefinition'] = 'cm-keyword';
//ruleStyles['enumCase'] = 'cm-keyword';
//ruleStyles['structDefinition'] = 'cm-keyword';
//ruleStyles['structWhichIsDefinition'] = 'cm-keyword';
//ruleStyles['structBlockItem'] = 'cm-keyword';
//ruleStyles['label'] = 'cm-keyword';
//ruleStyles['labelableIdentifier'] = 'cm-keyword';
//ruleStyles['labelableRefrenceName'] = 'cm-keyword';
//ruleStyles['parameterBody'] = 'cm-keyword';
//ruleStyles['parameters'] = 'cm-keyword';
//ruleStyles['argumentBody'] = 'cm-keyword';
//ruleStyles['arguments'] = 'cm-keyword';
//ruleStyles['attributeUsage'] = 'cm-keyword';
//ruleStyles['propertyDefinition'] = 'cm-keyword';
//ruleStyles['propertyOptions'] = 'cm-keyword';
//ruleStyles['propertyDefaultOption'] = 'cm-keyword';
//ruleStyles['propertyInjectedOption'] = 'cm-keyword';
//ruleStyles['propertyInjectorOption'] = 'cm-keyword';
//ruleStyles['propertyArgumentsOption'] = 'cm-keyword';
//ruleStyles['propertyReadonlyOption'] = 'cm-keyword';
//ruleStyles['typeRefrence'] = 'cm-keyword';
//ruleStyles['refrenceName'] = 'cm-keyword';
//ruleStyles['genericTypeRefrence'] = 'cm-keyword';
//ruleStyles['expression'] = 'cm-keyword';
//ruleStyles['atom'] = 'cm-keyword';
//ruleStyles['newStructExpression'] = 'cm-keyword';
//ruleStyles['arrayExpression'] = 'cm-keyword';
//ruleStyles['arrayMember'] = 'cm-keyword';
//ruleStyles['namedCollectionExpression'] = 'cm-keyword';
//ruleStyles['namedCollectionMember'] = 'cm-keyword';
//ruleStyles['arrayForeachMember'] = 'cm-keyword';
//ruleStyles['conditionalValueExpression'] = 'cm-keyword';
//ruleStyles['conditionalValueExpressionTrueBranch'] = 'cm-keyword';
//ruleStyles['conditionalValueExpressionElseBranch'] = 'cm-keyword';
//ruleStyles['conditionalValueExpressionElseIfBranch'] = 'cm-keyword';
//ruleStyles['primitiveExpression'] = 'cm-keyword';
//ruleStyles['refrenceExpression'] = 'cm-keyword';
//ruleStyles['labelRefrenceMemberAccessExpressionWithParameters'] = 'cm-keyword';
//ruleStyles['labelRefrenceMemberAccessExpression'] = 'cm-keyword';
//ruleStyles['typeStaticMemberAccessExpression'] = 'cm-keyword';
//ruleStyles['nameDefinition'] = 'cm-keyword';
//ruleStyles['nameOptions'] = 'cm-keyword';
editor.setDefaultRuleStyles(ruleStyles);

var tokenStyles = {};

//
// Token Styles
//
//tokenStyles['T__0'] = 'cm-keyword';
//tokenStyles['T__1'] = 'cm-keyword';
//tokenStyles['T__2'] = 'cm-keyword';
//tokenStyles['T__3'] = 'cm-keyword';
//tokenStyles['T__4'] = 'cm-keyword';
//tokenStyles['T__5'] = 'cm-keyword';
//tokenStyles['T__6'] = 'cm-keyword';
//tokenStyles['T__7'] = 'cm-keyword';
//tokenStyles['T__8'] = 'cm-keyword';
//tokenStyles['T__9'] = 'cm-keyword';
//tokenStyles['T__10'] = 'cm-keyword';
//tokenStyles['T__11'] = 'cm-keyword';
//tokenStyles['T__12'] = 'cm-keyword';
//tokenStyles['T__13'] = 'cm-keyword';
//tokenStyles['T__14'] = 'cm-keyword';
//tokenStyles['T__15'] = 'cm-keyword';
//tokenStyles['NAMESPACE'] = 'cm-keyword';
//tokenStyles['ENUM'] = 'cm-keyword';
//tokenStyles['ATTRIBUTE'] = 'cm-keyword';
//tokenStyles['STRUCT'] = 'cm-keyword';
//tokenStyles['READONLY'] = 'cm-keyword';
//tokenStyles['DEFAULT'] = 'cm-keyword';
//tokenStyles['VAR'] = 'cm-keyword';
//tokenStyles['WHICH_IS'] = 'cm-keyword';
//tokenStyles['AND'] = 'cm-keyword';
//tokenStyles['OR'] = 'cm-keyword';
//tokenStyles['NOT'] = 'cm-keyword';
//tokenStyles['GTE'] = 'cm-keyword';
//tokenStyles['GT'] = 'cm-keyword';
//tokenStyles['LTE'] = 'cm-keyword';
//tokenStyles['LT'] = 'cm-keyword';
//tokenStyles['EQ'] = 'cm-keyword';
//tokenStyles['NEQ'] = 'cm-keyword';
//tokenStyles['IS'] = 'cm-keyword';
//tokenStyles['BASE'] = 'cm-keyword';
//tokenStyles['OF'] = 'cm-keyword';
//tokenStyles['FOR'] = 'cm-keyword';
//tokenStyles['NAME'] = 'cm-keyword';
//tokenStyles['IF'] = 'cm-keyword';
//tokenStyles['ELSEIF'] = 'cm-keyword';
//tokenStyles['ELSE'] = 'cm-keyword';
//tokenStyles['FOREACH'] = 'cm-keyword';
//tokenStyles['IN'] = 'cm-keyword';
//tokenStyles['INJECTOR'] = 'cm-keyword';
//tokenStyles['INJECTED'] = 'cm-keyword';
//tokenStyles['ARGUMENTS'] = 'cm-keyword';
//tokenStyles['StringLiteral'] = 'cm-keyword';
//tokenStyles['BooleanLiteral'] = 'cm-keyword';
//tokenStyles['NumberLiteral'] = 'cm-keyword';
//tokenStyles['DecimalLiteral'] = 'cm-keyword';
//tokenStyles['DecimalIntegerLiteral'] = 'cm-keyword';
//tokenStyles['ExponentPart'] = 'cm-keyword';
//tokenStyles['DoubleStringCharacter'] = 'cm-keyword';
//tokenStyles['ATTRIBUTE_USAGE_NAME'] = 'cm-keyword';
//tokenStyles['ID_START'] = 'cm-keyword';
//tokenStyles['IDENTIFIER'] = 'cm-keyword';
//tokenStyles['LABEL_NAME'] = 'cm-keyword';
//tokenStyles['WS'] = 'cm-keyword';
//tokenStyles['COMMENT'] = 'cm-keyword';
//tokenStyles['NL'] = 'cm-keyword';

editor.setDefaultTokenStyles(tokenStyles);
