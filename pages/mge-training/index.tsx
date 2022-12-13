import type { NextPage } from "next";
import { useEffect } from "react";
import {
  tropsTier1,
  tropsTier2,
  tropsTier3,
  tropsTier4,
  tropsTier5,
} from "@/utils/tropsData";
import { clearValues, setQty, sumResources } from "@/store/tropsSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Layout,
  HowToUse,
  ClearBtn,
  Resources,
  SpeedBoost,
  TroopsTier,
} from "@/components/index";

const Troops: NextPage = () => {
  const {
    food,
    rock,
    timber,
    time,
    power,
    gold,
    mgePoints,
    speedBoost,
    subsidy,
    tier1,
    tier2,
    tier3,
    tier4,
    tier5,
  } = useSelector((state: any) => state.trops);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  const handleInputChange = (e: {
    target: { name: any; value: any; maxLength: any };
  }) => {
    let { name, value, maxLength } = e.target;
    if (value.length >= maxLength) return;
    if (value < 0) return 0;

    dispatch(setQty({ name, value }));
  };

  useEffect(() => {
    dispatch(sumResources());
  }, [tier1, tier2, tier3, tier4, tier5, speedBoost, dispatch]);

  return (
    <>
      <HowToUse title="Troops Calculator">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>Enter the number of troops to be trained.</p>
          <p>
            Adjust the Training Speed Buff{" "}
            <span className="text-sm">(Optional)</span>
          </p>
          <ol className="space-y-2">
            <p className="text-2xl text-shadow text-yellow-400">• Note •</p>
            <li>
              1- Your total troop training buff can be found by going to your
              city hall and clicking on the graph icon.
            </li>
            <li>
              <span>2- Max troop training buff is 103%</span>
              <div className="mt-1 ml-5 text-gray-300 text-sm space-y-1">
                <p>- Vip : 25%</p>
                <p>- Tech : 20%</p>
                <p>- Rune : 7% ~ 15%</p>
                <p>- Title (Duke) : 10%</p>
                <p>- Kindom buff : 10%</p>
                <p>- City skin (Heliopolis) : 3%</p>
                <p>- Civilization (Germany, Britain): 5%</p>
                <p>- Alliance holy site (Shrine of war, Storm Altar) : 15%</p>
              </div>
            </li>
          </ol>
        </div>
      </HowToUse>

      <Layout
        title="Troops Training Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Troop Training Calculator Figure out the number of minutes and resources needed to train troops."
        keywords="rise of kingdoms calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup"
        canonical="mge-training/"
      >
        <>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-2">
            <SpeedBoost
              name="troops"
              title="Training Speed Buff"
              value={speedBoost}
            />
            <ClearBtn onClick={() => dispatch(clearValues())} />
          </div>

          <Resources
            food={food}
            rock={rock}
            timber={timber}
            time={time}
            power={power}
            gold={gold}
            mgePoints={mgePoints}
            subsidy={subsidy}
            speedBoost={speedBoost}
            bgColor="rgb(158 158 52 / .2)"
            currentScroll={offset}
          />

          <div className="divide-y divide-dashed divide-gray-400 ">
            <TroopsTier
              title="T1 Troops"
              tierArray={tropsTier1}
              tierType={tier1}
              handleInputChange={handleInputChange}
            />
            <TroopsTier
              title="T2 Troops"
              tierArray={tropsTier2}
              tierType={tier2}
              handleInputChange={handleInputChange}
            />
            <TroopsTier
              title="T3 Troops"
              tierArray={tropsTier3}
              tierType={tier3}
              handleInputChange={handleInputChange}
            />
            <TroopsTier
              title="T4 Troops"
              tierArray={tropsTier4}
              tierType={tier4}
              handleInputChange={handleInputChange}
            />
            <TroopsTier
              title="T5 Troops"
              tierArray={tropsTier5}
              tierType={tier5}
              handleInputChange={handleInputChange}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Troops;
