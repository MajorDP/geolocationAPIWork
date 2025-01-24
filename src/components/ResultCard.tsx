import { useState } from "react";
import { IAddress } from "../interfaces/Results";

interface IProps {
  result: IAddress;
}

function ResultCard({ result }: IProps) {
  const [selected, setSelected] = useState(false);
  return (
    <li
      className="mb-4 last:mb-0 p-3 bg-slate-400 cursor-pointer text-center sm:text-start rounded-lg shadow-sm border border-white hover:bg-slate-500 transition"
      onClick={() => setSelected(!selected)}
    >
      {/* Main Address */}
      <span className="font-bold ">{result.address}</span>

      {/* Expanded Section */}
      {selected && (
        <div className="flex flex-col xl:flex-row w-full mt-4 rounded-lg p-4 gap-6">
          {/* Coordinates Section */}
          <div className="w-full xl:w-[40%] bg-slate-400 duration-300 rounded-md p-2">
            <p className="font-medium text-black text-center mb-3 text-[18px] lg:text-[20px]">
              Координати на адреса:
            </p>
            <div className="flex sm:flex-row flex-col items-center h-fit justify-between  text-[16px] lg:text-[20px]">
              <p>
                <span className="font-medium">X:</span> {result.location.x}
              </p>
              <p className="">
                <span className="font-medium">Y:</span> {result.location.y}
              </p>
            </div>
          </div>

          {/* Extent Section */}
          <div className="w-full xl:w-[60%] bg-slate-400 duration-300 rounded-md p-2">
            <p className="font-medium text-black text-center mb-3 text-[18px] lg:text-[20px]">
              Обхват на адреса:
            </p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-between text-[15px] sm:text-[18px]  lg:text-[20px] ">
              <p>
                <span className="font-medium">X-мин:</span> {result.extent.xmin}
              </p>
              <p>
                <span className="font-medium">Y-мин:</span> {result.extent.ymin}
              </p>
            </div>
            <div className="flex flex-col items-center mt-4 space-y-2 sm:flex-row sm:justify-between sm:space-y-0 text-[15px] sm:text-[18px] lg:text-[20px]">
              <p>
                <span className="font-medium">X-макс:</span>{" "}
                {result.extent.xmax}
              </p>
              <p>
                <span className="font-medium">Y-макс:</span>{" "}
                {result.extent.ymax}
              </p>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default ResultCard;
