import type { NextPage } from "next";
import { useEffect } from "react";
import {
  tropsTier1,
  tropsTier2,
  tropsTier3,
  tropsTier4,
  tropsTier5,
} from "@/utils/tropsData";
import { clearValues, setQty, sumResources } from "@/store/tropsHealingSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Layout,
  HowToUse,
  ClearBtn,
  Resources,
  SpeedBoost,
  TroopsTier,
  Subsidy,
} from "@/components/index";

const TroopsHealing: NextPage = () => {
  const {
    food,
    rock,
    timber,
    time,
    gold,
    speedBoost,
    subsidy,
    tier1,
    tier2,
    tier3,
    tier4,
    tier5,
  } = useSelector((state: any) => state.tropsHealing);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  const handleInputChange = (e: {
    target: { name: string; value: string; maxLength: number };
  }) => {
    let { name, value, maxLength } = e.target;

    // Remove any non-numeric characters from the input
    const numericValue = value.replace(/[^\d]/g, "");

    // Check if the input exceeds the maxLength, if so, truncate it
    const trimmedValue = numericValue.slice(0, maxLength);

    // Convert empty string to '0' to avoid NaN issues, otherwise use the numeric value
    const finalValue = trimmedValue === "" ? "0" : trimmedValue;

    dispatch(setQty({ name, value: +finalValue }));
  };

  useEffect(() => {
    dispatch(sumResources());
  }, [tier1, tier2, tier3, tier4, tier5, speedBoost, subsidy, dispatch]);

  return (
    <>
      <HowToUse title="Troops Healing Calculator">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>Enter the number of troops to be healed.</p>
          <p>
            Adjust the Healing Speed Buff{" "}
            <span className="text-sm">(Optional)</span>
          </p>
          <p>
            Adjust Healing RSS Reduction{" "}
            <span className="text-sm">(Optional)</span>
          </p>
        </div>
      </HowToUse>

      <Layout
        title="Troops Healing Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Troops Healing Calculator Figure out the number of minutes and resources needed to heal the troops."
        keywords="rise of kingdoms calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup"
        canonical="troops-healing"
      >
        <>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-2">
            <Subsidy value={subsidy} />
            <SpeedBoost
              name="troops healing"
              title="Healing Speed Buff"
              value={speedBoost}
            />
            <ClearBtn onClick={() => dispatch(clearValues())} />
          </div>

          <Resources
            food={food}
            rock={rock}
            timber={timber}
            time={time}
            gold={gold}
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

export default TroopsHealing;
