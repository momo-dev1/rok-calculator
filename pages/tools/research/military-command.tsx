import { useEffect } from "react";
import type { NextPage } from "next";
import {
  Layout,
  HowToUse,
  ClearBtn,
  EmptySlot,
  Resources,
  SpeedBoost,
  ResearchCard,
} from "@/components/index";
import { useDispatch, useSelector } from "react-redux";
import { clearValues, totalResources } from "@/store/researchSlice";
import { FromIcon, FromFiveIcon, GoalIcon } from "public/assets";

const MilitaryCommand: NextPage = () => {
  const {
    food,
    rock,
    timber,
    ore,
    time,
    might,
    gold,
    speedBoost,
    militaryCommand,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [militaryCommand, speedBoost, dispatch]);
  return (
    <>
      <HowToUse title="Military Command" bgColor="rgb(0 2 32 / .6)">
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
        title="Military Command | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/military-command/"
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
              name={militaryCommand[0].name}
              start={militaryCommand[0].start}
              end={militaryCommand[0].end}
              options={militaryCommand[0].level}
              src={militaryCommand[0].src}
            />
            <ResearchCard
              name={militaryCommand[1].name}
              start={militaryCommand[1].start}
              end={militaryCommand[1].end}
              options={militaryCommand[1].level}
              src={militaryCommand[1].src}
            />
            <EmptySlot />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[2].name}
              start={militaryCommand[2].start}
              end={militaryCommand[2].end}
              options={militaryCommand[2].level}
              src={militaryCommand[2].src}
            />
            <ResearchCard
              name={militaryCommand[3].name}
              start={militaryCommand[3].start}
              end={militaryCommand[3].end}
              options={militaryCommand[3].level}
              src={militaryCommand[3].src}
            />
            <ResearchCard
              name={militaryCommand[4].name}
              start={militaryCommand[4].start}
              end={militaryCommand[4].end}
              options={militaryCommand[4].level}
              src={militaryCommand[4].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[5].name}
              start={militaryCommand[5].start}
              end={militaryCommand[5].end}
              options={militaryCommand[5].level}
              src={militaryCommand[5].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[6].name}
              start={militaryCommand[6].start}
              end={militaryCommand[6].end}
              options={militaryCommand[6].level}
              src={militaryCommand[6].src}
            />
            <ResearchCard
              name={militaryCommand[7].name}
              start={militaryCommand[7].start}
              end={militaryCommand[7].end}
              options={militaryCommand[7].level}
              src={militaryCommand[7].src}
            />
            <ResearchCard
              name={militaryCommand[8].name}
              start={militaryCommand[8].start}
              end={militaryCommand[8].end}
              options={militaryCommand[8].level}
              src={militaryCommand[8].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[9].name}
              start={militaryCommand[9].start}
              end={militaryCommand[9].end}
              options={militaryCommand[9].level}
              src={militaryCommand[9].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[10].name}
              start={militaryCommand[10].start}
              end={militaryCommand[10].end}
              options={militaryCommand[10].level}
              src={militaryCommand[10].src}
            />
            <EmptySlot />
            <ResearchCard
              name={militaryCommand[11].name}
              start={militaryCommand[11].start}
              end={militaryCommand[11].end}
              options={militaryCommand[11].level}
              src={militaryCommand[11].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[12].name}
              start={militaryCommand[12].start}
              end={militaryCommand[12].end}
              options={militaryCommand[12].level}
              src={militaryCommand[12].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[13].name}
              start={militaryCommand[13].start}
              end={militaryCommand[13].end}
              options={militaryCommand[13].level}
              src={militaryCommand[13].src}
            />
            <EmptySlot />
            <ResearchCard
              name={militaryCommand[14].name}
              start={militaryCommand[14].start}
              end={militaryCommand[14].end}
              options={militaryCommand[14].level}
              src={militaryCommand[14].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[15].name}
              start={militaryCommand[15].start}
              end={militaryCommand[15].end}
              options={militaryCommand[15].level}
              src={militaryCommand[15].src}
            />
            <ResearchCard
              name={militaryCommand[16].name}
              start={militaryCommand[16].start}
              end={militaryCommand[16].end}
              options={militaryCommand[16].level}
              src={militaryCommand[16].src}
            />
            <ResearchCard
              name={militaryCommand[17].name}
              start={militaryCommand[17].start}
              end={militaryCommand[17].end}
              options={militaryCommand[17].level}
              src={militaryCommand[17].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[18].name}
              start={militaryCommand[18].start}
              end={militaryCommand[18].end}
              options={militaryCommand[18].level}
              src={militaryCommand[18].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[19].name}
              start={militaryCommand[19].start}
              end={militaryCommand[19].end}
              options={militaryCommand[19].level}
              src={militaryCommand[19].src}
            />
            <EmptySlot />
            <ResearchCard
              name={militaryCommand[20].name}
              start={militaryCommand[20].start}
              end={militaryCommand[20].end}
              options={militaryCommand[20].level}
              src={militaryCommand[20].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[21].name}
              start={militaryCommand[21].start}
              end={militaryCommand[21].end}
              options={militaryCommand[21].level}
              src={militaryCommand[21].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={militaryCommand[22].name}
              start={militaryCommand[22].start}
              end={militaryCommand[22].end}
              options={militaryCommand[22].level}
              src={militaryCommand[22].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default MilitaryCommand;
