/* eslint-disable @next/next/no-img-element */
import { Select } from "@/components/index";
import { memo } from "react";

const ResearchCard = ({ options, src, name, start, end }: any) => {
  return (
    <div>
      <div className="relative w-[100px] md:w-[150px]">
        <img
          width={176}
          height={147}
          placeholder="blur"
          src={src.src}
          alt="Research Card"
        />
      </div>

      <div className="flex">
        <Select
          value={start}
          name={name}
          label="from"
          options={options.slice(0, -1)}
        />
        <Select
          value={end}
          name={name}
          label="to"
          options={options}
          disable={start}
        />
      </div>
    </div>
  );
};

export default memo(ResearchCard);
