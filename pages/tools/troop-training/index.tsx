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
    ore,
    time,
    might,
    gold,
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
      <HowToUse title="Troop Calculator" bgColor="rgb(62 104 124 / 0.6)">
        <div className="text-md md:text-lg space-y-2 text-gray-100">
          <p>Enter the number of troops to be trained.</p>
          <p>
            Adjust the Subsidy level and Training Boost.{" "}
            <span className="text-sm">(Optional)</span>
          </p>
        </div>
      </HowToUse>

      <Layout
        title="Troop Training Calculator"
        description="lords Mobile Troop Training Calculator for a stronger turf. Calculate the time, resources and gems you need to pace the army training"
        keywords="lords mobile troop calculator,army calculator,military,t1,t2,t4,t5,rally trap,solo trap, rein trap,rss,resources,time,gems,might,lm"
        canonical="tools/troop-training/"
        bgColor="rgb(62 104 124 / 0.6)"
      >
        <>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-2">
            <Subsidy value={subsidy} />
            <SpeedBoost
              name="troops"
              title="Training Boost"
              value={speedBoost}
            />
            <ClearBtn onClick={() => dispatch(clearValues())} />
          </div>

          <Resources
            food={food}
            rock={rock}
            timber={timber}
            ore={ore}
            time={time}
            might={might}
            gold={gold}
            show={true}
            subsidy={subsidy}
            speedBoost={speedBoost}
            bgColor="rgb(62 104 124 / 0.6)"
            currentScroll={offset}
          />
          <TroopsTier
            title="Tier 1 Troops"
            tierArray={tropsTier1}
            tierType={tier1}
            handleInputChange={handleInputChange}
          />
          <TroopsTier
            title="Tier 2 Troops"
            tierArray={tropsTier2}
            tierType={tier2}
            handleInputChange={handleInputChange}
          />
          <TroopsTier
            title="Tier 3 Troops"
            tierArray={tropsTier3}
            tierType={tier3}
            handleInputChange={handleInputChange}
          />
          <TroopsTier
            title="Tier 4 Troops"
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
