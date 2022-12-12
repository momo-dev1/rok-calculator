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
    <div className="my-5 text-center">
      <h3 className="font-audiowide text-shadow text-md md:text-2xl font-bold tracking-wider text-yellow-500">
        {title}
      </h3>
      <div className="md:grid-cols-4 md:px-10 grid items-center justify-center grid-cols-2 gap-5 px-2 mt-2">
        {tierArray.map((item: any, idx: number) => {
          return (
            <figure
              key={item.name}
              className="relative flex flex-col items-center"
            >
              <div className="relative w-[120px] sm:w-[150px]">
                <img
                  className="w-full h-full object-contain"
                  width={423}
                  height={423}
                  placeholder="blur"
                  src={item.src.src}
                  alt={`${item.name} img`}
                />
              </div>

              <input
                className={`${
                  tierType[idx].qty > 0 ? "text-yellow-300" : "text-white"
                } text-center bg-[#4d3c31] outline-none font-semibold rounded-b-lg py-1 border border-yellow-500 w-[120px] 
                sm:w-[150px] -mt-1 `}
                type="text"
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
