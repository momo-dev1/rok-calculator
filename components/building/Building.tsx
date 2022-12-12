/* eslint-disable @next/next/no-img-element */
import Select from "../shared/Select";

type Props = {
  item: any;
  handleInputChange: (e: {
    target: { name: any; value: any; maxLength: any };
  }) => void;
};
{
}
const Building = ({ item, handleInputChange }: Props) => {
  return (
    <div className="my-5 text-center">
      <figure className="relative flex flex-col items-center">
        <div className="h-[150px]">
          <div className="flex items-center justify-center p-1 h-full">
            <img
              className="w-full h-full object-contain"
              width={423}
              height={423}
              src={item.src.src}
              alt={`${item.name} img`}
            />
          </div>

          <input
            className={`${
              item.qty > 1 ? "text-yellow-300" : "text-white"
            } text-center bg-zinc-600 outline-none font-semibold py-1 border border-yellow-500 w-10 top-0 right-0 absolute`}
            type="number"
            name={item.name}
            autoComplete="off"
            maxLength={2}
            value={item.qty.toString()}
            onChange={handleInputChange}
            onFocus={(e) => e.target.select()}
          />
        </div>

        <div className="bg-zinc-600 md:py-1 py-[2px] w-full px-2">
          <h3 className="text-[10px] md:text-md md:text-lg text-shadow text-gray-200">
            {item.name}
          </h3>
        </div>

        <div className="flex w-full">
          <Select
            buildings
            value={item.start}
            name={item.name}
            label="from"
            options={item.level.slice(0, -1)}
          />
          <Select
            buildings
            value={item.end}
            name={item.name}
            label="to"
            options={item.level}
            disable={item.start}
          />
        </div>
      </figure>
    </div>
  );
};

export default Building;
