import { ISuggestionsState } from "../../interfaces/Suggestions";

interface IProps {
  setSuggestionsState: React.Dispatch<React.SetStateAction<ISuggestionsState>>;
}
function ClosestToLocation({ setSuggestionsState }: IProps) {
  return (
    <label className="lg:ml-15 flex flex-row justify-center sm:justify-start items-center sm:w-full">
      <input
        type="checkbox"
        className="w-5 h-5 border-gray-700 rounded focus:ring-blue-500 focus:ring-opacity-50"
        onChange={() =>
          setSuggestionsState((prevState) => ({
            ...prevState,
            isClose: !prevState.isClose,
          }))
        }
      />
      <span className="ml-3">Най-близки до мен</span>
    </label>
  );
}

export default ClosestToLocation;
