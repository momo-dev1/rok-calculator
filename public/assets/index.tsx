/* eslint-disable @next/next/no-img-element */
import Food from "./resources/food.webp";
import Gold from "./resources/gold.webp";
import Arrow from "./resources/arrow.webp";
import BluePrint from "./resources/blueprint.webp";
import Rock from "./resources/rock.webp";
import Timber from "./resources/timber.webp";
import Time from "./resources/time.webp";

import From from "./howTo/from.png";
import FromFive from "./howTo/from5.png";
import Goal from "./howTo/to.png";
import BuildingCount from "./howTo/BuildingCount.png";

// Resources_Icons
export const FoodIcon = () => {
  return (
    <div className="w-10 h-10">
      <img width={118} height={101} src={Food.src} alt="food icon" />
    </div>
  );
};
export const GoldIcon = () => {
  return (
    <div className="w-10 h-10">
      <img width={118} height={101} src={Gold.src} alt="gold icon" />
    </div>
  );
};

export const ArrowIcon = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-speed-frame bg-contain">
      <img
        className="w-6 h-6"
        width={24}
        height={24}
        src={Arrow.src}
        alt="arrow icon"
      />
    </div>
  );
};

export const BluePrintIcon = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-speed-frame bg-contain">
      <img
        className="w-6 h-6"
        width={24}
        height={24}
        src={BluePrint.src}
        alt="blueprint icon"
      />
    </div>
  );
};

export const RockIcon = () => {
  return (
    <div className="w-10 h-10">
      <img width={118} height={101} src={Rock.src} alt="rock icon" />
    </div>
  );
};
export const TimberIcon = () => {
  return (
    <div className="w-10 h-10">
      <img width={118} height={101} src={Timber.src} alt="timber icon" />
    </div>
  );
};
export const TimeIcon = () => {
  return (
    <div className="w-10 h-10">
      <img width={118} height={101} src={Time.src} alt="time icon" />
    </div>
  );
};

export const FromIcon = () => {
  return (
    <div className="flex items-center w-14 relative h-12">
      <img width={56} height={18} src={From.src} alt="From icon" />
    </div>
  );
};

export const FromFiveIcon = () => {
  return (
    <div className="flex items-center w-14 relative h-12 ">
      <img width={56} height={18} src={FromFive.src} alt="FromFive icon" />
    </div>
  );
};

export const GoalIcon = () => {
  return (
    <div className="flex items-center w-14 relative h-12">
      <img width={56} height={18} src={Goal.src} alt="Goal icon" />
    </div>
  );
};

export const BuildingCountIcon = () => {
  return (
    <div className="relative w-10 h-10">
      <img
        width={40}
        height={44}
        src={BuildingCount.src}
        alt="BuildingCount icon"
      />
    </div>
  );
};
