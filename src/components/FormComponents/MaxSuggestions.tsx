import { ISuggestionsState } from "../../interfaces/Suggestions";

interface IProps {
  suggestionsState: ISuggestionsState;
  setSuggestionsState: React.Dispatch<React.SetStateAction<ISuggestionsState>>;
}

function MaxSuggestions({ suggestionsState, setSuggestionsState }: IProps) {
  return (
    <label className="lg:ml-15 flex flex-col sm:flex-row items-center sm:w-fit">
      <span className="mr-3 text-center sm:text-start mb-2 sm:mb-0 text-sm">
        Макс. бр. предложения
      </span>
      <input
        type="number"
        className="w-21 px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md shadow-md focus:ring-4 focus:ring-purple-500 transition-all duration-300"
        min={1}
        value={suggestionsState.maxSuggestions}
        onChange={(e) => {
          if (e.target.value.startsWith("0")) {
            setSuggestionsState((prevState: ISuggestionsState) => ({
              ...prevState,
              maxSuggestions: 1,
            }));
          } else {
            setSuggestionsState((prevState: ISuggestionsState) => ({
              ...prevState,
              maxSuggestions: Number(e.target.value),
            }));
          }
        }}
      />
    </label>
  );
}

export default MaxSuggestions;
