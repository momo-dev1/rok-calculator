import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimeIcon } from "../public/assets";
import { ClearBtn, Layout, SpeedCard, HowToUse } from "@/components/index";
import { sumTime, clearValues } from "@/store/speedSlice";
import { formatTime } from "@/utils/helpers";

const Speed = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const { speed, time } = useSelector((state: any) => state.speed);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sumTime());
  }, [speed, dispatch]);

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
      <HowToUse title="SpeedUps Calculator">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>
            Enter the amount of each speed value, and the duration should be
            calculated automatically
            <br /> both for each type and the total.
          </p>
        </div>
      </HowToUse>

      <Layout
        title="SpeedUps Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Gem Packs Calculator. Calculate how many gems you have in your inventory."
        keywords="rise of kingdoms calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup "
        canonical="speedups-calculator"
      >
        <>
          <div
            style={{
              backgroundColor: sticky ? "rgb(158 158 0 / .2)" : "transparent",
            }}
            className={`flex gap-3 z-[9999] px-4 py-2 ${
              sticky ? "sticky -top-1 backdrop-filter backdrop-blur-2xl" : null
            }`}
          >
            <div className="md:text-2xl flex items-center justify-center gap-1 text-lg text-white">
              {formatTime(time)}
              <TimeIcon />
            </div>
            <ClearBtn onClick={() => dispatch(clearValues())} />
          </div>

          <div className="divide-y divide-dashed">
            {speed.map((item: any, index: number) => {
              return (
                <div key={index} className="text-center py-4">
                  <h3 className="font-audiowide text-shadow my-3 text-2xl font-extrabold tracking-wider text-yellow-400">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap justify-center px-8 ">
                    {item.times.map((timeData: any) => (
                      <SpeedCard
                        key={timeData.name}
                        name={timeData.name}
                        value={timeData.value}
                        src={item.icon}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </Layout>
    </>
  );
};

export default Speed;
