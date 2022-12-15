type Props = {
  name: string;
  title: string;
  value: number;
};
const SpeedUp = ({ name, value }: Props) => {
  const handleInputChange = (e: {
    target: { value: string; maxLength: number };
  }) => {
    let { value, maxLength } = e.target;
    if (value.length >= maxLength) {
      value = value.substring(0, maxLength);
    }
    if (+value < 0) return 0;
  };
  return (
    <form>
      <div className="flex items-start justify-center gap-2 text-sm font-semibold text-white md:text-lg">
        <label htmlFor="SpeedUp">Speed Ups:</label>
        <input
          maxLength={3}
          className={`w-[80px] md:max-w-[100px] bg-transparent ${
            value > 0 ? "text-green-400" : "text-white"
          } text-center shadow-neumorphic rounded-md outline-none`}
          name="SpeedUp"
          value={value}
          id="SpeedUp"
          type="number"
          onChange={handleInputChange}
          onFocus={(e) => e.target.select()}
        />
        <span>d</span>
      </div>
    </form>
  );
};

export default SpeedUp;
