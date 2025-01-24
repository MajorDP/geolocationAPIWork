import { useState } from "react";
import { ISuggestions, ISuggestionsState } from "../../interfaces/Suggestions";
import { getAddresses, getSuggestions } from "../../api/services";
import MaxSuggestions from "./MaxSuggestions";
import ClosestToLocation from "./ClosestToLocation";
import CountrySelector from "./CountrySelector";
import CategorySelector from "./CategorySelector";

interface IProps {
  setResult: React.Dispatch<React.SetStateAction<[] | null>>;
}

function SearchForm({ setResult }: IProps) {
  const [suggestions, setSuggestions] = useState<ISuggestions[] | []>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [suggestionsState, setSuggestionsState] = useState<ISuggestionsState>({
    isOpen: false,
    isClose: false,
    maxSuggestions: 10,
    countryCode: "",
    category: "",
  });

  const onChange = async (searchValue: string) => {
    setSearchValue(searchValue);
    if (searchValue.trim() === "") {
      setSuggestionsState((prevState) => ({ ...prevState, isOpen: false }));
      return;
    }

    if (suggestionsState.isClose && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        const location = `${lng},${lat}`;
        const data = await getSuggestions(
          searchValue,
          location,
          suggestionsState.maxSuggestions,
          suggestionsState.countryCode,
          suggestionsState.category
        );
        setSuggestions(data);
      });
    } else {
      const data = await getSuggestions(
        searchValue,
        null,
        suggestionsState.maxSuggestions,
        suggestionsState.countryCode,
        suggestionsState.category
      );
      setSuggestions(data);
    }
    setSuggestionsState((prevState) => ({ ...prevState, isOpen: true }));
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    searchValue: string
  ) => {
    e.preventDefault();
    if (suggestionsState.isClose && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        const location = `${lng},${lat}`;
        const data = await getAddresses(
          searchValue,
          location,
          suggestionsState.maxSuggestions,
          suggestionsState.countryCode,
          suggestionsState.category
        );
        setResult(data);
      });
    } else {
      const data = await getAddresses(
        searchValue,
        null,
        suggestionsState.maxSuggestions,
        suggestionsState.countryCode,
        suggestionsState.category
      );
      setResult(data);
    }
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e, searchValue)}
      className="w-full flex flex-col items-center"
      onClick={() =>
        setSuggestionsState((prevState) => ({ ...prevState, isOpen: false }))
      }
    >
      <div className="relative w-full max-w-lg">
        <input
          id="searchValue"
          placeholder="Велико Търново..."
          className="w-full px-5 py-3 text-lg bg-gray-800 text-white border border-gray-700 rounded-md shadow-md focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
          value={searchValue}
          onChange={(e) => onChange(e.target.value)}
        />
        {suggestions.length > 0 && suggestionsState.isOpen && (
          <div className="absolute bg-gray-800 w-full max-h-60 mt-2 rounded-lg shadow-lg border border-gray-700 overflow-y-auto transition-all duration-300 ease-in-out">
            {suggestions.map((suggestion, index) => (
              <p
                key={index}
                className="px-4 py-2 text-white hover:bg-blue-600 hover:text-gray-100 cursor-pointer transition-all duration-200"
                onClick={() => {
                  setSearchValue(suggestion.text);
                  setSuggestionsState((prevState) => ({
                    ...prevState,
                    isOpen: false,
                  }));
                }}
              >
                {suggestion.text}
              </p>
            ))}
          </div>
        )}
      </div>
      <button className="mt-5 px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white text-[24px] border font-medium border-white rounded-md  hover:border-purple-500 duration-300 cursor-pointer hover:scale-105">
        Търсене
      </button>
      <h2 className="mt-20 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white">
        Настройки за търсене:
      </h2>
      <div className="pt-10 flex flex-col w-full sm:grid sm:grid-cols-2 sm:m-auto sm:w-[60%] justify-items-between items-center justify-center gap-6 text-transparent bg-clip-text  bg-gradient-to-r from-slate-300 to-white">
        <MaxSuggestions
          suggestionsState={suggestionsState}
          setSuggestionsState={setSuggestionsState}
        />
        <ClosestToLocation setSuggestionsState={setSuggestionsState} />
        <CountrySelector
          suggestionsState={suggestionsState}
          setSuggestionsState={setSuggestionsState}
        />
        <CategorySelector
          suggestionsState={suggestionsState}
          setSuggestionsState={setSuggestionsState}
        />
      </div>
    </form>
  );
}

export default SearchForm;
