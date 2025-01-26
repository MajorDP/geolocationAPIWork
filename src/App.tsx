import { useState } from "react";
import SearchInput from "./components/SearchInput";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState<[] | null>(null);

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-slate-300 to-blue-400 flex items-center justify-center">
      {result === null ? (
        <SearchInput setResult={setResult} />
      ) : (
        <Result result={result} setResult={setResult} />
      )}
    </div>
  );
}

export default App;
