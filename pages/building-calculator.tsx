import {
  Layout,
  HowToUse,
  ClearBtn,
  Building,
  Resources,
  SpeedBoost,
} from "@/components/index";
import { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { clearValues, setQty, totalResources } from "@/store/buildingsSlice";
import {
  FromIcon,
  FromFiveIcon,
  GoalIcon,
  BuildingCountIcon,
} from "public/assets";

const BuildingsPage: NextPage = () => {
  const {
    buildings,
    food,
    rock,
    timber,
    power,
    time,
    arrow,
    blueprint,
    speedBoost,
  } = useSelector((state: any) => state.buildings);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();
  const categoriesNames = ["Economic", "Military", "Others"];

  useEffect(() => {
    dispatch(totalResources());
  }, [buildings, speedBoost, dispatch]);

  const handleInputChange = (e: {
    target: { name: any; value: any; maxLength: any };
  }) => {
    let { name, value, maxLength } = e.target;
    if (value.length >= maxLength) {
      value = value.substring(0, maxLength);
    }
    if (!value || value < 0) {
      value = 1;
    }
    dispatch(setQty({ name, value }));
  };

  return (
    <>
      <HowToUse title="Building Calculator">
        <div className="text-md md:text-lg space-y-3 text-gray-100 mt-4">
          {/* Multiple Buildings */}
          <div className="space-y-2">
            <h3 className="text-xl">Multiple Buildings:</h3>

            <span className="gap-2 flex flex-wrap items-center ml-2  font-light">
              • To calculate for more than one building, enter the desired
              number of buildings here.
              <BuildingCountIcon />
              <span className="ml-1 text-sm">(Optional)</span>
            </span>
          </div>

          {/* Starting from Scratch */}
          <div className="space-y-2">
            <h3 className="text-xl">Starting from Scratch:</h3>
            <span className="gap-2 flex flex-wrap items-center ml-2 font-light">
              • If you're starting a new building, leave the 'current level'
              field set to
              <FromIcon />
              <span className="ml-1 text-sm">(Optional)</span>
            </span>
          </div>

          {/* Continuing Progress */}
          <div className="space-y-2">
            <h3 className="text-xl">Continuing Progress:</h3>
            <span className="gap-2 flex flex-wrap items-center ml-2 font-light">
              • If you're continuing from a previous level, select your current
              level from here.
              <FromFiveIcon /> <span className="ml-1 text-sm">(Optional)</span>
            </span>
          </div>

          {/* Setting Goals */}
          <div>
            <h3 className="text-xl">Setting Goals:</h3>
            <p className="flex flex-wrap items-center gap-2 ml-2 font-light">
              • Choose your target level by selecting the desired level here.
              <GoalIcon />{" "}
            </p>
          </div>

          {/* Speeding Up */}
          <div>
            <h3 className="text-xl">Speeding Up:</h3>
            <p className="ml-2 font-light">
              • To account for any speed bonuses, adjust the 'Building Speed
              Bonus' percentage as needed.
              <span className="ml-1 text-sm">(Optional)</span>
            </p>
          </div>
        </div>
      </HowToUse>

      <Layout
        title="Building Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Building Calculator. The tool helps calculate time and resources you need to upgrade buildings."
        keywords="rise of kingdoms calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup"
        canonical="building-calculator"
      >
        <>
          <div className="flex items-center justify-center flex-wrap gap-4 mb-2">
            <SpeedBoost
              name="buildings"
              title="Building Speed Bonus"
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
            arrow={arrow}
            blueprint={blueprint}
            speedBoost={speedBoost}
            bgColor="rgb(158 158 52 / .2)"
            currentScroll={offset}
          />
          <div className="my-4 divide-y divide-dashed">
            {categoriesNames.map((categoryName) => (
              <div key={categoryName}>
                <div className="mt-2">
                  <h2 className="text-3xl text-center text-white text-shadow font-semibold">
                    {categoryName}
                  </h2>
                </div>
                <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end justify-center mt-8 pb-10">
                  {buildings
                    .filter((item: any) => item.category === categoryName)
                    .map((building: any, idx: number) => (
                      <Building
                        key={idx}
                        item={building}
                        handleInputChange={handleInputChange}
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

export default BuildingsPage;
