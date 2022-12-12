import { memo } from "react";
const EmptySlot = () => {
  return (
    <div className="md:w-[150px] md:h-[120px] w-[100px] h-[80px] hidden md:block"></div>
  );
};

export default memo(EmptySlot);
