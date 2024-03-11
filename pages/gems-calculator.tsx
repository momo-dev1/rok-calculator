import type { NextPage } from "next";
import { useCallback, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { ClearBtn, Layout, SpeedOtherCard, HowToUse } from "@/components/index";
import { sumCount, clearValues } from "@/store/speedOtherSlice";
import { formatResources } from "@/utils/helpers";

interface State {
  speedOther: {
    speedOther: {
      name: string;
      value: number;
      category: string;
      color: string;
      src: { src: string };
    }[];
    amount: number;
  };
  global: {
    offset: number;
  };
}

const GemsPackCalculator: NextPage = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const { speedOther, amount } = useSelector(
    (state: State) => state.speedOther
  );
  const { offset } = useSelector((state: State) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sumCount());
  }, [speedOther, dispatch]);

  const setStickyResources = useCallback(() => {
    if (window.scrollY >= offset + 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, [offset]);

  useEffect(() => {
    const handleScroll = debounce(setStickyResources, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setStickyResources]);

  const gemSpeedItems = useMemo(
    () => speedOther.filter((item) => item.category === "gem"),
    [speedOther]
  );

  return (
    <>
      <HowToUse title="Gem Packs Calculator">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>
            Enter the amount of Gems, and the total should be calculated
            automatically
          </p>
          <div className="space-y-2">
            <p className="text-2xl text-shadow text-yellow-400">
              • Description •
            </p>
            <p>
              The Gem items reward you with a certain amount of gem resources.
            </p>
          </div>
        </div>
      </HowToUse>

      <Layout
        title="Gem Packs Calculator | Rise of Kingdoms (RoK)"
        description="Calculate how many Gems you have in your inventory."
        canonical="gems-calculator"
      >
        <div
          style={{
            backgroundColor: sticky ? "rgba(158, 158, 0, 0.2)" : "transparent",
          }}
          className={`flex gap-3 z-[9999] px-4 py-2 ${
            sticky ? "sticky top-0 backdrop-filter backdrop-blur-2xl" : ""
          }`}
        >
          <div className="md:text-2xl flex items-center justify-center text-lg text-white gap-5">
            Total: {formatResources(amount)}
            <ClearBtn onClick={() => dispatch(clearValues())} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center px-8">
          {gemSpeedItems.map((speedItem, index) => (
            <SpeedOtherCard
              key={index}
              name={speedItem.name}
              color={speedItem.color}
              value={speedItem.value}
              src={speedItem.src}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default GemsPackCalculator;
