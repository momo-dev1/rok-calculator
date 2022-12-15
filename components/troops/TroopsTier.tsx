/* eslint-disable @next/next/no-img-element */
type Props = {
  title: string;
  tierArray: { name: string; src: any }[];
  tierType: any[];
  handleInputChange: (e: {
    target: { name: any; value: any; maxLength: any };
  }) => void;
};

const TroopsTier = ({
  title,
  tierType,
  tierArray,
  handleInputChange,
}: Props) => {
  return (
    <div className="my-5 text-center py-5">
      <h3 className="font-audiowide text-shadow text-md md:text-2xl font-bold tracking-wider text-yellow-500">
        {title}
      </h3>
      <div className="md:grid-cols-4 md:px-10 grid items-center justify-center grid-cols-2  gap-8 px-2 mt-4">
        {tierArray.map((item: any, idx: number) => {
          return (
            <figure
              key={item.name}
              className="relative flex flex-col items-center rounded overflow-hidden"
            >
              <p className="bg-blue-400/40 text-white text-shadow py-1 w-full">
                {item.category}
              </p>

              <div className="h-[100px] p-2 space-y-2 bg-blue-400 w-full">
                <img
                  className="w-full h-full object-contain"
                  width={423}
                  height={423}
                  src={item.src.src}
                  alt={`${item.name}`}
                />
              </div>

              <label
                htmlFor={item.name}
                className="bg-blue-400/40 text-white text-shadow py-1 w-full"
              >
                {item.name}
              </label>

              <p className="bg-blue-400/40 pb-1 text-xs text-white text-shadow w-full">
                {item?.only}
              </p>

              <input
                className={`${
                  tierType[idx].qty > 0 ? "text-yellow-300" : "text-white"
                } text-center bg-blue-400/5 outline-none font-semibold rounded-b-md py-1 border border-blue-400 w-full`}
                type="text"
                id={item.name}
                name={item.name}
                maxLength={11}
                value={tierType[idx].qty.toLocaleString()}
                onChange={handleInputChange}
                onFocus={(e) => e.target.select()}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default TroopsTier;
