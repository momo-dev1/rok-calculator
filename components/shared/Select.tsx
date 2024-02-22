import { useDispatch } from "react-redux";

import {
  setLevel as setBuildingsLevel,
  sumResources as sumBuildingsResources,
} from "@/store/buildingsSlice";

type SelectOption = {
  label: string;
  value: string;
};
type SelectProps = {
  options: SelectOption[];
  value: number;
  label: string;
  name: string;
  buildings?: boolean;
  disable?: number;
};
const Select = ({
  buildings,
  value,
  options,
  label,
  name,
  disable,
}: SelectProps) => {
  const dispatch = useDispatch();

  const updateLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (buildings) {
      dispatch(setBuildingsLevel({ name, value, label }));
      dispatch(sumBuildingsResources({ name, label }));
    }
  };

  return (
    <form className="w-full">
      <select
        name={name}
        id={name}
        className={`w-full h-full ${
          value >= 1 ? "bg-orange-700" : "bg-gray-900"
        }   text-white md:pl-4 border border-yellow-500 focus:outline-none focus:ring-blue-550 focus:border-blue-550 text-sm  text-center`}
        value={value}
        onChange={updateLevel}
      >
        {label === "from" && <option value={0}>0</option>}
        {label === "to" && <option value={0}>to</option>}
        {options.map((item: any, idx) => {
          return (
            <>
              {disable ? (
                <option disabled={disable >= item} key={idx} value={item}>
                  {item}
                </option>
              ) : (
                <option key={idx} value={item}>
                  {item}
                </option>
              )}
            </>
          );
        })}
      </select>
    </form>
  );
};

export default Select;
