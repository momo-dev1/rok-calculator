type Props = {
  onClick: any;
};

const ClearBtn = ({ onClick }: Props) => {
  return (
    <button
      className="md:text-base hover:bg-red-500 hover:scale-105 px-2 text-xs text-white transition bg-red-600 rounded-sm shadow-lg"
      onClick={onClick}
    >
      RESET ALL
    </button>
  );
};

export default ClearBtn;
