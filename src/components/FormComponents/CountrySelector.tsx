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
    {
      label: "Франция",
      value: "FRA",
    },
    {
      label: "Италия",
      value: "ITA",
    },
    {
      label: "Испания",
      value: "ESP",
    },
    {
      label: "Япония",
      value: "JPN",
    },
    {
      label: "Китай",
      value: "CHN",
    },
    {
      label: "Русия",
      value: "RUS",
    },
    {
      label: "Индия",
      value: "IND",
    },
    {
      label: "Бразилия",
      value: "BRA",
    },
    {
      label: "Аржентина",
      value: "ARG",
    },
    {
      label: "Южна Африка",
      value: "ZAF",
    },
    {
      label: "Мексико",
      value: "MEX",
    },
    {
      label: "Норвегия",
      value: "NOR",
    },
    {
      label: "Швеция",
      value: "SWE",
    },
    {
      label: "Швейцария",
      value: "CHE",
    },
    {
      label: "Турция",
      value: "TUR",
    },
    {
      label: "Гърция",
      value: "GRC",
    },
  ];

  return (
    <label className="lg:ml-15 flex flex-col sm:flex-row items-center sm:w-full">
      <span className="mr-3 mb-2 sm:mb-0">Търси в държава</span>
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
