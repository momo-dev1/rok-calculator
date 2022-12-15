import { useDispatch } from "react-redux";
import { setTroopsSpeedBoost } from "@/store/tropsSlice";
import { setbuildingsSpeedBoost } from "@/store/buildingsSlice";

type Props = {
  name: string;
  title: string;
  value: number;
};
const SpeedBoost = ({ name, title, value }: Props) => {
  const dispatch = useDispatch();
  const handleInputChange = (e: {
    target: { value: string; maxLength: number };
  }) => {
    let { value, maxLength } = e.target;
    if (value.length >= maxLength) {
      value = value.substring(0, maxLength);
    }
    if (+value < 0) return 0;
    if (name === "troops") {
      dispatch(setTroopsSpeedBoost({ value }));
    } else if (name === "buildings") {
      dispatch(setbuildingsSpeedBoost({ value }));
    }
  };
  return (
    <form>
      <div className="flex items-start justify-center gap-2 text-sm font-semibold text-white md:text-lg">
        <label htmlFor={name}>{title}:</label>
        <input
          maxLength={3}
          className={`w-[80px] md:max-w-[100px] bg-transparent ${
            value > 0 ? "text-green-400" : "text-white"
          } text-center shadow-neumorphic rounded-md outline-none`}
          name={name}
          value={value}
          type="number"
          id={name}
          onChange={handleInputChange}
          onFocus={(e) => e.target.select()}
        />
        <span>%</span>
      </div>
    </form>
  );
};

export default SpeedBoost;
