import React from "react";
import "./App.css";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ReactiveGrammerLexer } from "./Parser/ReactiveGrammerLexer";
import { ReactiveGrammerParser } from "./Parser/ReactiveGrammerParser";
import { debounce } from "lodash";
import AceEditor from "react-ace";
import "./ACEReactiveMode";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-prompt";
// import { example4 as example } from "./example.json";
import { ReactiveListener } from "./Solver/Listener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ReactiveGrammerListener } from "./Parser/ReactiveGrammerListener";
import { Solver } from "./Solver/Solver";
import { StructDependencyAnalyzer } from "./Solver/Analyzer/StructDependencyAnalyzer";
import { StructPropertyDependencyAnalyzer } from "./Solver/Analyzer/StructPropertyDependencyAnalyzer";
import { NodeInstance } from "./Solver/NodeInstance";
import { BehaviorSubject } from "rxjs";
const example = `
struct ($this Test) {
  propIn: Core:String
  prop1: Core:String default ("Hi !" + $this.propIn)
  prop2: Core:String default ("test" + ($lbl $this.prop1) + "test" + $this.prop1)
  prop3: Core:Number default (
    Dep(propDepIn: $this.prop1)
  )
  hi: Any default (
    if ($this.prop1 == "Hi !propInValue")
        "Hi !"
    else
        "Hello"
  )
}

struct ($this Dep) {
  propDep1: Core:String default ("from input:" + $this.propDepIn)
  propDepIn: Core:String
}
`;
const App: React.FC = () => {
  const [logValue, setLogValue] = React.useState("");
  const [errorValue, setErrorValue] = React.useState("");
  const [value, setValue] = React.useState(example);
  const [solver, setSolver] = React.useState<Solver | null>(null);

  function logger(value: string) {
    setLogValue(v => `${v}\n${value}`);
  }

  const listener = React.useMemo(() => {
    return new ReactiveListener(logger, s => setSolver(s));
  }, []);

  React.useEffect(() => update(value), []); // eslint-disable-line

  function update(code: string) {
    const start = performance.now();
    try {
      setLogValue("");
      // Create the lexer and parser
      let inputStream = new ANTLRInputStream(code);
      let lexer = new ReactiveGrammerLexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new ReactiveGrammerParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
          setErrorValue(
            `
error at ${line}-${column}
${msg}
Symbol: ${offendingSymbol}
${e}
            `
          );
        }
      });
      let tree = parser.sourceFile();

      if (parser.numberOfSyntaxErrors === 0) {
        setErrorValue("");
      }

      ParseTreeWalker.DEFAULT.walk<ReactiveGrammerListener>(listener, tree);
    } catch (e) {
      setLogValue("error :" + e);
    }
    const duration = performance.now() - start;
    logger(`========== took ${duration}ms to parse and walk`);
  }

  const updateHandler = React.useCallback(debounce(update, 100), []);

  function makeAnalyzers() {
    if (solver == null) return null;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() => {
            logger(new StructDependencyAnalyzer(solver.root).analyze());
          }}
        >
          {"Analyzer:StructDependencyAnalyzer"}
        </button>
        <button
          onClick={() => {
            new StructPropertyDependencyAnalyzer(solver.getStructByName("Test")).analyze();
          }}
        >
          {"Analyzer:StructPropertyDependencyAnalyzer"}
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <AceEditor
          mode="reactive-mode"
          theme="dracula"
          onChange={v => {
            setValue(v);
            updateHandler(v);
          }}
          value={value}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: 1000 }}
        />
        {makeAnalyzers()}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <textarea style={{ width: 600, minHeight: 250, marginTop: 20, opacity: 0.6 }} readOnly value={logValue} />
          <textarea style={{ width: 200, minHeight: 250, marginTop: 20, opacity: 0.6 }} readOnly value={errorValue} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {solver != null &&
            solver.getStructFullNames().map((structFullName, i) => (
              <button
                onClick={() => {
                  const _nodeInstance = solver.instantiateStruct(structFullName) as NodeInstance;
                  _nodeInstance.init({
                    propIn: new BehaviorSubject<string>("propInValue")
                  });
                  logInstance(_nodeInstance);
                  console.log(_nodeInstance);
                }}
                key={i}
              >
                {structFullName}
              </button>
            ))}
        </div>
      </header>
    </div>
  );
};

function logInstance(node: NodeInstance) {
  node.tree.dependecies
    .forEach((x, i) => {
      if (x.instance instanceof NodeInstance) {
        logInstance(x.instance!);
      } else {
        x.instance!.subscribe(p => console.log(i, (x.node.refrence.value as any).name, p));
      }
    });
}

export default App;
