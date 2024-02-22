/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { setTime } from "../../store/speedSlice";

type Props = {
  name: string;
  src: { src: string };
  value: number;
};

const SpeedCard = ({ name, src, value }: Props) => {
  const dispatch = useDispatch();

  const getFrameClass = (name: string) => {
    const timeIndicator = name.slice(2); // Extracting time unit and duration
    if (["3h", "8h", "15h", "24h"].includes(timeIndicator)) {
      return "bg-speed-frame-blue";
    } else if (["3d", "7d", "30d"].includes(timeIndicator)) {
      return "bg-speed-frame-purple";
    } else {
      return "bg-speed-frame";
    }
  };

  const frame = getFrameClass(name);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    // Convert to number and ensure non-negative values
    const numericValue = Math.max(0, parseInt(inputValue, 10) || 0);

    dispatch(setTime({ name, value: numericValue }));
  };

  return (
    <div className="my-5 text-center">
      <figure className="relative flex flex-col items-center">
        <div className="px-2">
          <label
            htmlFor={name}
            className="text-md text-shadow text-white font-semibold w-fit mx-auto px-1 mb-0.5"
          >
            {name.slice(2)}
          </label>
          <div
            className={`flex items-center justify-center w-14 h-14 ${frame} bg-contain`}
          >
            <img className="w-10 h-10" src={src.src} alt={`${name} img`} />
          </div>
        </div>

        <input
          className={`text-center ${
            value > 0 ? "text-yellow-400" : "text-white"
          } outline-none bg-gray-800 py-1 border border-yellow-500 w-14 font-semibold`}
          type="text" // Use "text" and handle number conversion manually
          id={name}
          name={name}
          value={value.toString()}
          onChange={handleInputChange}
          onFocus={(e) => e.target.select()}
        />
      </figure>
    </div>
  );
};

export default SpeedCard;
