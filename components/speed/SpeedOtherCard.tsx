/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { setAmount } from "../../store/speedOtherSlice";

type Props = {
  name: string;
  color?: string;
  src: { src: string };
  value: number;
};

const SpeedOtherCard = ({ name, color, src, value }: Props) => {
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    // Parse input value to integer and clamp the value to 0 if negative
    const parsedValue = Math.max(0, parseInt(inputVal, 10) || 0);
    dispatch(setAmount({ name, value: parsedValue }));
  };

  let itemName = name.replace(
    /(exp-|gem-|action-|food-|wood-|stone-|gold-)/,
    ""
  );

  let frameColor = "bg-speed-frame"; // Default frame color
  switch (color) {
    case "blue":
      frameColor = "bg-speed-frame-blue";
      break;
    case "purple":
      frameColor = "bg-speed-frame-purple";
      break;
    case "orange":
      frameColor = "bg-speed-frame-orange";
      break;
    // No default needed as we already set the default color
  }

  return (
    <div className="my-5 text-center">
      <figure className="relative flex flex-col items-center">
        <div className="px-2">
          <label
            htmlFor={name}
            className="text-md text-shadow text-white font-semibold w-fit mx-auto px-1 mb-0.5"
          >
            {itemName}
          </label>
          <div
            className={`flex items-center justify-center w-14 h-14 ${frameColor} bg-contain`}
          >
            <img className="w-10 h-10" src={src.src} alt={`${name} img`} />
          </div>
        </div>

        <input
          className={`text-center ${
            value > 0 ? "text-yellow-400" : "text-white"
          } outline-none bg-gray-800 py-1 border border-yellow-500 w-14 font-semibold`}
          type="text" // Change to text to manually handle numeric input
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

export default SpeedOtherCard;
