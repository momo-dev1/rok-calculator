import { useDispatch } from "react-redux";
import { setTroopsSpeedBoost } from "@/store/tropsSlice";
import { setTroopsHealingBoost } from "@/store/tropsHealingSlice";
import { setbuildingsSpeedBoost } from "@/store/buildingsSlice";

type Props = {
  name: string;
  title: string;
  value: number;
};

const SpeedBoost = ({ name, title, value }: Props) => {
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    const newValue = Math.max(0, parseInt(inputValue, 10) || 0); // Ensures value is not negative and defaults to 0 if NaN

    if (name === "troops") {
      dispatch(setTroopsSpeedBoost(newValue));
    } else if (name === "buildings") {
      dispatch(setbuildingsSpeedBoost({ value: newValue }));
    } else if (name === "troops healing") {
      dispatch(setTroopsHealingBoost(newValue));
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
          value={value.toString()}
          type="text"
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
