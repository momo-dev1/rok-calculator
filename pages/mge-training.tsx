import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearValues, setQty, sumResources } from "@/store/tropsSlice";
import {
  Layout,
  HowToUse,
  ClearBtn,
  Resources,
  SpeedBoost,
  TroopsTier,
} from "@/components/index";
import {
  tropsTier1,
  tropsTier2,
  tropsTier3,
  tropsTier4,
  tropsTier5,
} from "@/utils/tropsData";
import { TropTier } from "types/dataTypes";

interface State {
  trops: {
    food: number;
    rock: number;
    timber: number;
    time: number;
    power: number;
    gold: number;
    mgePoints: number;
    speedBoost: number;
    subsidy: number;
    tier1: TropTier[];
    tier2: TropTier[];
    tier3: TropTier[];
    tier4: TropTier[];
    tier5: TropTier[];
  };
  global: {
    offset: number;
  };
}

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
  } = useSelector((state: State) => state.trops);
  const { offset } = useSelector((state: State) => state.global);
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, maxLength } = e.target;
      const parsedValue = value.replace(/\D/g, ""); // Remove non-digit characters
      if (parsedValue.length > maxLength) return; // Prevent input longer than maxLength
      dispatch(setQty({ name, value: parsedValue === "" ? "0" : parsedValue }));
    },
    [dispatch]
  );

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
          <ul className="space-y-2">
            <li>
              <p className="text-2xl text-shadow text-yellow-400">• Note •</p>
            </li>
            <li>
              1- Your total troop training buff can be found by going to your
              city hall and clicking on the graph icon.
            </li>
            <li>
              <span>2- Max troop training buff is 103%</span>
              <div className="mt-1 ml-5 text-gray-300 text-sm space-y-1">
                <p>
                  - Alliance holy site (Shrine of war, Storm Altar) : <b>15%</b>
                </p>
                <p>
                  - Civilization (Germany, Britain): <b>5%</b>
                </p>
                <p>
                  - City skin (Heliopolis) : <b>3%</b>
                </p>
                <p>
                  - Kindom buff : <b>10%</b>
                </p>
                <p>
                  - Title (Duke) : <b>10%</b>
                </p>
                <p>
                  - Rune : <b>7%</b> ~ <b>15%</b>
                </p>
                <p>
                  - Tech : <b>20%</b>
                </p>
                <p>
                  - Vip : <b>25%</b>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </HowToUse>

      <Layout
        title="Troops Training Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Troops Training Calculator. Figure out the number of minutes and resources needed to train troops."
        canonical="mge-training"
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

          {[tropsTier1, tropsTier2, tropsTier3, tropsTier4, tropsTier5].map(
            (tier, index) => (
              <TroopsTier
                key={index}
                title={`T${index + 1} Troops`}
                tierArray={tier}
                tierType={[tier1, tier2, tier3, tier4, tier5][index]}
                handleInputChange={handleInputChange}
              />
            )
          )}
        </>
      </Layout>
    </>
  );
};

export default Troops;
