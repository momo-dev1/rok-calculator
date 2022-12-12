import type { NextPage } from "next";
import { useEffect } from "react";
import {
  tropsTier1,
  tropsTier2,
  tropsTier3,
  tropsTier4,
} from "@/utils/tropsData";
import { clearValues, setQty, sumResources } from "@/store/tropsSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Layout,
  Subsidy,
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
  }, [tier1, tier2, tier3, tier4, speedBoost, subsidy, dispatch]);

  return (
    <>
      <HowToUse title="Troop Calculator">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>Enter the number of troops to be trained.</p>
          <p>
            Adjust the Training Speed Bonus .{" "}
            <span className="text-sm">(Optional)</span>
          </p>
        </div>
      </HowToUse>

      <Layout
        title="Troop Training Calculator"
        description="Rise of Kingdoms (RoK) - Troop Training Calculator Figure out the number of minutes and resources needed to train troops."
        keywords="rise of kingdoms calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup"
        canonical="mge-training/"
      >
        <>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-2">
            <SpeedBoost
              name="troops"
              title="Training Speed Bonus"
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
        </>
      </Layout>
    </>
  );
};

export default Troops;
