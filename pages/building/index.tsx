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
  const { buildings, food, rock, timber, ore, time, might, speedBoost } =
    useSelector((state: any) => state.buildings);
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
    if (value < 0) return 0;
    dispatch(setQty({ name, value }));
  };

  return (
    <>
      <HowToUse title="Building Calculator">
        <div className="text-md md:text-lg space-y-3 text-gray-100">
          <div className="space-y-2">
            <span className="gap-2 flex flex-wrap items-center">
              If you want more than one building, edit this input
              <BuildingCountIcon />
              <span className="ml-1 text-sm"> (Optional) </span>
            </span>
          </div>

          <div className="space-y-2">
            <span className="gap-2 flex flex-wrap items-center">
              If you want to calculate the whole Building from the beginning,
              leave current level as
              <FromIcon />
            </span>
            <span className="gap-2 flex flex-wrap items-center">
              or you can adjust selection to your current level for example
              <FromFiveIcon />
              <span className="ml-1 text-sm"> (Optional) </span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            then select your goal Building level <GoalIcon />
          </div>

          <p>
            Adjust the Building Speed Bonus.
            <span className="ml-1 text-sm">(Optional)</span>
          </p>
        </div>
      </HowToUse>

      <Layout
        title="Building Calculator"
        description="Lords Mobile Building Calculator & Construction Develop your buildings for its best utility. Calculate the time and resources you need"
        keywords="building caluclator,lords mobile,construction,lm,rss,time,speeds,might,resources,battle hall,prison,altar,unlock t4,castle,wall,academy,workshop,watch tower,treasure trove,barracks,infirmary,manor,lunar,farm,hyper,food,gym,buildings comps"
        canonical="/building/"
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
            ore={ore}
            time={time}
            might={might}
            gold={0}
            noGold
            show
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
                <div className="gap-14 md:grid-cols-5 md:px-10 grid items-end justify-center grid-cols-2 mt-2 p-3">
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
