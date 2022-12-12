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

const UpgradeMilitary: NextPage = () => {
  const {
    food,
    rock,
    timber,
    ore,
    time,
    might,
    gold,
    speedBoost,
    upgradeMilitary,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [upgradeMilitary, speedBoost, dispatch]);
  return (
    <>
      <HowToUse title="Upgrade Military" bgColor="rgb(0 2 32 / .6)">
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
        title="Upgrade Military | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/upgrade-military/"
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
              name={upgradeMilitary[0].name}
              start={upgradeMilitary[0].start}
              end={upgradeMilitary[0].end}
              options={upgradeMilitary[0].level}
              src={upgradeMilitary[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[1].name}
              start={upgradeMilitary[1].start}
              end={upgradeMilitary[1].end}
              options={upgradeMilitary[1].level}
              src={upgradeMilitary[1].src}
            />
            <ResearchCard
              name={upgradeMilitary[2].name}
              start={upgradeMilitary[2].start}
              end={upgradeMilitary[2].end}
              options={upgradeMilitary[2].level}
              src={upgradeMilitary[2].src}
            />
            <ResearchCard
              name={upgradeMilitary[3].name}
              start={upgradeMilitary[3].start}
              end={upgradeMilitary[3].end}
              options={upgradeMilitary[3].level}
              src={upgradeMilitary[3].src}
            />
            <ResearchCard
              name={upgradeMilitary[4].name}
              start={upgradeMilitary[4].start}
              end={upgradeMilitary[4].end}
              options={upgradeMilitary[4].level}
              src={upgradeMilitary[4].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[5].name}
              start={upgradeMilitary[5].start}
              end={upgradeMilitary[5].end}
              options={upgradeMilitary[5].level}
              src={upgradeMilitary[5].src}
            />
            <ResearchCard
              name={upgradeMilitary[6].name}
              start={upgradeMilitary[6].start}
              end={upgradeMilitary[6].end}
              options={upgradeMilitary[6].level}
              src={upgradeMilitary[6].src}
            />
            <ResearchCard
              name={upgradeMilitary[7].name}
              start={upgradeMilitary[7].start}
              end={upgradeMilitary[7].end}
              options={upgradeMilitary[7].level}
              src={upgradeMilitary[7].src}
            />
            <ResearchCard
              name={upgradeMilitary[8].name}
              start={upgradeMilitary[8].start}
              end={upgradeMilitary[8].end}
              options={upgradeMilitary[8].level}
              src={upgradeMilitary[8].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[9].name}
              start={upgradeMilitary[9].start}
              end={upgradeMilitary[9].end}
              options={upgradeMilitary[9].level}
              src={upgradeMilitary[9].src}
            />
            <ResearchCard
              name={upgradeMilitary[10].name}
              start={upgradeMilitary[10].start}
              end={upgradeMilitary[10].end}
              options={upgradeMilitary[10].level}
              src={upgradeMilitary[10].src}
            />
            <ResearchCard
              name={upgradeMilitary[11].name}
              start={upgradeMilitary[11].start}
              end={upgradeMilitary[11].end}
              options={upgradeMilitary[11].level}
              src={upgradeMilitary[11].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[12].name}
              start={upgradeMilitary[12].start}
              end={upgradeMilitary[12].end}
              options={upgradeMilitary[12].level}
              src={upgradeMilitary[12].src}
            />
            <ResearchCard
              name={upgradeMilitary[13].name}
              start={upgradeMilitary[13].start}
              end={upgradeMilitary[13].end}
              options={upgradeMilitary[13].level}
              src={upgradeMilitary[13].src}
            />
            <ResearchCard
              name={upgradeMilitary[14].name}
              start={upgradeMilitary[14].start}
              end={upgradeMilitary[14].end}
              options={upgradeMilitary[14].level}
              src={upgradeMilitary[14].src}
            />
            <ResearchCard
              name={upgradeMilitary[15].name}
              start={upgradeMilitary[15].start}
              end={upgradeMilitary[15].end}
              options={upgradeMilitary[15].level}
              src={upgradeMilitary[15].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[16].name}
              start={upgradeMilitary[16].start}
              end={upgradeMilitary[16].end}
              options={upgradeMilitary[16].level}
              src={upgradeMilitary[16].src}
            />
            <ResearchCard
              name={upgradeMilitary[17].name}
              start={upgradeMilitary[17].start}
              end={upgradeMilitary[17].end}
              options={upgradeMilitary[17].level}
              src={upgradeMilitary[17].src}
            />
            <ResearchCard
              name={upgradeMilitary[18].name}
              start={upgradeMilitary[18].start}
              end={upgradeMilitary[18].end}
              options={upgradeMilitary[18].level}
              src={upgradeMilitary[18].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[19].name}
              start={upgradeMilitary[19].start}
              end={upgradeMilitary[19].end}
              options={upgradeMilitary[19].level}
              src={upgradeMilitary[19].src}
            />
            <ResearchCard
              name={upgradeMilitary[20].name}
              start={upgradeMilitary[20].start}
              end={upgradeMilitary[20].end}
              options={upgradeMilitary[20].level}
              src={upgradeMilitary[20].src}
            />
            <ResearchCard
              name={upgradeMilitary[21].name}
              start={upgradeMilitary[21].start}
              end={upgradeMilitary[21].end}
              options={upgradeMilitary[21].level}
              src={upgradeMilitary[21].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[22].name}
              start={upgradeMilitary[22].start}
              end={upgradeMilitary[22].end}
              options={upgradeMilitary[22].level}
              src={upgradeMilitary[22].src}
            />
            <ResearchCard
              name={upgradeMilitary[23].name}
              start={upgradeMilitary[23].start}
              end={upgradeMilitary[23].end}
              options={upgradeMilitary[23].level}
              src={upgradeMilitary[23].src}
            />
            <ResearchCard
              name={upgradeMilitary[24].name}
              start={upgradeMilitary[24].start}
              end={upgradeMilitary[24].end}
              options={upgradeMilitary[24].level}
              src={upgradeMilitary[24].src}
            />
            <ResearchCard
              name={upgradeMilitary[25].name}
              start={upgradeMilitary[25].start}
              end={upgradeMilitary[25].end}
              options={upgradeMilitary[25].level}
              src={upgradeMilitary[25].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={upgradeMilitary[26].name}
              start={upgradeMilitary[26].start}
              end={upgradeMilitary[26].end}
              options={upgradeMilitary[26].level}
              src={upgradeMilitary[26].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default UpgradeMilitary;
