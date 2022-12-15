/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { setTime } from "../../store/speedSlice";

type Props = {
  name: string;
  src: any;
  value: number;
};

const SpeedCard = ({ name, src, value }: Props) => {
  const dispatch = useDispatch();

  const handleInputChange = (e: {
    target: { name: string; value: any; maxLength: number };
  }) => {
    let { name, value, maxLength } = e.target;
    if (value.length >= maxLength) {
      value = value.substring(0, maxLength);
    }
    if (value < 0) return 0;

    dispatch(setTime({ name, value }));
  };

  let frame;
  if (
    name.slice(2) === "3h" ||
    name.slice(2) === "8h" ||
    name.slice(2) === "15h" ||
    name.slice(2) === "24h"
  ) {
    frame = "bg-speed-frame-blue";
  } else if (
    name.slice(2) === "3d" ||
    name.slice(2) === "7d" ||
    name.slice(2) === "30d"
  ) {
    frame = "bg-speed-frame-purple";
  } else {
    frame = "bg-speed-frame";
  }

  return (
    <div className="my-5 text-center">
      <figure className="relative flex flex-col items-center">
        <div className="px-2">
          <label
            htmlFor={name}
            className=" text-md text-shadow text-white font-semibold 
             w-fit mx-auto px-1 mb-0.5"
          >
            {name.slice(2)}
          </label>
          <div
            className={`flex items-center justify-center w-14 h-14 ${frame} bg-contain `}
          >
            <img className="w-10 h-10 " src={src.src} alt={`${name} img`} />
          </div>
        </div>

        <input
          className={`text-center ${
            value > 0 ? "text-yellow-400" : "text-white"
          } outline-none bg-gray-800 py-1 border border-yellow-500 w-14 font-semibold `}
          type="number"
          id={name}
          name={name}
          maxLength={5}
          value={value.toString()}
          onChange={handleInputChange}
          onFocus={(e) => e.target.select()}
        />
      </figure>
    </div>
  );
};

export default SpeedCard;
