import React from "react";
import "./App.css";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ReactiveGrammerLexer } from "./Parser/ReactiveGrammerLexer";
import { ReactiveGrammerParser, StructBlockItemContext, NameDefinitionContext } from "./Parser/ReactiveGrammerParser";
import { ReactiveGrammerListener } from "./Parser/ReactiveGrammerListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { debounce } from "lodash";
import AceEditor from "react-ace";
import "./ACEReactiveMode";
import "ace-builds/src-noconflict/theme-dracula";

class EnterFunctionListener implements ReactiveGrammerListener {
  constructor(private logger: (v: string) => void) {}

  enterNameDefinition(ctx: NameDefinitionContext) {
    const name = ctx.IDENTIFIER();
    const options = ctx.nameOptions().map(x => x.refrenceName().text);
    this.logger("name def->" + name + " ===" + options);
  }

  enterStructBlockItem(ctx: StructBlockItemContext) {
    this.logger("struct block starts at " + ctx._start.line);
  }
}

const App: React.FC = () => {
  const [logValue, setLogValue] = React.useState("");
  const [errorValue, setErrorValue] = React.useState("");
  const [value, setValue] = React.useState("");

  function logger(value: string) {
    setLogValue(v => `${v}\n${value}`);
  }

  const listener = React.useMemo(() => {
    return new EnterFunctionListener(logger);
  }, []);

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

  return (
    <div className="App">
      <header className="App-header">
        <AceEditor
          mode="reactive-mode"
          theme="dracula"
          onChange={v => {
            setValue(v);
            updateHandler(v)
          }}
          value={value}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: 1000 }}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <textarea style={{ width: 600, minHeight: 300, marginTop: 20, opacity: 0.6 }} readOnly value={logValue} />
          <textarea style={{ width: 600, minHeight: 300, marginTop: 20, opacity: 0.6 }} readOnly value={errorValue} />
        </div>
      </header>
    </div>
  );
};

export default App;
