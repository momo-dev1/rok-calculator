import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearBtn, Layout, SpeedOtherCard, HowToUse } from "@/components/index";
import { sumCount, clearValues } from "@/store/speedOtherSlice";
import { formatResources } from "@/utils/helpers";

const ActioPointsCalculator: NextPage = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const { speedOther, amount } = useSelector((state: any) => state.speedOther);
  const { offset } = useSelector((state: any) => state.global);
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
    window.addEventListener("scroll", setStickyResources);
    return () => window.removeEventListener("scroll", setStickyResources);
  }, [setStickyResources]);

  return (
    <>
      <HowToUse title="Action Points Recovery Calculator">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>
            Enter the amount of Action Points, and the total should be
            calculated automatically
          </p>
          <div className="space-y-2">
            <p className="text-2xl text-shadow text-yellow-400">
              • Description •
            </p>
            <p>Restores a certain amount of Action Points.</p>
          </div>
        </div>
      </HowToUse>

      <Layout
        title="Action Points Recovery Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Action Points calculator. Calculate how many action points you have in your  inventory."
        keywords="rise of kingdoms calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup "
        canonical="action-points-calculator"
      >
        <>
          <div
            style={{
              backgroundColor: sticky ? "rgb(158 158 0 / .2)" : "transparent",
            }}
            className={`flex gap-3 z-[9999] px-4 py-2 ${
              sticky ? "sticky -top-1 backdrop-filter backdrop-blur-2xl " : null
            }`}
          >
            <div className="md:text-2xl flex items-center justify-center text-lg text-white gap-5 ">
              Total: {formatResources(amount)}
              <ClearBtn onClick={() => dispatch(clearValues())} />
            </div>
          </div>
          <div className="flex flex-wrap justify-center px-8 ">
            {speedOther
              .filter((item: any) => item.category === "action")
              .map((speedItem: any, index: number) => {
                return (
                  <SpeedOtherCard
                    key={index}
                    name={speedItem.name}
                    color={speedItem.color}
                    value={speedItem.value}
                    src={speedItem.src}
                  />
                );
              })}
          </div>
        </>
      </Layout>
    </>
  );
};

export default ActioPointsCalculator;
