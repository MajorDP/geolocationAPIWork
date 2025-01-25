import { IAddress } from "../interfaces/Results";
import NotFound from "./NotFound";
import ResultCard from "./ResultCard";

interface IProps {
  result: [];
  setResult: React.Dispatch<React.SetStateAction<[] | null>>;
}

function Result({ result, setResult }: IProps) {
  return (
    <div className="w-full xl:w-[90%] h-full sm:h-[90%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 sm:rounded-lg p-8 shadow-2xl">
      <div className="flex justify-end flex-row mb-6">
        <button
          className="text-red-400 flex flex-row cursor-pointer"
          onClick={() => setResult(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="ml-2 sm:text-base text-[16px]">Назад</span>
        </button>
      </div>
      {result.length > 0 ? (
        <>
          <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white mb-6">
            Намерени адреси
          </h1>
          <ul className="bg-slate-700 w-full sm:w-[60%] m-auto max-h-[70%] overflow-y-scroll rounded-lg p-4">
            {result.map((res: IAddress, index: number) => (
              <ResultCard result={res} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <NotFound message="Няма намерени адреси" />
      )}
    </div>
  );
}

export default Result;
