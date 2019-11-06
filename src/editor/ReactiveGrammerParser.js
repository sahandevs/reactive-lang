// Generated from ReactiveGrammer.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "ReactiveGrammer.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003;\u0207\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0003\u0002\u0007\u0002",
    "a\n\u0002\f\u0002\u000e\u0002d\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0005\u0003i\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003m\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004s\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005y\n\u0005",
    "\f\u0005\u000e\u0005|\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006\u0084\n\u0006\r\u0006",
    "\u000e\u0006\u0085\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0007\b\u008d\n\b\f\b\u000e\b\u0090\u000b\b\u0003\b\u0005\b\u0093",
    "\n\b\u0003\b\u0003\b\u0005\b\u0097\n\b\u0003\b\u0003\b\u0005\b\u009b",
    "\n\b\u0003\b\u0003\b\u0007\b\u009f\n\b\f\b\u000e\b\u00a2\u000b\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00ac",
    "\n\t\f\t\u000e\t\u00af\u000b\t\u0003\t\u0003\t\u0005\t\u00b3\n\t\u0003",
    "\n\u0003\n\u0005\n\u00b7\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00c1\n\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0005\r\u00c9\n\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u00d3\n\u000e\f\u000e\u000e\u000e\u00d6\u000b\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00de\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00e8\n",
    "\u0010\f\u0010\u000e\u0010\u00eb\u000b\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00f3\n",
    "\u0011\u0003\u0012\u0003\u0012\u0005\u0012\u00f7\n\u0012\u0003\u0013",
    "\u0007\u0013\u00fa\n\u0013\f\u0013\u000e\u0013\u00fd\u000b\u0013\u0003",
    "\u0013\u0005\u0013\u0100\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0007\u0013\u0106\n\u0013\f\u0013\u000e\u0013\u0109\u000b",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u0110\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u0115\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u012b\n\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0130\n\u001b\f\u001b",
    "\u000e\u001b\u0133\u000b\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u013c\n\u001c",
    "\f\u001c\u000e\u001c\u013f\u000b\u001c\u0003\u001c\u0003\u001c\u0005",
    "\u001c\u0143\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u0152\n\u001d\f\u001d",
    "\u000e\u001d\u0155\u000b\u001d\u0003\u001d\u0005\u001d\u0158\n\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0005\u001d\u017f\n\u001d\u0007\u001d\u0181\n\u001d\f\u001d",
    "\u000e\u001d\u0184\u000b\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u018c\n\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0007",
    " \u0197\n \f \u000e \u019a\u000b \u0003 \u0003 \u0003!\u0003!\u0005",
    "!\u01a0\n!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0007\"\u01a8",
    "\n\"\f\"\u000e\"\u01ab\u000b\"\u0003\"\u0003\"\u0003#\u0003#\u0005#",
    "\u01b1\n#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003%\u0003%\u0007%\u01c0\n%\f%\u000e%\u01c3\u000b",
    "%\u0003%\u0007%\u01c6\n%\f%\u000e%\u01c9\u000b%\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(",
    "\u0003(\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0005*\u01e1\n*\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0007,\u01eb\n,\f,\u000e,\u01ee\u000b,\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0007-\u01f5\n-\f-\u000e-\u01f8\u000b-\u0003.\u0003.\u0003",
    ".\u0007.\u01fd\n.\f.\u000e.\u0200\u000b.\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0002\u000380\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\\u0002\u0005\u0003\u0002\f\r\u0003\u0002\n\u000b\u0003\u000213\u0002",
    "\u021f\u0002b\u0003\u0002\u0002\u0002\u0004h\u0003\u0002\u0002\u0002",
    "\u0006r\u0003\u0002\u0002\u0002\bt\u0003\u0002\u0002\u0002\n\u007f\u0003",
    "\u0002\u0002\u0002\f\u0089\u0003\u0002\u0002\u0002\u000e\u008e\u0003",
    "\u0002\u0002\u0002\u0010\u00a5\u0003\u0002\u0002\u0002\u0012\u00b6\u0003",
    "\u0002\u0002\u0002\u0014\u00b8\u0003\u0002\u0002\u0002\u0016\u00c0\u0003",
    "\u0002\u0002\u0002\u0018\u00c8\u0003\u0002\u0002\u0002\u001a\u00ca\u0003",
    "\u0002\u0002\u0002\u001c\u00dd\u0003\u0002\u0002\u0002\u001e\u00df\u0003",
    "\u0002\u0002\u0002 \u00f2\u0003\u0002\u0002\u0002\"\u00f4\u0003\u0002",
    "\u0002\u0002$\u00fb\u0003\u0002\u0002\u0002&\u010f\u0003\u0002\u0002",
    "\u0002(\u0111\u0003\u0002\u0002\u0002*\u0119\u0003\u0002\u0002\u0002",
    ",\u011e\u0003\u0002\u0002\u0002.\u0123\u0003\u0002\u0002\u00020\u0126",
    "\u0003\u0002\u0002\u00022\u012a\u0003\u0002\u0002\u00024\u012c\u0003",
    "\u0002\u0002\u00026\u0134\u0003\u0002\u0002\u00028\u0157\u0003\u0002",
    "\u0002\u0002:\u018b\u0003\u0002\u0002\u0002<\u018d\u0003\u0002\u0002",
    "\u0002>\u0190\u0003\u0002\u0002\u0002@\u019f\u0003\u0002\u0002\u0002",
    "B\u01a1\u0003\u0002\u0002\u0002D\u01b0\u0003\u0002\u0002\u0002F\u01b5",
    "\u0003\u0002\u0002\u0002H\u01bd\u0003\u0002\u0002\u0002J\u01ca\u0003",
    "\u0002\u0002\u0002L\u01d0\u0003\u0002\u0002\u0002N\u01d3\u0003\u0002",
    "\u0002\u0002P\u01d9\u0003\u0002\u0002\u0002R\u01e0\u0003\u0002\u0002",
    "\u0002T\u01e2\u0003\u0002\u0002\u0002V\u01e5\u0003\u0002\u0002\u0002",
    "X\u01ef\u0003\u0002\u0002\u0002Z\u01f9\u0003\u0002\u0002\u0002\\\u0201",
    "\u0003\u0002\u0002\u0002^a\u0005\u0004\u0003\u0002_a\u0007:\u0002\u0002",
    "`^\u0003\u0002\u0002\u0002`_\u0003\u0002\u0002\u0002ad\u0003\u0002\u0002",
    "\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002ce\u0003\u0002",
    "\u0002\u0002db\u0003\u0002\u0002\u0002ef\u0007\u0002\u0002\u0003f\u0003",
    "\u0003\u0002\u0002\u0002gi\u0007;\u0002\u0002hg\u0003\u0002\u0002\u0002",
    "hi\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jl\u0005\u0006\u0004",
    "\u0002km\u0007;\u0002\u0002lk\u0003\u0002\u0002\u0002lm\u0003\u0002",
    "\u0002\u0002m\u0005\u0003\u0002\u0002\u0002ns\u0005\b\u0005\u0002os",
    "\u0005\n\u0006\u0002ps\u0005\u000e\b\u0002qs\u0005Z.\u0002rn\u0003\u0002",
    "\u0002\u0002ro\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rq\u0003",
    "\u0002\u0002\u0002s\u0007\u0003\u0002\u0002\u0002tu\u0007\u0013\u0002",
    "\u0002uv\u00077\u0002\u0002vz\u0007\u0003\u0002\u0002wy\u0005\u0004",
    "\u0003\u0002xw\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003",
    "\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002\u0002",
    "|z\u0003\u0002\u0002\u0002}~\u0007\u0004\u0002\u0002~\t\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0007\u0014\u0002\u0002\u0080\u0081\u00077",
    "\u0002\u0002\u0081\u0083\u0007\u0003\u0002\u0002\u0082\u0084\u0005\f",
    "\u0007\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002",
    "\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0007\u0004",
    "\u0002\u0002\u0088\u000b\u0003\u0002\u0002\u0002\u0089\u008a\u00077",
    "\u0002\u0002\u008a\r\u0003\u0002\u0002\u0002\u008b\u008d\u0005\"\u0012",
    "\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002\u0002",
    "\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
    "\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002",
    "\u0002\u0091\u0093\u0007%\u0002\u0002\u0092\u0091\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002",
    "\u0002\u0094\u0096\u0007\u0016\u0002\u0002\u0095\u0097\u0007\u0015\u0002",
    "\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009a\u0005\u0016\f",
    "\u0002\u0099\u009b\u0005\u0010\t\u0002\u009a\u0099\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002",
    "\u0002\u009c\u00a0\u0007\u0003\u0002\u0002\u009d\u009f\u0005\u0012\n",
    "\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002",
    "\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002",
    "\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0007\u0004\u0002\u0002\u00a4\u000f\u0003\u0002\u0002",
    "\u0002\u00a5\u00b2\u0007\u001a\u0002\u0002\u00a6\u00b3\u0005\u0018\r",
    "\u0002\u00a7\u00a8\u0007\u0005\u0002\u0002\u00a8\u00ad\u0005\u0018\r",
    "\u0002\u00a9\u00aa\u0007\u001b\u0002\u0002\u00aa\u00ac\u0005\u0018\r",
    "\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ac\u00af\u0003\u0002\u0002",
    "\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002",
    "\u0002\u00ae\u00b0\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0007\u0006\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002",
    "\u0002\u00b2\u00a6\u0003\u0002\u0002\u0002\u00b2\u00a7\u0003\u0002\u0002",
    "\u0002\u00b3\u0011\u0003\u0002\u0002\u0002\u00b4\u00b7\u0005$\u0013",
    "\u0002\u00b5\u00b7\u0005Z.\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002",
    "\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u0013\u0003\u0002\u0002\u0002",
    "\u00b8\u00b9\u00078\u0002\u0002\u00b9\u0015\u0003\u0002\u0002\u0002",
    "\u00ba\u00c1\u00077\u0002\u0002\u00bb\u00bc\u0007\u0005\u0002\u0002",
    "\u00bc\u00bd\u0005\u0014\u000b\u0002\u00bd\u00be\u00077\u0002\u0002",
    "\u00be\u00bf\u0007\u0006\u0002\u0002\u00bf\u00c1\u0003\u0002\u0002\u0002",
    "\u00c0\u00ba\u0003\u0002\u0002\u0002\u00c0\u00bb\u0003\u0002\u0002\u0002",
    "\u00c1\u0017\u0003\u0002\u0002\u0002\u00c2\u00c9\u00054\u001b\u0002",
    "\u00c3\u00c4\u0007\u0005\u0002\u0002\u00c4\u00c5\u0005\u0014\u000b\u0002",
    "\u00c5\u00c6\u00054\u001b\u0002\u00c6\u00c7\u0007\u0006\u0002\u0002",
    "\u00c7\u00c9\u0003\u0002\u0002\u0002\u00c8\u00c2\u0003\u0002\u0002\u0002",
    "\u00c8\u00c3\u0003\u0002\u0002\u0002\u00c9\u0019\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u00077\u0002\u0002\u00cb\u00cc\u0007\u0007\u0002\u0002",
    "\u00cc\u00cd\u00058\u001d\u0002\u00cd\u00d4\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0007\b\u0002\u0002\u00cf\u00d0\u00077\u0002\u0002\u00d0",
    "\u00d1\u0007\u0007\u0002\u0002\u00d1\u00d3\u00058\u001d\u0002\u00d2",
    "\u00ce\u0003\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4",
    "\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5",
    "\u001b\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0007\u0005\u0002\u0002\u00d8\u00de\u0007\u0006\u0002\u0002\u00d9",
    "\u00da\u0007\u0005\u0002\u0002\u00da\u00db\u0005\u001a\u000e\u0002\u00db",
    "\u00dc\u0007\u0006\u0002\u0002\u00dc\u00de\u0003\u0002\u0002\u0002\u00dd",
    "\u00d7\u0003\u0002\u0002\u0002\u00dd\u00d9\u0003\u0002\u0002\u0002\u00de",
    "\u001d\u0003\u0002\u0002\u0002\u00df\u00e0\u00077\u0002\u0002\u00e0",
    "\u00e1\u0007\u0007\u0002\u0002\u00e1\u00e2\u00052\u001a\u0002\u00e2",
    "\u00e9\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007\b\u0002\u0002\u00e4",
    "\u00e5\u00077\u0002\u0002\u00e5\u00e6\u0007\u0007\u0002\u0002\u00e6",
    "\u00e8\u00052\u001a\u0002\u00e7\u00e3\u0003\u0002\u0002\u0002\u00e8",
    "\u00eb\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9",
    "\u00ea\u0003\u0002\u0002\u0002\u00ea\u001f\u0003\u0002\u0002\u0002\u00eb",
    "\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007\u0005\u0002\u0002\u00ed",
    "\u00f3\u0007\u0006\u0002\u0002\u00ee\u00ef\u0007\u0005\u0002\u0002\u00ef",
    "\u00f0\u0005\u001e\u0010\u0002\u00f0\u00f1\u0007\u0006\u0002\u0002\u00f1",
    "\u00f3\u0003\u0002\u0002\u0002\u00f2\u00ec\u0003\u0002\u0002\u0002\u00f2",
    "\u00ee\u0003\u0002\u0002\u0002\u00f3!\u0003\u0002\u0002\u0002\u00f4",
    "\u00f6\u00075\u0002\u0002\u00f5\u00f7\u0005\u001c\u000f\u0002\u00f6",
    "\u00f5\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7",
    "#\u0003\u0002\u0002\u0002\u00f8\u00fa\u0005\"\u0012\u0002\u00f9\u00f8",
    "\u0003\u0002\u0002\u0002\u00fa\u00fd\u0003\u0002\u0002\u0002\u00fb\u00f9",
    "\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00ff",
    "\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe\u0100",
    "\u0005\u0014\u000b\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102",
    "\u00077\u0002\u0002\u0102\u0103\u0007\u0007\u0002\u0002\u0103\u0107",
    "\u00052\u001a\u0002\u0104\u0106\u0005&\u0014\u0002\u0105\u0104\u0003",
    "\u0002\u0002\u0002\u0106\u0109\u0003\u0002\u0002\u0002\u0107\u0105\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108%\u0003",
    "\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u010a\u0110\u0005",
    "(\u0015\u0002\u010b\u0110\u00050\u0019\u0002\u010c\u0110\u0005*\u0016",
    "\u0002\u010d\u0110\u0005.\u0018\u0002\u010e\u0110\u0005,\u0017\u0002",
    "\u010f\u010a\u0003\u0002\u0002\u0002\u010f\u010b\u0003\u0002\u0002\u0002",
    "\u010f\u010c\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002\u0002",
    "\u010f\u010e\u0003\u0002\u0002\u0002\u0110\'\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0007\u0018\u0002\u0002\u0112\u0114\u0007\u0005\u0002\u0002",
    "\u0113\u0115\u0007\u0019\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002",
    "\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002",
    "\u0116\u0117\u00058\u001d\u0002\u0117\u0118\u0007\u0006\u0002\u0002",
    "\u0118)\u0003\u0002\u0002\u0002\u0119\u011a\u0007/\u0002\u0002\u011a",
    "\u011b\u0007\u0005\u0002\u0002\u011b\u011c\u00052\u001a\u0002\u011c",
    "\u011d\u0007\u0006\u0002\u0002\u011d+\u0003\u0002\u0002\u0002\u011e",
    "\u011f\u0007.\u0002\u0002\u011f\u0120\u0007\u0005\u0002\u0002\u0120",
    "\u0121\u00052\u001a\u0002\u0121\u0122\u0007\u0006\u0002\u0002\u0122",
    "-\u0003\u0002\u0002\u0002\u0123\u0124\u00070\u0002\u0002\u0124\u0125",
    "\u0005 \u0011\u0002\u0125/\u0003\u0002\u0002\u0002\u0126\u0127\u0007",
    "\u0017\u0002\u0002\u01271\u0003\u0002\u0002\u0002\u0128\u012b\u0005",
    "6\u001c\u0002\u0129\u012b\u00054\u001b\u0002\u012a\u0128\u0003\u0002",
    "\u0002\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012b3\u0003\u0002",
    "\u0002\u0002\u012c\u0131\u00077\u0002\u0002\u012d\u012e\u0007\u0007",
    "\u0002\u0002\u012e\u0130\u00077\u0002\u0002\u012f\u012d\u0003\u0002",
    "\u0002\u0002\u0130\u0133\u0003\u0002\u0002\u0002\u0131\u012f\u0003\u0002",
    "\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u01325\u0003\u0002",
    "\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002\u0134\u0135\u00054",
    "\u001b\u0002\u0135\u0142\u0007&\u0002\u0002\u0136\u0143\u00052\u001a",
    "\u0002\u0137\u0138\u0007\u0005\u0002\u0002\u0138\u013d\u00052\u001a",
    "\u0002\u0139\u013a\u0007\u001b\u0002\u0002\u013a\u013c\u00052\u001a",
    "\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013c\u013f\u0003\u0002\u0002",
    "\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002",
    "\u0002\u013e\u0140\u0003\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002",
    "\u0002\u0140\u0141\u0007\u0006\u0002\u0002\u0141\u0143\u0003\u0002\u0002",
    "\u0002\u0142\u0136\u0003\u0002\u0002\u0002\u0142\u0137\u0003\u0002\u0002",
    "\u0002\u01437\u0003\u0002\u0002\u0002\u0144\u0145\b\u001d\u0001\u0002",
    "\u0145\u0146\u0007\u001d\u0002\u0002\u0146\u0158\u00058\u001d\u0006",
    "\u0147\u0148\u0007\u0005\u0002\u0002\u0148\u0149\u00078\u0002\u0002",
    "\u0149\u014a\u00058\u001d\u0002\u014a\u014b\u0007\u0006\u0002\u0002",
    "\u014b\u0158\u0003\u0002\u0002\u0002\u014c\u014d\u0007\u0005\u0002\u0002",
    "\u014d\u014e\u00058\u001d\u0002\u014e\u014f\u0007\u0006\u0002\u0002",
    "\u014f\u0158\u0003\u0002\u0002\u0002\u0150\u0152\t\u0002\u0002\u0002",
    "\u0151\u0150\u0003\u0002\u0002\u0002\u0152\u0155\u0003\u0002\u0002\u0002",
    "\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002\u0002\u0002",
    "\u0154\u0156\u0003\u0002\u0002\u0002\u0155\u0153\u0003\u0002\u0002\u0002",
    "\u0156\u0158\u0005:\u001e\u0002\u0157\u0144\u0003\u0002\u0002\u0002",
    "\u0157\u0147\u0003\u0002\u0002\u0002\u0157\u014c\u0003\u0002\u0002\u0002",
    "\u0157\u0153\u0003\u0002\u0002\u0002\u0158\u0182\u0003\u0002\u0002\u0002",
    "\u0159\u015a\f\u0012\u0002\u0002\u015a\u015b\u0007\t\u0002\u0002\u015b",
    "\u0181\u00058\u001d\u0013\u015c\u015d\f\u0011\u0002\u0002\u015d\u015e",
    "\t\u0003\u0002\u0002\u015e\u0181\u00058\u001d\u0012\u015f\u0160\f\u0010",
    "\u0002\u0002\u0160\u0161\t\u0002\u0002\u0002\u0161\u0181\u00058\u001d",
    "\u0011\u0162\u0163\f\u000f\u0002\u0002\u0163\u0164\u0007 \u0002\u0002",
    "\u0164\u0181\u00058\u001d\u0010\u0165\u0166\f\u000e\u0002\u0002\u0166",
    "\u0167\u0007!\u0002\u0002\u0167\u0181\u00058\u001d\u000f\u0168\u0169",
    "\f\r\u0002\u0002\u0169\u016a\u0007\u001e\u0002\u0002\u016a\u0181\u0005",
    "8\u001d\u000e\u016b\u016c\f\f\u0002\u0002\u016c\u016d\u0007\u001f\u0002",
    "\u0002\u016d\u0181\u00058\u001d\r\u016e\u016f\f\u000b\u0002\u0002\u016f",
    "\u0170\u0007\"\u0002\u0002\u0170\u0181\u00058\u001d\f\u0171\u0172\f",
    "\n\u0002\u0002\u0172\u0173\u0007#\u0002\u0002\u0173\u0181\u00058\u001d",
    "\u000b\u0174\u0175\f\b\u0002\u0002\u0175\u0176\u0007\u001c\u0002\u0002",
    "\u0176\u0181\u00058\u001d\t\u0177\u0178\f\u0007\u0002\u0002\u0178\u0179",
    "\u0007\u001b\u0002\u0002\u0179\u0181\u00058\u001d\b\u017a\u017b\f\t",
    "\u0002\u0002\u017b\u017e\u0007$\u0002\u0002\u017c\u017f\u00058\u001d",
    "\u0002\u017d\u017f\u00052\u001a\u0002\u017e\u017c\u0003\u0002\u0002",
    "\u0002\u017e\u017d\u0003\u0002\u0002\u0002\u017f\u0181\u0003\u0002\u0002",
    "\u0002\u0180\u0159\u0003\u0002\u0002\u0002\u0180\u015c\u0003\u0002\u0002",
    "\u0002\u0180\u015f\u0003\u0002\u0002\u0002\u0180\u0162\u0003\u0002\u0002",
    "\u0002\u0180\u0165\u0003\u0002\u0002\u0002\u0180\u0168\u0003\u0002\u0002",
    "\u0002\u0180\u016b\u0003\u0002\u0002\u0002\u0180\u016e\u0003\u0002\u0002",
    "\u0002\u0180\u0171\u0003\u0002\u0002\u0002\u0180\u0174\u0003\u0002\u0002",
    "\u0002\u0180\u0177\u0003\u0002\u0002\u0002\u0180\u017a\u0003\u0002\u0002",
    "\u0002\u0181\u0184\u0003\u0002\u0002\u0002\u0182\u0180\u0003\u0002\u0002",
    "\u0002\u0182\u0183\u0003\u0002\u0002\u0002\u01839\u0003\u0002\u0002",
    "\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0185\u018c\u0005P)\u0002",
    "\u0186\u018c\u0005R*\u0002\u0187\u018c\u0005H%\u0002\u0188\u018c\u0005",
    "<\u001f\u0002\u0189\u018c\u0005> \u0002\u018a\u018c\u0005B\"\u0002\u018b",
    "\u0185\u0003\u0002\u0002\u0002\u018b\u0186\u0003\u0002\u0002\u0002\u018b",
    "\u0187\u0003\u0002\u0002\u0002\u018b\u0188\u0003\u0002\u0002\u0002\u018b",
    "\u0189\u0003\u0002\u0002\u0002\u018b\u018a\u0003\u0002\u0002\u0002\u018c",
    ";\u0003\u0002\u0002\u0002\u018d\u018e\u00054\u001b\u0002\u018e\u018f",
    "\u0005\u001c\u000f\u0002\u018f=\u0003\u0002\u0002\u0002\u0190\u0191",
    "\u00052\u001a\u0002\u0191\u0192\u0007\u000e\u0002\u0002\u0192\u0198",
    "\u0007\u000f\u0002\u0002\u0193\u0194\u0005@!\u0002\u0194\u0195\u0007",
    "\b\u0002\u0002\u0195\u0197\u0003\u0002\u0002\u0002\u0196\u0193\u0003",
    "\u0002\u0002\u0002\u0197\u019a\u0003\u0002\u0002\u0002\u0198\u0196\u0003",
    "\u0002\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199\u019b\u0003",
    "\u0002\u0002\u0002\u019a\u0198\u0003\u0002\u0002\u0002\u019b\u019c\u0007",
    "\u0010\u0002\u0002\u019c?\u0003\u0002\u0002\u0002\u019d\u01a0\u0005",
    "8\u001d\u0002\u019e\u01a0\u0005F$\u0002\u019f\u019d\u0003\u0002\u0002",
    "\u0002\u019f\u019e\u0003\u0002\u0002\u0002\u01a0A\u0003\u0002\u0002",
    "\u0002\u01a1\u01a2\u00052\u001a\u0002\u01a2\u01a3\u0007\u000e\u0002",
    "\u0002\u01a3\u01a9\u0007\u0003\u0002\u0002\u01a4\u01a5\u0005D#\u0002",
    "\u01a5\u01a6\u0007\b\u0002\u0002\u01a6\u01a8\u0003\u0002\u0002\u0002",
    "\u01a7\u01a4\u0003\u0002\u0002\u0002\u01a8\u01ab\u0003\u0002\u0002\u0002",
    "\u01a9\u01a7\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002",
    "\u01aa\u01ac\u0003\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002",
    "\u01ac\u01ad\u0007\u0004\u0002\u0002\u01adC\u0003\u0002\u0002\u0002",
    "\u01ae\u01b1\u00054\u001b\u0002\u01af\u01b1\u0005V,\u0002\u01b0\u01ae",
    "\u0003\u0002\u0002\u0002\u01b0\u01af\u0003\u0002\u0002\u0002\u01b1\u01b2",
    "\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007\u0011\u0002\u0002\u01b3\u01b4",
    "\u00058\u001d\u0002\u01b4E\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007",
    ",\u0002\u0002\u01b6\u01b7\u0007\u0005\u0002\u0002\u01b7\u01b8\u0007",
    "7\u0002\u0002\u01b8\u01b9\u0007-\u0002\u0002\u01b9\u01ba\u00058\u001d",
    "\u0002\u01ba\u01bb\u0007\u0006\u0002\u0002\u01bb\u01bc\u00058\u001d",
    "\u0002\u01bcG\u0003\u0002\u0002\u0002\u01bd\u01c1\u0005J&\u0002\u01be",
    "\u01c0\u0005N(\u0002\u01bf\u01be\u0003\u0002\u0002\u0002\u01c0\u01c3",
    "\u0003\u0002\u0002\u0002\u01c1\u01bf\u0003\u0002\u0002\u0002\u01c1\u01c2",
    "\u0003\u0002\u0002\u0002\u01c2\u01c7\u0003\u0002\u0002\u0002\u01c3\u01c1",
    "\u0003\u0002\u0002\u0002\u01c4\u01c6\u0005L\'\u0002\u01c5\u01c4\u0003",
    "\u0002\u0002\u0002\u01c6\u01c9\u0003\u0002\u0002\u0002\u01c7\u01c5\u0003",
    "\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002\u0002\u01c8I\u0003",
    "\u0002\u0002\u0002\u01c9\u01c7\u0003\u0002\u0002\u0002\u01ca\u01cb\u0007",
    ")\u0002\u0002\u01cb\u01cc\u0007\u0005\u0002\u0002\u01cc\u01cd\u0005",
    "8\u001d\u0002\u01cd\u01ce\u0007\u0006\u0002\u0002\u01ce\u01cf\u0005",
    "8\u001d\u0002\u01cfK\u0003\u0002\u0002\u0002\u01d0\u01d1\u0007+\u0002",
    "\u0002\u01d1\u01d2\u00058\u001d\u0002\u01d2M\u0003\u0002\u0002\u0002",
    "\u01d3\u01d4\u0007*\u0002\u0002\u01d4\u01d5\u0007\u0005\u0002\u0002",
    "\u01d5\u01d6\u00058\u001d\u0002\u01d6\u01d7\u0007\u0006\u0002\u0002",
    "\u01d7\u01d8\u00058\u001d\u0002\u01d8O\u0003\u0002\u0002\u0002\u01d9",
    "\u01da\t\u0004\u0002\u0002\u01daQ\u0003\u0002\u0002\u0002\u01db\u01e1",
    "\u0003\u0002\u0002\u0002\u01dc\u01e1\u00054\u001b\u0002\u01dd\u01e1",
    "\u0005X-\u0002\u01de\u01e1\u0005V,\u0002\u01df\u01e1\u0005T+\u0002\u01e0",
    "\u01db\u0003\u0002\u0002\u0002\u01e0\u01dc\u0003\u0002\u0002\u0002\u01e0",
    "\u01dd\u0003\u0002\u0002\u0002\u01e0\u01de\u0003\u0002\u0002\u0002\u01e0",
    "\u01df\u0003\u0002\u0002\u0002\u01e1S\u0003\u0002\u0002\u0002\u01e2",
    "\u01e3\u0005V,\u0002\u01e3\u01e4\u0005\u001c\u000f\u0002\u01e4U\u0003",
    "\u0002\u0002\u0002\u01e5\u01e6\u00078\u0002\u0002\u01e6\u01e7\u0007",
    "\u0012\u0002\u0002\u01e7\u01ec\u00077\u0002\u0002\u01e8\u01e9\u0007",
    "\u0012\u0002\u0002\u01e9\u01eb\u00077\u0002\u0002\u01ea\u01e8\u0003",
    "\u0002\u0002\u0002\u01eb\u01ee\u0003\u0002\u0002\u0002\u01ec\u01ea\u0003",
    "\u0002\u0002\u0002\u01ec\u01ed\u0003\u0002\u0002\u0002\u01edW\u0003",
    "\u0002\u0002\u0002\u01ee\u01ec\u0003\u0002\u0002\u0002\u01ef\u01f0\u0005",
    "2\u001a\u0002\u01f0\u01f1\u0007\u0012\u0002\u0002\u01f1\u01f6\u0007",
    "7\u0002\u0002\u01f2\u01f3\u0007\u0012\u0002\u0002\u01f3\u01f5\u0007",
    "7\u0002\u0002\u01f4\u01f2\u0003\u0002\u0002\u0002\u01f5\u01f8\u0003",
    "\u0002\u0002\u0002\u01f6\u01f4\u0003\u0002\u0002\u0002\u01f6\u01f7\u0003",
    "\u0002\u0002\u0002\u01f7Y\u0003\u0002\u0002\u0002\u01f8\u01f6\u0003",
    "\u0002\u0002\u0002\u01f9\u01fa\u0007(\u0002\u0002\u01fa\u01fe\u0007",
    "7\u0002\u0002\u01fb\u01fd\u0005\\/\u0002\u01fc\u01fb\u0003\u0002\u0002",
    "\u0002\u01fd\u0200\u0003\u0002\u0002\u0002\u01fe\u01fc\u0003\u0002\u0002",
    "\u0002\u01fe\u01ff\u0003\u0002\u0002\u0002\u01ff[\u0003\u0002\u0002",
    "\u0002\u0200\u01fe\u0003\u0002\u0002\u0002\u0201\u0202\u0007\'\u0002",
    "\u0002\u0202\u0203\u0007\u0005\u0002\u0002\u0203\u0204\u00054\u001b",
    "\u0002\u0204\u0205\u0007\u0006\u0002\u0002\u0205]\u0003\u0002\u0002",
    "\u00021`bhlrz\u0085\u008e\u0092\u0096\u009a\u00a0\u00ad\u00b2\u00b6",
    "\u00c0\u00c8\u00d4\u00dd\u00e9\u00f2\u00f6\u00fb\u00ff\u0107\u010f\u0114",
    "\u012a\u0131\u013d\u0142\u0153\u0157\u017e\u0180\u0182\u018b\u0198\u019f",
    "\u01a9\u01b0\u01c1\u01c7\u01e0\u01ec\u01f6\u01fe"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", "'('", "')'", "':'", "','", "'^'", 
                     "'*'", "'/'", "'+'", "'-'", "'#'", "'['", "']'", "'->'", 
                     "'.'", "'namespace'", "'enum'", "'attribute'", "'struct'", 
                     "'readonly'", "'default'", "'var'", "'which is'", "'and'", 
                     "'or'", "'not'", "'>='", "'>'", "'<='", "'<'", "'=='", 
                     "'!='", "'is'", "'base'", "'of'", "'for'", "'name'", 
                     "'if'", "'elseif'", "'else'", "'foreach'", "'in'", 
                     "'injector'", "'injected'", "'arguments'", null, null, 
                     null, null, null, null, null, null, null, null, "'\n'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "NAMESPACE", 
                      "ENUM", "ATTRIBUTE", "STRUCT", "READONLY", "DEFAULT", 
                      "VAR", "WHICH_IS", "AND", "OR", "NOT", "GTE", "GT", 
                      "LTE", "LT", "EQ", "NEQ", "IS", "BASE", "OF", "FOR", 
                      "NAME", "IF", "ELSEIF", "ELSE", "FOREACH", "IN", "INJECTOR", 
                      "INJECTED", "ARGUMENTS", "StringLiteral", "BooleanLiteral", 
                      "NumberLiteral", "DecimalLiteral", "ATTRIBUTE_USAGE_NAME", 
                      "ID_START", "IDENTIFIER", "LABEL_NAME", "WS", "COMMENT", 
                      "NL" ];

var ruleNames =  [ "sourceFile", "block", "defenition", "namespaceDefinition", 
                   "enumDefinition", "enumCase", "structDefinition", "structWhichIsDefinition", 
                   "structBlockItem", "label", "labelableIdentifier", "labelableRefrenceName", 
                   "parameterBody", "parameters", "argumentBody", "arguments", 
                   "attributeUsage", "propertyDefinition", "propertyOptions", 
                   "propertyDefaultOption", "propertyInjectedOption", "propertyInjectorOption", 
                   "propertyArgumentsOption", "propertyReadonlyOption", 
                   "typeRefrence", "refrenceName", "genericTypeRefrence", 
                   "expression", "atom", "newStructExpression", "arrayExpression", 
                   "arrayMember", "namedCollectionExpression", "namedCollectionMember", 
                   "arrayForeachMember", "conditionalValueExpression", "conditionalValueExpressionTrueBranch", 
                   "conditionalValueExpressionElseBranch", "conditionalValueExpressionElseIfBranch", 
                   "primitiveExpression", "refrenceExpression", "labelRefrenceMemberAccessExpressionWithParameters", 
                   "labelRefrenceMemberAccessExpression", "typeStaticMemberAccessExpression", 
                   "nameDefinition", "nameOptions" ];

function ReactiveGrammerParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ReactiveGrammerParser.prototype = Object.create(antlr4.Parser.prototype);
ReactiveGrammerParser.prototype.constructor = ReactiveGrammerParser;

Object.defineProperty(ReactiveGrammerParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ReactiveGrammerParser.EOF = antlr4.Token.EOF;
ReactiveGrammerParser.T__0 = 1;
ReactiveGrammerParser.T__1 = 2;
ReactiveGrammerParser.T__2 = 3;
ReactiveGrammerParser.T__3 = 4;
ReactiveGrammerParser.T__4 = 5;
ReactiveGrammerParser.T__5 = 6;
ReactiveGrammerParser.T__6 = 7;
ReactiveGrammerParser.T__7 = 8;
ReactiveGrammerParser.T__8 = 9;
ReactiveGrammerParser.T__9 = 10;
ReactiveGrammerParser.T__10 = 11;
ReactiveGrammerParser.T__11 = 12;
ReactiveGrammerParser.T__12 = 13;
ReactiveGrammerParser.T__13 = 14;
ReactiveGrammerParser.T__14 = 15;
ReactiveGrammerParser.T__15 = 16;
ReactiveGrammerParser.NAMESPACE = 17;
ReactiveGrammerParser.ENUM = 18;
ReactiveGrammerParser.ATTRIBUTE = 19;
ReactiveGrammerParser.STRUCT = 20;
ReactiveGrammerParser.READONLY = 21;
ReactiveGrammerParser.DEFAULT = 22;
ReactiveGrammerParser.VAR = 23;
ReactiveGrammerParser.WHICH_IS = 24;
ReactiveGrammerParser.AND = 25;
ReactiveGrammerParser.OR = 26;
ReactiveGrammerParser.NOT = 27;
ReactiveGrammerParser.GTE = 28;
ReactiveGrammerParser.GT = 29;
ReactiveGrammerParser.LTE = 30;
ReactiveGrammerParser.LT = 31;
ReactiveGrammerParser.EQ = 32;
ReactiveGrammerParser.NEQ = 33;
ReactiveGrammerParser.IS = 34;
ReactiveGrammerParser.BASE = 35;
ReactiveGrammerParser.OF = 36;
ReactiveGrammerParser.FOR = 37;
ReactiveGrammerParser.NAME = 38;
ReactiveGrammerParser.IF = 39;
ReactiveGrammerParser.ELSEIF = 40;
ReactiveGrammerParser.ELSE = 41;
ReactiveGrammerParser.FOREACH = 42;
ReactiveGrammerParser.IN = 43;
ReactiveGrammerParser.INJECTOR = 44;
ReactiveGrammerParser.INJECTED = 45;
ReactiveGrammerParser.ARGUMENTS = 46;
ReactiveGrammerParser.StringLiteral = 47;
ReactiveGrammerParser.BooleanLiteral = 48;
ReactiveGrammerParser.NumberLiteral = 49;
ReactiveGrammerParser.DecimalLiteral = 50;
ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME = 51;
ReactiveGrammerParser.ID_START = 52;
ReactiveGrammerParser.IDENTIFIER = 53;
ReactiveGrammerParser.LABEL_NAME = 54;
ReactiveGrammerParser.WS = 55;
ReactiveGrammerParser.COMMENT = 56;
ReactiveGrammerParser.NL = 57;

ReactiveGrammerParser.RULE_sourceFile = 0;
ReactiveGrammerParser.RULE_block = 1;
ReactiveGrammerParser.RULE_defenition = 2;
ReactiveGrammerParser.RULE_namespaceDefinition = 3;
ReactiveGrammerParser.RULE_enumDefinition = 4;
ReactiveGrammerParser.RULE_enumCase = 5;
ReactiveGrammerParser.RULE_structDefinition = 6;
ReactiveGrammerParser.RULE_structWhichIsDefinition = 7;
ReactiveGrammerParser.RULE_structBlockItem = 8;
ReactiveGrammerParser.RULE_label = 9;
ReactiveGrammerParser.RULE_labelableIdentifier = 10;
ReactiveGrammerParser.RULE_labelableRefrenceName = 11;
ReactiveGrammerParser.RULE_parameterBody = 12;
ReactiveGrammerParser.RULE_parameters = 13;
ReactiveGrammerParser.RULE_argumentBody = 14;
ReactiveGrammerParser.RULE_arguments = 15;
ReactiveGrammerParser.RULE_attributeUsage = 16;
ReactiveGrammerParser.RULE_propertyDefinition = 17;
ReactiveGrammerParser.RULE_propertyOptions = 18;
ReactiveGrammerParser.RULE_propertyDefaultOption = 19;
ReactiveGrammerParser.RULE_propertyInjectedOption = 20;
ReactiveGrammerParser.RULE_propertyInjectorOption = 21;
ReactiveGrammerParser.RULE_propertyArgumentsOption = 22;
ReactiveGrammerParser.RULE_propertyReadonlyOption = 23;
ReactiveGrammerParser.RULE_typeRefrence = 24;
ReactiveGrammerParser.RULE_refrenceName = 25;
ReactiveGrammerParser.RULE_genericTypeRefrence = 26;
ReactiveGrammerParser.RULE_expression = 27;
ReactiveGrammerParser.RULE_atom = 28;
ReactiveGrammerParser.RULE_newStructExpression = 29;
ReactiveGrammerParser.RULE_arrayExpression = 30;
ReactiveGrammerParser.RULE_arrayMember = 31;
ReactiveGrammerParser.RULE_namedCollectionExpression = 32;
ReactiveGrammerParser.RULE_namedCollectionMember = 33;
ReactiveGrammerParser.RULE_arrayForeachMember = 34;
ReactiveGrammerParser.RULE_conditionalValueExpression = 35;
ReactiveGrammerParser.RULE_conditionalValueExpressionTrueBranch = 36;
ReactiveGrammerParser.RULE_conditionalValueExpressionElseBranch = 37;
ReactiveGrammerParser.RULE_conditionalValueExpressionElseIfBranch = 38;
ReactiveGrammerParser.RULE_primitiveExpression = 39;
ReactiveGrammerParser.RULE_refrenceExpression = 40;
ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpressionWithParameters = 41;
ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpression = 42;
ReactiveGrammerParser.RULE_typeStaticMemberAccessExpression = 43;
ReactiveGrammerParser.RULE_nameDefinition = 44;
ReactiveGrammerParser.RULE_nameOptions = 45;

function SourceFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_sourceFile;
    return this;
}

SourceFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceFileContext.prototype.constructor = SourceFileContext;

SourceFileContext.prototype.EOF = function() {
    return this.getToken(ReactiveGrammerParser.EOF, 0);
};

SourceFileContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

SourceFileContext.prototype.COMMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.COMMENT);
    } else {
        return this.getToken(ReactiveGrammerParser.COMMENT, i);
    }
};





ReactiveGrammerParser.SourceFileContext = SourceFileContext;

ReactiveGrammerParser.prototype.sourceFile = function() {

    var localctx = new SourceFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ReactiveGrammerParser.RULE_sourceFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReactiveGrammerParser.NAMESPACE) | (1 << ReactiveGrammerParser.ENUM) | (1 << ReactiveGrammerParser.STRUCT))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ReactiveGrammerParser.BASE - 35)) | (1 << (ReactiveGrammerParser.NAME - 35)) | (1 << (ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME - 35)) | (1 << (ReactiveGrammerParser.COMMENT - 35)) | (1 << (ReactiveGrammerParser.NL - 35)))) !== 0)) {
            this.state = 94;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ReactiveGrammerParser.NAMESPACE:
            case ReactiveGrammerParser.ENUM:
            case ReactiveGrammerParser.STRUCT:
            case ReactiveGrammerParser.BASE:
            case ReactiveGrammerParser.NAME:
            case ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME:
            case ReactiveGrammerParser.NL:
                this.state = 92;
                this.block();
                break;
            case ReactiveGrammerParser.COMMENT:
                this.state = 93;
                this.match(ReactiveGrammerParser.COMMENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 99;
        this.match(ReactiveGrammerParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.defenition = function() {
    return this.getTypedRuleContext(DefenitionContext,0);
};

BlockContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.NL);
    } else {
        return this.getToken(ReactiveGrammerParser.NL, i);
    }
};





ReactiveGrammerParser.BlockContext = BlockContext;

ReactiveGrammerParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ReactiveGrammerParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactiveGrammerParser.NL) {
            this.state = 101;
            this.match(ReactiveGrammerParser.NL);
        }

        this.state = 104;
        this.defenition();
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 105;
            this.match(ReactiveGrammerParser.NL);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefenitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_defenition;
    return this;
}

DefenitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefenitionContext.prototype.constructor = DefenitionContext;

DefenitionContext.prototype.namespaceDefinition = function() {
    return this.getTypedRuleContext(NamespaceDefinitionContext,0);
};

DefenitionContext.prototype.enumDefinition = function() {
    return this.getTypedRuleContext(EnumDefinitionContext,0);
};

DefenitionContext.prototype.structDefinition = function() {
    return this.getTypedRuleContext(StructDefinitionContext,0);
};

DefenitionContext.prototype.nameDefinition = function() {
    return this.getTypedRuleContext(NameDefinitionContext,0);
};




ReactiveGrammerParser.DefenitionContext = DefenitionContext;

ReactiveGrammerParser.prototype.defenition = function() {

    var localctx = new DefenitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ReactiveGrammerParser.RULE_defenition);
    try {
        this.state = 112;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactiveGrammerParser.NAMESPACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.namespaceDefinition();
            break;
        case ReactiveGrammerParser.ENUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.enumDefinition();
            break;
        case ReactiveGrammerParser.STRUCT:
        case ReactiveGrammerParser.BASE:
        case ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.structDefinition();
            break;
        case ReactiveGrammerParser.NAME:
            this.enterOuterAlt(localctx, 4);
            this.state = 111;
            this.nameDefinition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_namespaceDefinition;
    return this;
}

NamespaceDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceDefinitionContext.prototype.constructor = NamespaceDefinitionContext;

NamespaceDefinitionContext.prototype.NAMESPACE = function() {
    return this.getToken(ReactiveGrammerParser.NAMESPACE, 0);
};

NamespaceDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0);
};

NamespaceDefinitionContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




ReactiveGrammerParser.NamespaceDefinitionContext = NamespaceDefinitionContext;

ReactiveGrammerParser.prototype.namespaceDefinition = function() {

    var localctx = new NamespaceDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ReactiveGrammerParser.RULE_namespaceDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(ReactiveGrammerParser.NAMESPACE);
        this.state = 115;
        this.match(ReactiveGrammerParser.IDENTIFIER);
        this.state = 116;
        this.match(ReactiveGrammerParser.T__0);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReactiveGrammerParser.NAMESPACE) | (1 << ReactiveGrammerParser.ENUM) | (1 << ReactiveGrammerParser.STRUCT))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ReactiveGrammerParser.BASE - 35)) | (1 << (ReactiveGrammerParser.NAME - 35)) | (1 << (ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME - 35)) | (1 << (ReactiveGrammerParser.NL - 35)))) !== 0)) {
            this.state = 117;
            this.block();
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 123;
        this.match(ReactiveGrammerParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_enumDefinition;
    return this;
}

EnumDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumDefinitionContext.prototype.constructor = EnumDefinitionContext;

EnumDefinitionContext.prototype.ENUM = function() {
    return this.getToken(ReactiveGrammerParser.ENUM, 0);
};

EnumDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0);
};

EnumDefinitionContext.prototype.enumCase = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumCaseContext);
    } else {
        return this.getTypedRuleContext(EnumCaseContext,i);
    }
};




ReactiveGrammerParser.EnumDefinitionContext = EnumDefinitionContext;

ReactiveGrammerParser.prototype.enumDefinition = function() {

    var localctx = new EnumDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ReactiveGrammerParser.RULE_enumDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
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
            this.state = 128;
            this.enumCase();
            this.state = 131; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ReactiveGrammerParser.IDENTIFIER);
        this.state = 133;
        this.match(ReactiveGrammerParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumCaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_enumCase;
    return this;
}

EnumCaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumCaseContext.prototype.constructor = EnumCaseContext;

EnumCaseContext.prototype.IDENTIFIER = function() {
    return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0);
};




ReactiveGrammerParser.EnumCaseContext = EnumCaseContext;

ReactiveGrammerParser.prototype.enumCase = function() {

    var localctx = new EnumCaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ReactiveGrammerParser.RULE_enumCase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(ReactiveGrammerParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_structDefinition;
    return this;
}

StructDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructDefinitionContext.prototype.constructor = StructDefinitionContext;

StructDefinitionContext.prototype.STRUCT = function() {
    return this.getToken(ReactiveGrammerParser.STRUCT, 0);
};

StructDefinitionContext.prototype.labelableIdentifier = function() {
    return this.getTypedRuleContext(LabelableIdentifierContext,0);
};

StructDefinitionContext.prototype.attributeUsage = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeUsageContext);
    } else {
        return this.getTypedRuleContext(AttributeUsageContext,i);
    }
};

StructDefinitionContext.prototype.BASE = function() {
    return this.getToken(ReactiveGrammerParser.BASE, 0);
};

StructDefinitionContext.prototype.ATTRIBUTE = function() {
    return this.getToken(ReactiveGrammerParser.ATTRIBUTE, 0);
};

StructDefinitionContext.prototype.structWhichIsDefinition = function() {
    return this.getTypedRuleContext(StructWhichIsDefinitionContext,0);
};

StructDefinitionContext.prototype.structBlockItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StructBlockItemContext);
    } else {
        return this.getTypedRuleContext(StructBlockItemContext,i);
    }
};




ReactiveGrammerParser.StructDefinitionContext = StructDefinitionContext;

ReactiveGrammerParser.prototype.structDefinition = function() {

    var localctx = new StructDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ReactiveGrammerParser.RULE_structDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME) {
            this.state = 137;
            this.attributeUsage();
            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactiveGrammerParser.BASE) {
            this.state = 143;
            this.match(ReactiveGrammerParser.BASE);
        }

        this.state = 146;
        this.match(ReactiveGrammerParser.STRUCT);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactiveGrammerParser.ATTRIBUTE) {
            this.state = 147;
            this.match(ReactiveGrammerParser.ATTRIBUTE);
        }

        this.state = 150;
        this.labelableIdentifier();
        this.state = 152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactiveGrammerParser.WHICH_IS) {
            this.state = 151;
            this.structWhichIsDefinition();
        }

        this.state = 154;
        this.match(ReactiveGrammerParser.T__0);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ReactiveGrammerParser.NAME - 38)) | (1 << (ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME - 38)) | (1 << (ReactiveGrammerParser.IDENTIFIER - 38)) | (1 << (ReactiveGrammerParser.LABEL_NAME - 38)))) !== 0)) {
            this.state = 155;
            this.structBlockItem();
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 161;
        this.match(ReactiveGrammerParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructWhichIsDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_structWhichIsDefinition;
    return this;
}

StructWhichIsDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructWhichIsDefinitionContext.prototype.constructor = StructWhichIsDefinitionContext;

StructWhichIsDefinitionContext.prototype.WHICH_IS = function() {
    return this.getToken(ReactiveGrammerParser.WHICH_IS, 0);
};

StructWhichIsDefinitionContext.prototype.labelableRefrenceName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelableRefrenceNameContext);
    } else {
        return this.getTypedRuleContext(LabelableRefrenceNameContext,i);
    }
};

StructWhichIsDefinitionContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.AND);
    } else {
        return this.getToken(ReactiveGrammerParser.AND, i);
    }
};





ReactiveGrammerParser.StructWhichIsDefinitionContext = StructWhichIsDefinitionContext;

ReactiveGrammerParser.prototype.structWhichIsDefinition = function() {

    var localctx = new StructWhichIsDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ReactiveGrammerParser.RULE_structWhichIsDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(ReactiveGrammerParser.WHICH_IS);
        this.state = 176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.state = 164;
            this.labelableRefrenceName();
            break;

        case 2:
            this.state = 165;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 166;
            this.labelableRefrenceName();
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ReactiveGrammerParser.AND) {
                this.state = 167;
                this.match(ReactiveGrammerParser.AND);
                this.state = 168;
                this.labelableRefrenceName();
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 174;
            this.match(ReactiveGrammerParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructBlockItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_structBlockItem;
    return this;
}

StructBlockItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructBlockItemContext.prototype.constructor = StructBlockItemContext;

StructBlockItemContext.prototype.propertyDefinition = function() {
    return this.getTypedRuleContext(PropertyDefinitionContext,0);
};

StructBlockItemContext.prototype.nameDefinition = function() {
    return this.getTypedRuleContext(NameDefinitionContext,0);
};




ReactiveGrammerParser.StructBlockItemContext = StructBlockItemContext;

ReactiveGrammerParser.prototype.structBlockItem = function() {

    var localctx = new StructBlockItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ReactiveGrammerParser.RULE_structBlockItem);
    try {
        this.state = 180;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME:
        case ReactiveGrammerParser.IDENTIFIER:
        case ReactiveGrammerParser.LABEL_NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 178;
            this.propertyDefinition();
            break;
        case ReactiveGrammerParser.NAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 179;
            this.nameDefinition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.LABEL_NAME = function() {
    return this.getToken(ReactiveGrammerParser.LABEL_NAME, 0);
};




ReactiveGrammerParser.LabelContext = LabelContext;

ReactiveGrammerParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ReactiveGrammerParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(ReactiveGrammerParser.LABEL_NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelableIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_labelableIdentifier;
    return this;
}

LabelableIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelableIdentifierContext.prototype.constructor = LabelableIdentifierContext;

LabelableIdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0);
};

LabelableIdentifierContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};




ReactiveGrammerParser.LabelableIdentifierContext = LabelableIdentifierContext;

ReactiveGrammerParser.prototype.labelableIdentifier = function() {

    var localctx = new LabelableIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ReactiveGrammerParser.RULE_labelableIdentifier);
    try {
        this.state = 190;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactiveGrammerParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(ReactiveGrammerParser.IDENTIFIER);
            break;
        case ReactiveGrammerParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 186;
            this.label();
            this.state = 187;
            this.match(ReactiveGrammerParser.IDENTIFIER);
            this.state = 188;
            this.match(ReactiveGrammerParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelableRefrenceNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_labelableRefrenceName;
    return this;
}

LabelableRefrenceNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelableRefrenceNameContext.prototype.constructor = LabelableRefrenceNameContext;

LabelableRefrenceNameContext.prototype.refrenceName = function() {
    return this.getTypedRuleContext(RefrenceNameContext,0);
};

LabelableRefrenceNameContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};




ReactiveGrammerParser.LabelableRefrenceNameContext = LabelableRefrenceNameContext;

ReactiveGrammerParser.prototype.labelableRefrenceName = function() {

    var localctx = new LabelableRefrenceNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ReactiveGrammerParser.RULE_labelableRefrenceName);
    try {
        this.state = 198;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactiveGrammerParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 192;
            this.refrenceName();
            break;
        case ReactiveGrammerParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 194;
            this.label();
            this.state = 195;
            this.refrenceName();
            this.state = 196;
            this.match(ReactiveGrammerParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_parameterBody;
    return this;
}

ParameterBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterBodyContext.prototype.constructor = ParameterBodyContext;

ParameterBodyContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
    } else {
        return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
    }
};


ParameterBodyContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




ReactiveGrammerParser.ParameterBodyContext = ParameterBodyContext;

ReactiveGrammerParser.prototype.parameterBody = function() {

    var localctx = new ParameterBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ReactiveGrammerParser.RULE_parameterBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(ReactiveGrammerParser.IDENTIFIER);
        this.state = 201;
        this.match(ReactiveGrammerParser.T__4);
        this.state = 202;
        this.expression(0);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactiveGrammerParser.T__5) {
            this.state = 204;
            this.match(ReactiveGrammerParser.T__5);
            this.state = 205;
            this.match(ReactiveGrammerParser.IDENTIFIER);
            this.state = 206;
            this.match(ReactiveGrammerParser.T__4);
            this.state = 207;
            this.expression(0);
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameterBody = function() {
    return this.getTypedRuleContext(ParameterBodyContext,0);
};




ReactiveGrammerParser.ParametersContext = ParametersContext;

ReactiveGrammerParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ReactiveGrammerParser.RULE_parameters);
    try {
        this.state = 219;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 213;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 214;
            this.match(ReactiveGrammerParser.T__3);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 215;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 216;
            this.parameterBody();
            this.state = 217;
            this.match(ReactiveGrammerParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_argumentBody;
    return this;
}

ArgumentBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentBodyContext.prototype.constructor = ArgumentBodyContext;

ArgumentBodyContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
    } else {
        return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
    }
};


ArgumentBodyContext.prototype.typeRefrence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeRefrenceContext);
    } else {
        return this.getTypedRuleContext(TypeRefrenceContext,i);
    }
};




ReactiveGrammerParser.ArgumentBodyContext = ArgumentBodyContext;

ReactiveGrammerParser.prototype.argumentBody = function() {

    var localctx = new ArgumentBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ReactiveGrammerParser.RULE_argumentBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(ReactiveGrammerParser.IDENTIFIER);
        this.state = 222;
        this.match(ReactiveGrammerParser.T__4);
        this.state = 223;
        this.typeRefrence();
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactiveGrammerParser.T__5) {
            this.state = 225;
            this.match(ReactiveGrammerParser.T__5);
            this.state = 226;
            this.match(ReactiveGrammerParser.IDENTIFIER);
            this.state = 227;
            this.match(ReactiveGrammerParser.T__4);
            this.state = 228;
            this.typeRefrence();
            this.state = 233;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.argumentBody = function() {
    return this.getTypedRuleContext(ArgumentBodyContext,0);
};




ReactiveGrammerParser.ArgumentsContext = ArgumentsContext;

ReactiveGrammerParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ReactiveGrammerParser.RULE_arguments);
    try {
        this.state = 240;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 235;
            this.match(ReactiveGrammerParser.T__3);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 237;
            this.argumentBody();
            this.state = 238;
            this.match(ReactiveGrammerParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeUsageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_attributeUsage;
    return this;
}

AttributeUsageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeUsageContext.prototype.constructor = AttributeUsageContext;

AttributeUsageContext.prototype.ATTRIBUTE_USAGE_NAME = function() {
    return this.getToken(ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME, 0);
};

AttributeUsageContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};




ReactiveGrammerParser.AttributeUsageContext = AttributeUsageContext;

ReactiveGrammerParser.prototype.attributeUsage = function() {

    var localctx = new AttributeUsageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ReactiveGrammerParser.RULE_attributeUsage);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactiveGrammerParser.T__2) {
            this.state = 243;
            this.parameters();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_propertyDefinition;
    return this;
}

PropertyDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDefinitionContext.prototype.constructor = PropertyDefinitionContext;

PropertyDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0);
};

PropertyDefinitionContext.prototype.typeRefrence = function() {
    return this.getTypedRuleContext(TypeRefrenceContext,0);
};

PropertyDefinitionContext.prototype.attributeUsage = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeUsageContext);
    } else {
        return this.getTypedRuleContext(AttributeUsageContext,i);
    }
};

PropertyDefinitionContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

PropertyDefinitionContext.prototype.propertyOptions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyOptionsContext);
    } else {
        return this.getTypedRuleContext(PropertyOptionsContext,i);
    }
};




ReactiveGrammerParser.PropertyDefinitionContext = PropertyDefinitionContext;

ReactiveGrammerParser.prototype.propertyDefinition = function() {

    var localctx = new PropertyDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ReactiveGrammerParser.RULE_propertyDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactiveGrammerParser.ATTRIBUTE_USAGE_NAME) {
            this.state = 246;
            this.attributeUsage();
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactiveGrammerParser.LABEL_NAME) {
            this.state = 252;
            this.label();
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
        while(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (ReactiveGrammerParser.READONLY - 21)) | (1 << (ReactiveGrammerParser.DEFAULT - 21)) | (1 << (ReactiveGrammerParser.INJECTOR - 21)) | (1 << (ReactiveGrammerParser.INJECTED - 21)) | (1 << (ReactiveGrammerParser.ARGUMENTS - 21)))) !== 0)) {
            this.state = 258;
            this.propertyOptions();
            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyOptionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_propertyOptions;
    return this;
}

PropertyOptionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyOptionsContext.prototype.constructor = PropertyOptionsContext;

PropertyOptionsContext.prototype.propertyDefaultOption = function() {
    return this.getTypedRuleContext(PropertyDefaultOptionContext,0);
};

PropertyOptionsContext.prototype.propertyReadonlyOption = function() {
    return this.getTypedRuleContext(PropertyReadonlyOptionContext,0);
};

PropertyOptionsContext.prototype.propertyInjectedOption = function() {
    return this.getTypedRuleContext(PropertyInjectedOptionContext,0);
};

PropertyOptionsContext.prototype.propertyArgumentsOption = function() {
    return this.getTypedRuleContext(PropertyArgumentsOptionContext,0);
};

PropertyOptionsContext.prototype.propertyInjectorOption = function() {
    return this.getTypedRuleContext(PropertyInjectorOptionContext,0);
};




ReactiveGrammerParser.PropertyOptionsContext = PropertyOptionsContext;

ReactiveGrammerParser.prototype.propertyOptions = function() {

    var localctx = new PropertyOptionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ReactiveGrammerParser.RULE_propertyOptions);
    try {
        this.state = 269;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactiveGrammerParser.DEFAULT:
            this.enterOuterAlt(localctx, 1);
            this.state = 264;
            this.propertyDefaultOption();
            break;
        case ReactiveGrammerParser.READONLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 265;
            this.propertyReadonlyOption();
            break;
        case ReactiveGrammerParser.INJECTED:
            this.enterOuterAlt(localctx, 3);
            this.state = 266;
            this.propertyInjectedOption();
            break;
        case ReactiveGrammerParser.ARGUMENTS:
            this.enterOuterAlt(localctx, 4);
            this.state = 267;
            this.propertyArgumentsOption();
            break;
        case ReactiveGrammerParser.INJECTOR:
            this.enterOuterAlt(localctx, 5);
            this.state = 268;
            this.propertyInjectorOption();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyDefaultOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_propertyDefaultOption;
    return this;
}

PropertyDefaultOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDefaultOptionContext.prototype.constructor = PropertyDefaultOptionContext;

PropertyDefaultOptionContext.prototype.DEFAULT = function() {
    return this.getToken(ReactiveGrammerParser.DEFAULT, 0);
};

PropertyDefaultOptionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PropertyDefaultOptionContext.prototype.VAR = function() {
    return this.getToken(ReactiveGrammerParser.VAR, 0);
};




ReactiveGrammerParser.PropertyDefaultOptionContext = PropertyDefaultOptionContext;

ReactiveGrammerParser.prototype.propertyDefaultOption = function() {

    var localctx = new PropertyDefaultOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ReactiveGrammerParser.RULE_propertyDefaultOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(ReactiveGrammerParser.DEFAULT);
        this.state = 272;
        this.match(ReactiveGrammerParser.T__2);
        this.state = 274;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        if(la_===1) {
            this.state = 273;
            this.match(ReactiveGrammerParser.VAR);

        }
        this.state = 276;
        this.expression(0);
        this.state = 277;
        this.match(ReactiveGrammerParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyInjectedOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_propertyInjectedOption;
    return this;
}

PropertyInjectedOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyInjectedOptionContext.prototype.constructor = PropertyInjectedOptionContext;

PropertyInjectedOptionContext.prototype.INJECTED = function() {
    return this.getToken(ReactiveGrammerParser.INJECTED, 0);
};

PropertyInjectedOptionContext.prototype.typeRefrence = function() {
    return this.getTypedRuleContext(TypeRefrenceContext,0);
};




ReactiveGrammerParser.PropertyInjectedOptionContext = PropertyInjectedOptionContext;

ReactiveGrammerParser.prototype.propertyInjectedOption = function() {

    var localctx = new PropertyInjectedOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ReactiveGrammerParser.RULE_propertyInjectedOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(ReactiveGrammerParser.INJECTED);
        this.state = 280;
        this.match(ReactiveGrammerParser.T__2);
        this.state = 281;
        this.typeRefrence();
        this.state = 282;
        this.match(ReactiveGrammerParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyInjectorOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_propertyInjectorOption;
    return this;
}

PropertyInjectorOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyInjectorOptionContext.prototype.constructor = PropertyInjectorOptionContext;

PropertyInjectorOptionContext.prototype.INJECTOR = function() {
    return this.getToken(ReactiveGrammerParser.INJECTOR, 0);
};

PropertyInjectorOptionContext.prototype.typeRefrence = function() {
    return this.getTypedRuleContext(TypeRefrenceContext,0);
};




ReactiveGrammerParser.PropertyInjectorOptionContext = PropertyInjectorOptionContext;

ReactiveGrammerParser.prototype.propertyInjectorOption = function() {

    var localctx = new PropertyInjectorOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ReactiveGrammerParser.RULE_propertyInjectorOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(ReactiveGrammerParser.INJECTOR);
        this.state = 285;
        this.match(ReactiveGrammerParser.T__2);
        this.state = 286;
        this.typeRefrence();
        this.state = 287;
        this.match(ReactiveGrammerParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyArgumentsOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_propertyArgumentsOption;
    return this;
}

PropertyArgumentsOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyArgumentsOptionContext.prototype.constructor = PropertyArgumentsOptionContext;

PropertyArgumentsOptionContext.prototype.ARGUMENTS = function() {
    return this.getToken(ReactiveGrammerParser.ARGUMENTS, 0);
};

PropertyArgumentsOptionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};




ReactiveGrammerParser.PropertyArgumentsOptionContext = PropertyArgumentsOptionContext;

ReactiveGrammerParser.prototype.propertyArgumentsOption = function() {

    var localctx = new PropertyArgumentsOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ReactiveGrammerParser.RULE_propertyArgumentsOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.match(ReactiveGrammerParser.ARGUMENTS);
        this.state = 290;
        this.arguments();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyReadonlyOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_propertyReadonlyOption;
    return this;
}

PropertyReadonlyOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyReadonlyOptionContext.prototype.constructor = PropertyReadonlyOptionContext;

PropertyReadonlyOptionContext.prototype.READONLY = function() {
    return this.getToken(ReactiveGrammerParser.READONLY, 0);
};




ReactiveGrammerParser.PropertyReadonlyOptionContext = PropertyReadonlyOptionContext;

ReactiveGrammerParser.prototype.propertyReadonlyOption = function() {

    var localctx = new PropertyReadonlyOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ReactiveGrammerParser.RULE_propertyReadonlyOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(ReactiveGrammerParser.READONLY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeRefrenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_typeRefrence;
    return this;
}

TypeRefrenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeRefrenceContext.prototype.constructor = TypeRefrenceContext;

TypeRefrenceContext.prototype.genericTypeRefrence = function() {
    return this.getTypedRuleContext(GenericTypeRefrenceContext,0);
};

TypeRefrenceContext.prototype.refrenceName = function() {
    return this.getTypedRuleContext(RefrenceNameContext,0);
};




ReactiveGrammerParser.TypeRefrenceContext = TypeRefrenceContext;

ReactiveGrammerParser.prototype.typeRefrence = function() {

    var localctx = new TypeRefrenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ReactiveGrammerParser.RULE_typeRefrence);
    try {
        this.state = 296;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 294;
            this.genericTypeRefrence();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 295;
            this.refrenceName();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefrenceNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_refrenceName;
    return this;
}

RefrenceNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefrenceNameContext.prototype.constructor = RefrenceNameContext;

RefrenceNameContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
    } else {
        return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
    }
};





ReactiveGrammerParser.RefrenceNameContext = RefrenceNameContext;

ReactiveGrammerParser.prototype.refrenceName = function() {

    var localctx = new RefrenceNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ReactiveGrammerParser.RULE_refrenceName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.match(ReactiveGrammerParser.IDENTIFIER);
        this.state = 303;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 299;
                this.match(ReactiveGrammerParser.T__4);
                this.state = 300;
                this.match(ReactiveGrammerParser.IDENTIFIER); 
            }
            this.state = 305;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GenericTypeRefrenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_genericTypeRefrence;
    return this;
}

GenericTypeRefrenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GenericTypeRefrenceContext.prototype.constructor = GenericTypeRefrenceContext;

GenericTypeRefrenceContext.prototype.refrenceName = function() {
    return this.getTypedRuleContext(RefrenceNameContext,0);
};

GenericTypeRefrenceContext.prototype.OF = function() {
    return this.getToken(ReactiveGrammerParser.OF, 0);
};

GenericTypeRefrenceContext.prototype.typeRefrence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeRefrenceContext);
    } else {
        return this.getTypedRuleContext(TypeRefrenceContext,i);
    }
};

GenericTypeRefrenceContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.AND);
    } else {
        return this.getToken(ReactiveGrammerParser.AND, i);
    }
};





ReactiveGrammerParser.GenericTypeRefrenceContext = GenericTypeRefrenceContext;

ReactiveGrammerParser.prototype.genericTypeRefrence = function() {

    var localctx = new GenericTypeRefrenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ReactiveGrammerParser.RULE_genericTypeRefrence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        this.refrenceName();
        this.state = 307;
        this.match(ReactiveGrammerParser.OF);
        this.state = 320;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactiveGrammerParser.IDENTIFIER:
            this.state = 308;
            this.typeRefrence();
            break;
        case ReactiveGrammerParser.T__2:
            this.state = 309;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 310;
            this.typeRefrence();
            this.state = 315;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ReactiveGrammerParser.AND) {
                this.state = 311;
                this.match(ReactiveGrammerParser.AND);
                this.state = 312;
                this.typeRefrence();
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 318;
            this.match(ReactiveGrammerParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.NOT = function() {
    return this.getToken(ReactiveGrammerParser.NOT, 0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.LABEL_NAME = function() {
    return this.getToken(ReactiveGrammerParser.LABEL_NAME, 0);
};

ExpressionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ExpressionContext.prototype.LTE = function() {
    return this.getToken(ReactiveGrammerParser.LTE, 0);
};

ExpressionContext.prototype.LT = function() {
    return this.getToken(ReactiveGrammerParser.LT, 0);
};

ExpressionContext.prototype.GTE = function() {
    return this.getToken(ReactiveGrammerParser.GTE, 0);
};

ExpressionContext.prototype.GT = function() {
    return this.getToken(ReactiveGrammerParser.GT, 0);
};

ExpressionContext.prototype.EQ = function() {
    return this.getToken(ReactiveGrammerParser.EQ, 0);
};

ExpressionContext.prototype.NEQ = function() {
    return this.getToken(ReactiveGrammerParser.NEQ, 0);
};

ExpressionContext.prototype.OR = function() {
    return this.getToken(ReactiveGrammerParser.OR, 0);
};

ExpressionContext.prototype.AND = function() {
    return this.getToken(ReactiveGrammerParser.AND, 0);
};

ExpressionContext.prototype.IS = function() {
    return this.getToken(ReactiveGrammerParser.IS, 0);
};

ExpressionContext.prototype.typeRefrence = function() {
    return this.getTypedRuleContext(TypeRefrenceContext,0);
};



ReactiveGrammerParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 54;
    this.enterRecursionRule(localctx, 54, ReactiveGrammerParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.state = 323;
            this.match(ReactiveGrammerParser.NOT);
            this.state = 324;
            this.expression(4);
            break;

        case 2:
            this.state = 325;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 326;
            this.match(ReactiveGrammerParser.LABEL_NAME);
            this.state = 327;
            this.expression(0);
            this.state = 328;
            this.match(ReactiveGrammerParser.T__3);
            break;

        case 3:
            this.state = 330;
            this.match(ReactiveGrammerParser.T__2);
            this.state = 331;
            this.expression(0);
            this.state = 332;
            this.match(ReactiveGrammerParser.T__3);
            break;

        case 4:
            this.state = 337;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 334;
                    _la = this._input.LA(1);
                    if(!(_la===ReactiveGrammerParser.T__9 || _la===ReactiveGrammerParser.T__10)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    } 
                }
                this.state = 339;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
            }

            this.state = 340;
            this.atom();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 384;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 382;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 343;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 344;
                    this.match(ReactiveGrammerParser.T__6);
                    this.state = 345;
                    this.expression(17);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 346;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 347;
                    _la = this._input.LA(1);
                    if(!(_la===ReactiveGrammerParser.T__7 || _la===ReactiveGrammerParser.T__8)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 348;
                    this.expression(16);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 349;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 350;
                    _la = this._input.LA(1);
                    if(!(_la===ReactiveGrammerParser.T__9 || _la===ReactiveGrammerParser.T__10)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 351;
                    this.expression(15);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 352;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 353;
                    this.match(ReactiveGrammerParser.LTE);
                    this.state = 354;
                    this.expression(14);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 355;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 356;
                    this.match(ReactiveGrammerParser.LT);
                    this.state = 357;
                    this.expression(13);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 358;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 359;
                    this.match(ReactiveGrammerParser.GTE);
                    this.state = 360;
                    this.expression(12);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 361;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 362;
                    this.match(ReactiveGrammerParser.GT);
                    this.state = 363;
                    this.expression(11);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 364;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 365;
                    this.match(ReactiveGrammerParser.EQ);
                    this.state = 366;
                    this.expression(10);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 367;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 368;
                    this.match(ReactiveGrammerParser.NEQ);
                    this.state = 369;
                    this.expression(9);
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 370;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 371;
                    this.match(ReactiveGrammerParser.OR);
                    this.state = 372;
                    this.expression(7);
                    break;

                case 11:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 373;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 374;
                    this.match(ReactiveGrammerParser.AND);
                    this.state = 375;
                    this.expression(6);
                    break;

                case 12:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactiveGrammerParser.RULE_expression);
                    this.state = 376;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 377;
                    this.match(ReactiveGrammerParser.IS);
                    this.state = 380;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 378;
                        this.expression(0);
                        break;

                    case 2:
                        this.state = 379;
                        this.typeRefrence();
                        break;

                    }
                    break;

                } 
            }
            this.state = 386;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.primitiveExpression = function() {
    return this.getTypedRuleContext(PrimitiveExpressionContext,0);
};

AtomContext.prototype.refrenceExpression = function() {
    return this.getTypedRuleContext(RefrenceExpressionContext,0);
};

AtomContext.prototype.conditionalValueExpression = function() {
    return this.getTypedRuleContext(ConditionalValueExpressionContext,0);
};

AtomContext.prototype.newStructExpression = function() {
    return this.getTypedRuleContext(NewStructExpressionContext,0);
};

AtomContext.prototype.arrayExpression = function() {
    return this.getTypedRuleContext(ArrayExpressionContext,0);
};

AtomContext.prototype.namedCollectionExpression = function() {
    return this.getTypedRuleContext(NamedCollectionExpressionContext,0);
};




ReactiveGrammerParser.AtomContext = AtomContext;

ReactiveGrammerParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ReactiveGrammerParser.RULE_atom);
    try {
        this.state = 393;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 387;
            this.primitiveExpression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 388;
            this.refrenceExpression();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 389;
            this.conditionalValueExpression();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 390;
            this.newStructExpression();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 391;
            this.arrayExpression();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 392;
            this.namedCollectionExpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NewStructExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_newStructExpression;
    return this;
}

NewStructExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NewStructExpressionContext.prototype.constructor = NewStructExpressionContext;

NewStructExpressionContext.prototype.refrenceName = function() {
    return this.getTypedRuleContext(RefrenceNameContext,0);
};

NewStructExpressionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};




ReactiveGrammerParser.NewStructExpressionContext = NewStructExpressionContext;

ReactiveGrammerParser.prototype.newStructExpression = function() {

    var localctx = new NewStructExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ReactiveGrammerParser.RULE_newStructExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        this.refrenceName();
        this.state = 396;
        this.parameters();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_arrayExpression;
    return this;
}

ArrayExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayExpressionContext.prototype.constructor = ArrayExpressionContext;

ArrayExpressionContext.prototype.typeRefrence = function() {
    return this.getTypedRuleContext(TypeRefrenceContext,0);
};

ArrayExpressionContext.prototype.arrayMember = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayMemberContext);
    } else {
        return this.getTypedRuleContext(ArrayMemberContext,i);
    }
};




ReactiveGrammerParser.ArrayExpressionContext = ArrayExpressionContext;

ReactiveGrammerParser.prototype.arrayExpression = function() {

    var localctx = new ArrayExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ReactiveGrammerParser.RULE_arrayExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this.typeRefrence();
        this.state = 399;
        this.match(ReactiveGrammerParser.T__11);
        this.state = 400;
        this.match(ReactiveGrammerParser.T__12);
        this.state = 406;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 401;
                this.arrayMember();
                this.state = 402;
                this.match(ReactiveGrammerParser.T__5); 
            }
            this.state = 408;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
        }

        this.state = 409;
        this.match(ReactiveGrammerParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayMemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_arrayMember;
    return this;
}

ArrayMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayMemberContext.prototype.constructor = ArrayMemberContext;

ArrayMemberContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArrayMemberContext.prototype.arrayForeachMember = function() {
    return this.getTypedRuleContext(ArrayForeachMemberContext,0);
};




ReactiveGrammerParser.ArrayMemberContext = ArrayMemberContext;

ReactiveGrammerParser.prototype.arrayMember = function() {

    var localctx = new ArrayMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ReactiveGrammerParser.RULE_arrayMember);
    try {
        this.state = 413;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 411;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 412;
            this.arrayForeachMember();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamedCollectionExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_namedCollectionExpression;
    return this;
}

NamedCollectionExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedCollectionExpressionContext.prototype.constructor = NamedCollectionExpressionContext;

NamedCollectionExpressionContext.prototype.typeRefrence = function() {
    return this.getTypedRuleContext(TypeRefrenceContext,0);
};

NamedCollectionExpressionContext.prototype.namedCollectionMember = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NamedCollectionMemberContext);
    } else {
        return this.getTypedRuleContext(NamedCollectionMemberContext,i);
    }
};




ReactiveGrammerParser.NamedCollectionExpressionContext = NamedCollectionExpressionContext;

ReactiveGrammerParser.prototype.namedCollectionExpression = function() {

    var localctx = new NamedCollectionExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ReactiveGrammerParser.RULE_namedCollectionExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.typeRefrence();
        this.state = 416;
        this.match(ReactiveGrammerParser.T__11);
        this.state = 417;
        this.match(ReactiveGrammerParser.T__0);
        this.state = 423;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactiveGrammerParser.IDENTIFIER || _la===ReactiveGrammerParser.LABEL_NAME) {
            this.state = 418;
            this.namedCollectionMember();
            this.state = 419;
            this.match(ReactiveGrammerParser.T__5);
            this.state = 425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 426;
        this.match(ReactiveGrammerParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamedCollectionMemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_namedCollectionMember;
    return this;
}

NamedCollectionMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedCollectionMemberContext.prototype.constructor = NamedCollectionMemberContext;

NamedCollectionMemberContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

NamedCollectionMemberContext.prototype.refrenceName = function() {
    return this.getTypedRuleContext(RefrenceNameContext,0);
};

NamedCollectionMemberContext.prototype.labelRefrenceMemberAccessExpression = function() {
    return this.getTypedRuleContext(LabelRefrenceMemberAccessExpressionContext,0);
};




ReactiveGrammerParser.NamedCollectionMemberContext = NamedCollectionMemberContext;

ReactiveGrammerParser.prototype.namedCollectionMember = function() {

    var localctx = new NamedCollectionMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ReactiveGrammerParser.RULE_namedCollectionMember);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactiveGrammerParser.IDENTIFIER:
            this.state = 428;
            this.refrenceName();
            break;
        case ReactiveGrammerParser.LABEL_NAME:
            this.state = 429;
            this.labelRefrenceMemberAccessExpression();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 432;
        this.match(ReactiveGrammerParser.T__14);
        this.state = 433;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayForeachMemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_arrayForeachMember;
    return this;
}

ArrayForeachMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayForeachMemberContext.prototype.constructor = ArrayForeachMemberContext;

ArrayForeachMemberContext.prototype.FOREACH = function() {
    return this.getToken(ReactiveGrammerParser.FOREACH, 0);
};

ArrayForeachMemberContext.prototype.IDENTIFIER = function() {
    return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0);
};

ArrayForeachMemberContext.prototype.IN = function() {
    return this.getToken(ReactiveGrammerParser.IN, 0);
};

ArrayForeachMemberContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




ReactiveGrammerParser.ArrayForeachMemberContext = ArrayForeachMemberContext;

ReactiveGrammerParser.prototype.arrayForeachMember = function() {

    var localctx = new ArrayForeachMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ReactiveGrammerParser.RULE_arrayForeachMember);
    try {
        this.enterOuterAlt(localctx, 1);
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
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalValueExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_conditionalValueExpression;
    return this;
}

ConditionalValueExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalValueExpressionContext.prototype.constructor = ConditionalValueExpressionContext;

ConditionalValueExpressionContext.prototype.conditionalValueExpressionTrueBranch = function() {
    return this.getTypedRuleContext(ConditionalValueExpressionTrueBranchContext,0);
};

ConditionalValueExpressionContext.prototype.conditionalValueExpressionElseIfBranch = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionalValueExpressionElseIfBranchContext);
    } else {
        return this.getTypedRuleContext(ConditionalValueExpressionElseIfBranchContext,i);
    }
};

ConditionalValueExpressionContext.prototype.conditionalValueExpressionElseBranch = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionalValueExpressionElseBranchContext);
    } else {
        return this.getTypedRuleContext(ConditionalValueExpressionElseBranchContext,i);
    }
};




ReactiveGrammerParser.ConditionalValueExpressionContext = ConditionalValueExpressionContext;

ReactiveGrammerParser.prototype.conditionalValueExpression = function() {

    var localctx = new ConditionalValueExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ReactiveGrammerParser.RULE_conditionalValueExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.conditionalValueExpressionTrueBranch();
        this.state = 447;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 444;
                this.conditionalValueExpressionElseIfBranch(); 
            }
            this.state = 449;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
        }

        this.state = 453;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 450;
                this.conditionalValueExpressionElseBranch(); 
            }
            this.state = 455;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalValueExpressionTrueBranchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_conditionalValueExpressionTrueBranch;
    return this;
}

ConditionalValueExpressionTrueBranchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalValueExpressionTrueBranchContext.prototype.constructor = ConditionalValueExpressionTrueBranchContext;

ConditionalValueExpressionTrueBranchContext.prototype.IF = function() {
    return this.getToken(ReactiveGrammerParser.IF, 0);
};

ConditionalValueExpressionTrueBranchContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




ReactiveGrammerParser.ConditionalValueExpressionTrueBranchContext = ConditionalValueExpressionTrueBranchContext;

ReactiveGrammerParser.prototype.conditionalValueExpressionTrueBranch = function() {

    var localctx = new ConditionalValueExpressionTrueBranchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ReactiveGrammerParser.RULE_conditionalValueExpressionTrueBranch);
    try {
        this.enterOuterAlt(localctx, 1);
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
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalValueExpressionElseBranchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_conditionalValueExpressionElseBranch;
    return this;
}

ConditionalValueExpressionElseBranchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalValueExpressionElseBranchContext.prototype.constructor = ConditionalValueExpressionElseBranchContext;

ConditionalValueExpressionElseBranchContext.prototype.ELSE = function() {
    return this.getToken(ReactiveGrammerParser.ELSE, 0);
};

ConditionalValueExpressionElseBranchContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};




ReactiveGrammerParser.ConditionalValueExpressionElseBranchContext = ConditionalValueExpressionElseBranchContext;

ReactiveGrammerParser.prototype.conditionalValueExpressionElseBranch = function() {

    var localctx = new ConditionalValueExpressionElseBranchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ReactiveGrammerParser.RULE_conditionalValueExpressionElseBranch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this.match(ReactiveGrammerParser.ELSE);
        this.state = 463;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalValueExpressionElseIfBranchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_conditionalValueExpressionElseIfBranch;
    return this;
}

ConditionalValueExpressionElseIfBranchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalValueExpressionElseIfBranchContext.prototype.constructor = ConditionalValueExpressionElseIfBranchContext;

ConditionalValueExpressionElseIfBranchContext.prototype.ELSEIF = function() {
    return this.getToken(ReactiveGrammerParser.ELSEIF, 0);
};

ConditionalValueExpressionElseIfBranchContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




ReactiveGrammerParser.ConditionalValueExpressionElseIfBranchContext = ConditionalValueExpressionElseIfBranchContext;

ReactiveGrammerParser.prototype.conditionalValueExpressionElseIfBranch = function() {

    var localctx = new ConditionalValueExpressionElseIfBranchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ReactiveGrammerParser.RULE_conditionalValueExpressionElseIfBranch);
    try {
        this.enterOuterAlt(localctx, 1);
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
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_primitiveExpression;
    return this;
}

PrimitiveExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveExpressionContext.prototype.constructor = PrimitiveExpressionContext;

PrimitiveExpressionContext.prototype.StringLiteral = function() {
    return this.getToken(ReactiveGrammerParser.StringLiteral, 0);
};

PrimitiveExpressionContext.prototype.BooleanLiteral = function() {
    return this.getToken(ReactiveGrammerParser.BooleanLiteral, 0);
};

PrimitiveExpressionContext.prototype.NumberLiteral = function() {
    return this.getToken(ReactiveGrammerParser.NumberLiteral, 0);
};




ReactiveGrammerParser.PrimitiveExpressionContext = PrimitiveExpressionContext;

ReactiveGrammerParser.prototype.primitiveExpression = function() {

    var localctx = new PrimitiveExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ReactiveGrammerParser.RULE_primitiveExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (ReactiveGrammerParser.StringLiteral - 47)) | (1 << (ReactiveGrammerParser.BooleanLiteral - 47)) | (1 << (ReactiveGrammerParser.NumberLiteral - 47)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefrenceExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_refrenceExpression;
    return this;
}

RefrenceExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefrenceExpressionContext.prototype.constructor = RefrenceExpressionContext;

RefrenceExpressionContext.prototype.refrenceName = function() {
    return this.getTypedRuleContext(RefrenceNameContext,0);
};

RefrenceExpressionContext.prototype.typeStaticMemberAccessExpression = function() {
    return this.getTypedRuleContext(TypeStaticMemberAccessExpressionContext,0);
};

RefrenceExpressionContext.prototype.labelRefrenceMemberAccessExpression = function() {
    return this.getTypedRuleContext(LabelRefrenceMemberAccessExpressionContext,0);
};

RefrenceExpressionContext.prototype.labelRefrenceMemberAccessExpressionWithParameters = function() {
    return this.getTypedRuleContext(LabelRefrenceMemberAccessExpressionWithParametersContext,0);
};




ReactiveGrammerParser.RefrenceExpressionContext = RefrenceExpressionContext;

ReactiveGrammerParser.prototype.refrenceExpression = function() {

    var localctx = new RefrenceExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ReactiveGrammerParser.RULE_refrenceExpression);
    try {
        this.state = 478;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 474;
            this.refrenceName();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 475;
            this.typeStaticMemberAccessExpression();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 476;
            this.labelRefrenceMemberAccessExpression();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 477;
            this.labelRefrenceMemberAccessExpressionWithParameters();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelRefrenceMemberAccessExpressionWithParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpressionWithParameters;
    return this;
}

LabelRefrenceMemberAccessExpressionWithParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelRefrenceMemberAccessExpressionWithParametersContext.prototype.constructor = LabelRefrenceMemberAccessExpressionWithParametersContext;

LabelRefrenceMemberAccessExpressionWithParametersContext.prototype.labelRefrenceMemberAccessExpression = function() {
    return this.getTypedRuleContext(LabelRefrenceMemberAccessExpressionContext,0);
};

LabelRefrenceMemberAccessExpressionWithParametersContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};




ReactiveGrammerParser.LabelRefrenceMemberAccessExpressionWithParametersContext = LabelRefrenceMemberAccessExpressionWithParametersContext;

ReactiveGrammerParser.prototype.labelRefrenceMemberAccessExpressionWithParameters = function() {

    var localctx = new LabelRefrenceMemberAccessExpressionWithParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpressionWithParameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 480;
        this.labelRefrenceMemberAccessExpression();
        this.state = 481;
        this.parameters();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelRefrenceMemberAccessExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpression;
    return this;
}

LabelRefrenceMemberAccessExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelRefrenceMemberAccessExpressionContext.prototype.constructor = LabelRefrenceMemberAccessExpressionContext;

LabelRefrenceMemberAccessExpressionContext.prototype.LABEL_NAME = function() {
    return this.getToken(ReactiveGrammerParser.LABEL_NAME, 0);
};

LabelRefrenceMemberAccessExpressionContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
    } else {
        return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
    }
};





ReactiveGrammerParser.LabelRefrenceMemberAccessExpressionContext = LabelRefrenceMemberAccessExpressionContext;

ReactiveGrammerParser.prototype.labelRefrenceMemberAccessExpression = function() {

    var localctx = new LabelRefrenceMemberAccessExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, ReactiveGrammerParser.RULE_labelRefrenceMemberAccessExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 483;
        this.match(ReactiveGrammerParser.LABEL_NAME);
        this.state = 484;
        this.match(ReactiveGrammerParser.T__15);
        this.state = 485;
        this.match(ReactiveGrammerParser.IDENTIFIER);
        this.state = 490;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 486;
                this.match(ReactiveGrammerParser.T__15);
                this.state = 487;
                this.match(ReactiveGrammerParser.IDENTIFIER); 
            }
            this.state = 492;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeStaticMemberAccessExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_typeStaticMemberAccessExpression;
    return this;
}

TypeStaticMemberAccessExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeStaticMemberAccessExpressionContext.prototype.constructor = TypeStaticMemberAccessExpressionContext;

TypeStaticMemberAccessExpressionContext.prototype.typeRefrence = function() {
    return this.getTypedRuleContext(TypeRefrenceContext,0);
};

TypeStaticMemberAccessExpressionContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactiveGrammerParser.IDENTIFIER);
    } else {
        return this.getToken(ReactiveGrammerParser.IDENTIFIER, i);
    }
};





ReactiveGrammerParser.TypeStaticMemberAccessExpressionContext = TypeStaticMemberAccessExpressionContext;

ReactiveGrammerParser.prototype.typeStaticMemberAccessExpression = function() {

    var localctx = new TypeStaticMemberAccessExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, ReactiveGrammerParser.RULE_typeStaticMemberAccessExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 493;
        this.typeRefrence();
        this.state = 494;
        this.match(ReactiveGrammerParser.T__15);
        this.state = 495;
        this.match(ReactiveGrammerParser.IDENTIFIER);
        this.state = 500;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 496;
                this.match(ReactiveGrammerParser.T__15);
                this.state = 497;
                this.match(ReactiveGrammerParser.IDENTIFIER); 
            }
            this.state = 502;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_nameDefinition;
    return this;
}

NameDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameDefinitionContext.prototype.constructor = NameDefinitionContext;

NameDefinitionContext.prototype.NAME = function() {
    return this.getToken(ReactiveGrammerParser.NAME, 0);
};

NameDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(ReactiveGrammerParser.IDENTIFIER, 0);
};

NameDefinitionContext.prototype.nameOptions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameOptionsContext);
    } else {
        return this.getTypedRuleContext(NameOptionsContext,i);
    }
};




ReactiveGrammerParser.NameDefinitionContext = NameDefinitionContext;

ReactiveGrammerParser.prototype.nameDefinition = function() {

    var localctx = new NameDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, ReactiveGrammerParser.RULE_nameDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 503;
        this.match(ReactiveGrammerParser.NAME);
        this.state = 504;
        this.match(ReactiveGrammerParser.IDENTIFIER);
        this.state = 508;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactiveGrammerParser.FOR) {
            this.state = 505;
            this.nameOptions();
            this.state = 510;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameOptionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactiveGrammerParser.RULE_nameOptions;
    return this;
}

NameOptionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameOptionsContext.prototype.constructor = NameOptionsContext;

NameOptionsContext.prototype.FOR = function() {
    return this.getToken(ReactiveGrammerParser.FOR, 0);
};

NameOptionsContext.prototype.refrenceName = function() {
    return this.getTypedRuleContext(RefrenceNameContext,0);
};




ReactiveGrammerParser.NameOptionsContext = NameOptionsContext;

ReactiveGrammerParser.prototype.nameOptions = function() {

    var localctx = new NameOptionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ReactiveGrammerParser.RULE_nameOptions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        this.match(ReactiveGrammerParser.FOR);
        this.state = 512;
        this.match(ReactiveGrammerParser.T__2);
        this.state = 513;
        this.refrenceName();
        this.state = 514;
        this.match(ReactiveGrammerParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ReactiveGrammerParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 27:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ReactiveGrammerParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
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
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ReactiveGrammerParser = ReactiveGrammerParser;
