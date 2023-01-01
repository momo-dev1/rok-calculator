import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearBtn, Layout, SpeedOtherCard, HowToUse } from "@/components/index";
import { sumCount, clearValues } from "@/store/speedOtherSlice";
import { formatResources } from "@/utils/helpers";

const ResourcePackCalculator: NextPage = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const { resourcePack, amount } = useSelector(
    (state: any) => state.speedOther
  );
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();
  const categoriesNames = ["food", "wood", "stone", "gold"];

  useEffect(() => {
    dispatch(sumCount());
  }, [resourcePack, dispatch]);

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
      <HowToUse title="Resource Packs ( rss ) Calculator">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>
            Enter the amount of each resource, and the total should be
            calculated automatically
          </p>
          <div className="space-y-2">
            <p className="text-2xl text-shadow text-yellow-400">
              • Description •
            </p>
            <p>
              <b>Resource Packs</b> are chests which have a chance to drop a
              certain amount <br /> of Resource{" "}
              <b className="text-green-500">Food</b> ,{" "}
              <b className="text-amber-500">Wood</b>, <b>Stone</b> or{" "}
              <b className="text-yellow-500">Gold </b>
              randomly upon opening.
            </p>
          </div>
        </div>
      </HowToUse>

      <Layout
        title="Resource Packs Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Resource Packs ( rss ) calculator. Calculate how many resources contained in each pack."
        keywords="rise of kingdoms calculator,rss calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup "
        canonical="resource-calculator"
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

          <div className="my-4 divide-y divide-dashed">
            {categoriesNames.map((categoryName) => (
              <div key={categoryName}>
                <div className="mt-2">
                  <h2 className="text-3xl text-center text-shadow font-semibold capitalize text-yellow-400">
                    {categoryName}
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center px-8">
                  {resourcePack
                    .filter((item: any) => item.category === categoryName)
                    .map((speedItem: any, idx: number) => (
                      <SpeedOtherCard
                        key={idx}
                        name={speedItem.name}
                        color={speedItem.color}
                        value={speedItem.value}
                        src={speedItem.src}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      </Layout>
    </>
  );
};

export default ResourcePackCalculator;
