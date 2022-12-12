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

const MonsterHunt: NextPage = () => {
  const {
    food,
    rock,
    timber,
    ore,
    time,
    might,
    gold,
    speedBoost,
    monsterHunt,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [monsterHunt, speedBoost, dispatch]);
  return (
    <>
      <HowToUse title="Monster Hunt" bgColor="rgb(0 2 32 / .6)">
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
        title="Monster Hunt | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/monster-hunt/"
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
              name={monsterHunt[0].name}
              start={monsterHunt[0].start}
              end={monsterHunt[0].end}
              options={monsterHunt[0].level}
              src={monsterHunt[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[1].name}
              start={monsterHunt[1].start}
              end={monsterHunt[1].end}
              options={monsterHunt[1].level}
              src={monsterHunt[1].src}
            />
            <ResearchCard
              name={monsterHunt[2].name}
              start={monsterHunt[2].start}
              end={monsterHunt[2].end}
              options={monsterHunt[2].level}
              src={monsterHunt[2].src}
            />
            <ResearchCard
              name={monsterHunt[3].name}
              start={monsterHunt[3].start}
              end={monsterHunt[3].end}
              options={monsterHunt[3].level}
              src={monsterHunt[3].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[4].name}
              start={monsterHunt[4].start}
              end={monsterHunt[4].end}
              options={monsterHunt[4].level}
              src={monsterHunt[4].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[5].name}
              start={monsterHunt[5].start}
              end={monsterHunt[5].end}
              options={monsterHunt[5].level}
              src={monsterHunt[5].src}
            />
            <ResearchCard
              name={monsterHunt[6].name}
              start={monsterHunt[6].start}
              end={monsterHunt[6].end}
              options={monsterHunt[6].level}
              src={monsterHunt[6].src}
            />
            <ResearchCard
              name={monsterHunt[7].name}
              start={monsterHunt[7].start}
              end={monsterHunt[7].end}
              options={monsterHunt[7].level}
              src={monsterHunt[7].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[8].name}
              start={monsterHunt[8].start}
              end={monsterHunt[8].end}
              options={monsterHunt[8].level}
              src={monsterHunt[8].src}
            />
            <EmptySlot />
            <ResearchCard
              name={monsterHunt[9].name}
              start={monsterHunt[9].start}
              end={monsterHunt[9].end}
              options={monsterHunt[9].level}
              src={monsterHunt[9].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[10].name}
              start={monsterHunt[10].start}
              end={monsterHunt[10].end}
              options={monsterHunt[10].level}
              src={monsterHunt[10].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[11].name}
              start={monsterHunt[11].start}
              end={monsterHunt[11].end}
              options={monsterHunt[11].level}
              src={monsterHunt[11].src}
            />
            <EmptySlot />
            <ResearchCard
              name={monsterHunt[12].name}
              start={monsterHunt[12].start}
              end={monsterHunt[12].end}
              options={monsterHunt[12].level}
              src={monsterHunt[12].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[13].name}
              start={monsterHunt[13].start}
              end={monsterHunt[13].end}
              options={monsterHunt[13].level}
              src={monsterHunt[13].src}
            />
            <EmptySlot />
            <ResearchCard
              name={monsterHunt[14].name}
              start={monsterHunt[14].start}
              end={monsterHunt[14].end}
              options={monsterHunt[14].level}
              src={monsterHunt[14].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[15].name}
              start={monsterHunt[15].start}
              end={monsterHunt[15].end}
              options={monsterHunt[15].level}
              src={monsterHunt[15].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[16].name}
              start={monsterHunt[16].start}
              end={monsterHunt[16].end}
              options={monsterHunt[16].level}
              src={monsterHunt[16].src}
            />
            <EmptySlot />
            <ResearchCard
              name={monsterHunt[17].name}
              start={monsterHunt[17].start}
              end={monsterHunt[17].end}
              options={monsterHunt[17].level}
              src={monsterHunt[17].src}
            />
          </div>
          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[18].name}
              start={monsterHunt[18].start}
              end={monsterHunt[18].end}
              options={monsterHunt[18].level}
              src={monsterHunt[18].src}
            />
            <EmptySlot />
            <ResearchCard
              name={monsterHunt[19].name}
              start={monsterHunt[19].start}
              end={monsterHunt[19].end}
              options={monsterHunt[19].level}
              src={monsterHunt[19].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[20].name}
              start={monsterHunt[20].start}
              end={monsterHunt[20].end}
              options={monsterHunt[20].level}
              src={monsterHunt[20].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={monsterHunt[21].name}
              start={monsterHunt[21].start}
              end={monsterHunt[21].end}
              options={monsterHunt[21].level}
              src={monsterHunt[21].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default MonsterHunt;
