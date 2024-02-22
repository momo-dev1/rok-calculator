import { useDispatch } from "react-redux";
import { setTroopsSubSidy } from "@/store/tropsHealingSlice";

type Props = {
  value: number;
};

const Subsidy = ({ value }: Props) => {
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    // Ensure the value is not longer than maxLength
    const maxLength = e.target.maxLength;
    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }

    // Parse the input value to an integer, default to 0 if it's not a number
    const newValue = parseInt(inputValue, 10) || 0;

    // Dispatch the new value if it's >= 0
    if (newValue >= 0) {
      dispatch(setTroopsSubSidy(newValue));
    }
  };

  return (
    <form>
      <div className="md:text-lg flex items-start justify-center gap-2 text-sm font-semibold text-white">
        <label htmlFor="healing-rss-reduction">Healing RSS Reduction:</label>
        <input
          maxLength={2}
          className={`w-[80px] md:max-w-[100px] bg-transparent ${
            value > 0 ? "text-green-400" : "text-white"
          } text-center shadow-neumorphic rounded-md outline-none`}
          name="healing-rss-reduction"
          value={value.toString()}
          type="text"
          id="healing-rss-reduction"
          onChange={handleInputChange}
          onFocus={(e) => e.target.select()}
        />
        <span>%</span>
      </div>
    </form>
  );
};

export default Subsidy;
