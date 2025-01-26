import { ISuggestionsState } from "../../interfaces/Suggestions";

interface IProps {
  suggestionsState: ISuggestionsState;
  setSuggestionsState: React.Dispatch<React.SetStateAction<ISuggestionsState>>;
}
function CategorySelector({ suggestionsState, setSuggestionsState }: IProps) {
  const categoryOptions = [
    { label: "Всички категории", value: "" },
    { label: "Адрес", value: "Address" },
    { label: "Пощенски код", value: "Postal" },
    { label: "Населено място", value: "Populated Place" },
    { label: "Забележителност", value: "Landmark" },
    { label: "Образование", value: "Education" },
    { label: "Хотел", value: "Hotel" },
  ];

  return (
    <label className="lg:ml-15 flex flex-col sm:flex-row items-center sm:w-fit">
      <span className="mr-3 mb-2 sm:mb-0">Вид място</span>
      <select
        id="country"
        value={suggestionsState.category || ""}
        onChange={(e) =>
          setSuggestionsState((prevState) => ({
            ...prevState,
            category: e.target.value,
          }))
        }
        className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md shadow-md focus:ring-4 focus:ring-purple-500 transition-all duration-300 w-fit"
      >
        {categoryOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CategorySelector;
