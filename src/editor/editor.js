
var antlrEditor = require('antlr4-editor');
var implementation = require('antlr4-editor/implementations/codemirror');
var antlrHelper = require('antlr4-helper');
var ReactiveGrammerLexer = require('./ReactiveGrammerLexer').ReactiveGrammerLexer;
var ReactiveGrammerParser = require('./ReactiveGrammerParser').ReactiveGrammerParser;

var factory = antlrHelper.createFactoryBuilder()
    .lexer(function(input) { return new ReactiveGrammerLexer(input); })
    .parser(function(tokenStream) { return new ReactiveGrammerParser(tokenStream); })
    .rootRule(function(parser) { return parser.sourceFile(); })
    .build();

var parser = antlrHelper.createParser(factory);


function createEditor() {
    return implementation.createEditor(parser);
}

exports.createEditor = createEditor;

