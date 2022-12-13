import { useCallback, useEffect, useRef, useState } from "react";
import {
  GoldIcon,
  FoodIcon,
  RockIcon,
  TimeIcon,
  TimberIcon,
} from "../../public/assets";
import { formatTime, formatResources } from "@/utils/helpers";

export type Props = {
  food: number;
  rock: number;
  timber: number;
  time: number;
  power: number;
  bgColor: string;
  gold?: number;
  mgePoints?: number;
  subsidy?: number;
  speedBoost: number;
  currentScroll: number;
};

const Resources = ({
  food,
  rock,
  timber,
  time,
  gold,
  mgePoints,
  power,
  subsidy,
  speedBoost,
  bgColor,
  currentScroll,
}: Props) => {
  const [sticky, setSticky] = useState<boolean>(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const setStickyResources = useCallback(() => {
    let eleOffsetHeight: any = resourcesRef.current?.offsetHeight;
    if (window.scrollY > currentScroll + eleOffsetHeight + 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, [currentScroll]);

  useEffect(() => {
    window.addEventListener("scroll", setStickyResources);
    return () => window.removeEventListener("scroll", setStickyResources);
  }, [setStickyResources]);

  return (
    <div
      ref={resourcesRef}
      style={{ backgroundColor: sticky ? bgColor : "transparent" }}
      className={`flex flex-wrap items-center justify-center gap-6 text-white z-[999] px-4 ${
        sticky ? "sticky top-0 py-1 backdrop-filter backdrop-blur-2xl" : null
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-1 ${
          subsidy || 0 > 0 ? "text-green-400" : ""
        }`}
      >
        <FoodIcon />
        {formatResources(food)}
      </div>

      <div
        className={`flex flex-col items-center justify-center gap-1 ${
          subsidy || 0 > 0 ? "text-green-400" : ""
        }`}
      >
        <TimberIcon />
        {formatResources(timber)}
      </div>

      <div
        className={`flex flex-col items-center justify-center gap-1 ${
          subsidy || 0 > 0 ? "text-green-400" : ""
        }`}
      >
        <RockIcon />
        {formatResources(rock)}
      </div>

      {gold || gold === 0 ? (
        <div
          className={`flex flex-col items-center justify-center gap-1 ${
            subsidy || 0 > 0 ? "text-green-400" : ""
          }`}
        >
          <GoldIcon />
          {formatResources(gold)}
        </div>
      ) : null}

      <div
        className={`flex flex-col items-center justify-center ${
          speedBoost > 0 ? "text-green-400" : ""
        }`}
      >
        <TimeIcon />
        {formatTime(time)}
      </div>

      {mgePoints || mgePoints === 0 ? (
        <div
          className={`flex flex-col items-center justify-center -mt-1 ${
            subsidy || 0 > 0 ? "text-green-400" : ""
          }`}
        >
          <div className="text-center">
            <p className="font-audiowide font-thin ">MGE</p>
            <p className="font-audiowide font-thin ">Points</p>
          </div>

          {formatResources(mgePoints)}
        </div>
      ) : null}

      <div className="flex flex-col items-center justify-center ">
        <p className="py-2 font-audiowide font-thin ">Power</p>
        {formatResources(power)}
      </div>
    </div>
  );
};

export default Resources;
