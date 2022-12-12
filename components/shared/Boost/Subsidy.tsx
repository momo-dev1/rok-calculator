import { useDispatch } from "react-redux";
import { setTroopsSubSidy } from "@/store/tropsSlice";

type Props = {
  value: number;
};
const Subsidy = ({ value }: Props) => {
  const dispatch = useDispatch();
  const handleInputChange = (e: {
    target: { value: string; maxLength: number };
  }) => {
    let { value, maxLength } = e.target;
    if (value.length >= maxLength) {
      value = value.substring(0, maxLength);
    }
    if (+value < 0) return 0;

    dispatch(setTroopsSubSidy({ value }));
  };
  return (
    <form>
      <div className="md:text-lg flex items-start justify-center gap-2 text-sm font-semibold text-white">
        <label htmlFor="">Subsidy:</label>
        <input
          maxLength={2}
          className={`w-[80px] md:max-w-[100px] bg-transparent ${
            value > 0 ? "text-green-400" : "text-white"
          } text-center shadow-neumorphic rounded-md outline-none`}
          name="Subsidy"
          value={value}
          type="number"
          onChange={handleInputChange}
          onFocus={(e) => e.target.select()}
        />
        <span>%</span>
      </div>
    </form>
  );
};

export default Subsidy;
