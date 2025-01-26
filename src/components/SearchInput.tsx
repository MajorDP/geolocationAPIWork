import { useEffect } from "react";
import SearchForm from "./FormComponents/SearchForm";

interface IProps {
  setResult: React.Dispatch<React.SetStateAction<[] | null>>;
}

function SearchInput({ setResult }: IProps) {
  useEffect(() => {
    document.title = "Търси адреси";
  }, []);
  return (
    <div className="w-full xl:w-[90%] h-full sm:h-[90%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 sm:rounded-lg p-8 shadow-2xl">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white mb-6">
        Търси Адреси
      </h1>
      <SearchForm setResult={setResult} />
    </div>
  );
}

export default SearchInput;
