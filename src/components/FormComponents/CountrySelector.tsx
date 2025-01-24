import { ISuggestionsState } from "../../interfaces/Suggestions";

interface IProps {
  suggestionsState: ISuggestionsState;
  setSuggestionsState: React.Dispatch<React.SetStateAction<ISuggestionsState>>;
}

function CountrySelector({ suggestionsState, setSuggestionsState }: IProps) {
  const countryOptions = [
    {
      label: "Всички",
      value: "",
    },
    {
      label: "САЩ",
      value: "USA",
    },
    {
      label: "България",
      value: "BGR",
    },
    {
      label: "Канада",
      value: "CAN",
    },
    {
      label: "Германия",
      value: "DEU",
    },
    {
      label: "Австралия",
      value: "AUS",
    },
  ];

  return (
    <label className="flex flex-row items-center sm:w-full">
      <span className="mr-3 ">Търси в държава</span>
      <select
        id="country"
        value={suggestionsState.countryCode || ""}
        onChange={(e) =>
          setSuggestionsState((prevState) => ({
            ...prevState,
            countryCode: e.target.value,
          }))
        }
        className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md shadow-md focus:ring-4 focus:ring-purple-500 transition-all duration-300"
      >
        {countryOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CountrySelector;
