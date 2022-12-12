import { useEffect } from "react";
import type { NextPage } from "next";
import {
  Layout,
  HowToUse,
  ClearBtn,
  Resources,
  SpeedBoost,
  ResearchCard,
} from "@/components/index";
import { useDispatch, useSelector } from "react-redux";
import { clearValues, totalResources } from "@/store/researchSlice";
import { FromIcon, FromFiveIcon, GoalIcon } from "public/assets";

const UpgradeDefense: NextPage = () => {
  const {
    food,
    rock,
    timber,
    ore,
    time,
    might,
    gold,
    speedBoost,
    upgradeDefense,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [upgradeDefense, speedBoost, dispatch]);
  return (
    <>
      <HowToUse title="Upgrade Defense" bgColor="rgb(0 2 32 / .6)">
        <div className="text-md md:text-lg space-y-3 text-gray-100">
          <div className="space-y-2">
            <span className="sm:gap-2 flex flex-wrap items-center">
              If you want to calculate the whole Research from the beginning,
              leave current level as
              <FromIcon />
            </span>
            <span className="sm:gap-2 flex flex-wrap items-center">
              or you can adjust selection to your current level for example
              <FromFiveIcon />
              <span className="ml-1 text-sm"> (Optional) </span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            then select your goal Research level <GoalIcon />
          </div>
          <p>
            Adjust the Research Speed Boost.
            <span className="ml-1 text-sm">(Optional)</span>
          </p>
        </div>
      </HowToUse>

      <Layout
        title="Upgrade Defense | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/upgrade-defense/"
        bgColor="rgb(0 2 32 / .7)"
      >
        <>
          <div className="flex items-center justify-center gap-4 mb-2">
            <SpeedBoost
              name="research"
              title="Research Speed"
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
            speedBoost={speedBoost}
            bgColor="rgb(0 2 32 / .7)"
            currentScroll={offset}
          />

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[0].name}
              start={upgradeDefense[0].start}
              end={upgradeDefense[0].end}
              options={upgradeDefense[0].level}
              src={upgradeDefense[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[1].name}
              start={upgradeDefense[1].start}
              end={upgradeDefense[1].end}
              options={upgradeDefense[1].level}
              src={upgradeDefense[1].src}
            />
            <ResearchCard
              name={upgradeDefense[2].name}
              start={upgradeDefense[2].start}
              end={upgradeDefense[2].end}
              options={upgradeDefense[2].level}
              src={upgradeDefense[2].src}
            />
            <ResearchCard
              name={upgradeDefense[3].name}
              start={upgradeDefense[3].start}
              end={upgradeDefense[3].end}
              options={upgradeDefense[3].level}
              src={upgradeDefense[3].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[4].name}
              start={upgradeDefense[4].start}
              end={upgradeDefense[4].end}
              options={upgradeDefense[4].level}
              src={upgradeDefense[4].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[5].name}
              start={upgradeDefense[5].start}
              end={upgradeDefense[5].end}
              options={upgradeDefense[5].level}
              src={upgradeDefense[5].src}
            />
            <ResearchCard
              name={upgradeDefense[6].name}
              start={upgradeDefense[6].start}
              end={upgradeDefense[6].end}
              options={upgradeDefense[6].level}
              src={upgradeDefense[6].src}
            />
            <ResearchCard
              name={upgradeDefense[7].name}
              start={upgradeDefense[7].start}
              end={upgradeDefense[7].end}
              options={upgradeDefense[7].level}
              src={upgradeDefense[7].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[8].name}
              start={upgradeDefense[8].start}
              end={upgradeDefense[8].end}
              options={upgradeDefense[8].level}
              src={upgradeDefense[8].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[9].name}
              start={upgradeDefense[9].start}
              end={upgradeDefense[9].end}
              options={upgradeDefense[9].level}
              src={upgradeDefense[9].src}
            />
            <ResearchCard
              name={upgradeDefense[10].name}
              start={upgradeDefense[10].start}
              end={upgradeDefense[10].end}
              options={upgradeDefense[10].level}
              src={upgradeDefense[10].src}
            />
            <ResearchCard
              name={upgradeDefense[11].name}
              start={upgradeDefense[11].start}
              end={upgradeDefense[11].end}
              options={upgradeDefense[11].level}
              src={upgradeDefense[11].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[12].name}
              start={upgradeDefense[12].start}
              end={upgradeDefense[12].end}
              options={upgradeDefense[12].level}
              src={upgradeDefense[12].src}
            />
          </div>
          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeDefense[13].name}
              start={upgradeDefense[13].start}
              end={upgradeDefense[13].end}
              options={upgradeDefense[13].level}
              src={upgradeDefense[13].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default UpgradeDefense;
