import React from "react";
import "./App.css";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ReactiveGrammerLexer } from "./Parser/ReactiveGrammerLexer";
import { ReactiveGrammerParser, StructBlockItemContext, NameDefinitionContext } from "./Parser/ReactiveGrammerParser";
import { ReactiveGrammerListener } from "./Parser/ReactiveGrammerListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

class EnterFunctionListener implements ReactiveGrammerListener {
  constructor(private logger: (v: string) => void) {}

  enterNameDefinition(ctx: NameDefinitionContext) {
    const name = ctx.IDENTIFIER();
    const options = ctx.nameOptions().map(x => x.refrenceName().text);
    this.logger("name def->" + name + ' ===' + options);
  }

  enterStructBlockItem(ctx: StructBlockItemContext) {
    this.logger("struct block starts at " + ctx._start.line);
  }
}

const App: React.FC = () => {
  const [logValue, setLogValue] = React.useState("");

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

      let tree = parser.sourceFile();

      ParseTreeWalker.DEFAULT.walk<ReactiveGrammerListener>(listener, tree);
    } catch (e) {
      setLogValue("error :" + e);
    }
    const duration = performance.now() - start;
    logger(`========== took ${duration}ms to parse and walk`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <textarea style={{ width: 500, minHeight: 400 }} onChange={v => update(v.target.value)} />
        <textarea style={{ width: 500, minHeight: 300, marginTop: 20, opacity: 0.6 }} readOnly value={logValue} />
      </header>
    </div>
  );
};

export default App;
