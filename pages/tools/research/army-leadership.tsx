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

const ArmyLeadership: NextPage = () => {
  const {
    food,
    rock,
    timber,
    ore,
    time,
    might,
    gold,
    speedBoost,
    armyLeadership,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [armyLeadership, speedBoost, dispatch]);
  return (
    <>
      <HowToUse title="Army Leadership" bgColor="rgb(0 2 32 / .6)">
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
          <div>
            Adjust the Research Speed Boost.
            <span className="ml-1 text-sm">(Optional)</span>
          </div>
        </div>
      </HowToUse>

      <Layout
        title="Army Leadership | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/army-leadership/"
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
              name={armyLeadership[0].name}
              start={armyLeadership[0].start}
              end={armyLeadership[0].end}
              options={armyLeadership[0].level}
              src={armyLeadership[0].src}
            />
            <ResearchCard
              name={armyLeadership[1].name}
              start={armyLeadership[1].start}
              end={armyLeadership[1].end}
              options={armyLeadership[1].level}
              src={armyLeadership[1].src}
            />
            <ResearchCard
              name={armyLeadership[2].name}
              start={armyLeadership[2].start}
              end={armyLeadership[2].end}
              options={armyLeadership[2].level}
              src={armyLeadership[2].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[3].name}
              start={armyLeadership[3].start}
              end={armyLeadership[3].end}
              options={armyLeadership[3].level}
              src={armyLeadership[3].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[4].name}
              start={armyLeadership[4].start}
              end={armyLeadership[4].end}
              options={armyLeadership[4].level}
              src={armyLeadership[4].src}
            />
            <EmptySlot />
            <ResearchCard
              name={armyLeadership[5].name}
              start={armyLeadership[5].start}
              end={armyLeadership[5].end}
              options={armyLeadership[5].level}
              src={armyLeadership[5].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[6].name}
              start={armyLeadership[6].start}
              end={armyLeadership[6].end}
              options={armyLeadership[6].level}
              src={armyLeadership[6].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[7].name}
              start={armyLeadership[7].start}
              end={armyLeadership[7].end}
              options={armyLeadership[7].level}
              src={armyLeadership[7].src}
            />
            <ResearchCard
              name={armyLeadership[8].name}
              start={armyLeadership[8].start}
              end={armyLeadership[8].end}
              options={armyLeadership[8].level}
              src={armyLeadership[8].src}
            />
            <ResearchCard
              name={armyLeadership[9].name}
              start={armyLeadership[9].start}
              end={armyLeadership[9].end}
              options={armyLeadership[9].level}
              src={armyLeadership[9].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[10].name}
              start={armyLeadership[10].start}
              end={armyLeadership[10].end}
              options={armyLeadership[10].level}
              src={armyLeadership[10].src}
            />
            <ResearchCard
              name={armyLeadership[11].name}
              start={armyLeadership[11].start}
              end={armyLeadership[11].end}
              options={armyLeadership[11].level}
              src={armyLeadership[11].src}
            />
            <ResearchCard
              name={armyLeadership[12].name}
              start={armyLeadership[12].start}
              end={armyLeadership[12].end}
              options={armyLeadership[12].level}
              src={armyLeadership[12].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[13].name}
              start={armyLeadership[13].start}
              end={armyLeadership[13].end}
              options={armyLeadership[13].level}
              src={armyLeadership[13].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[14].name}
              start={armyLeadership[14].start}
              end={armyLeadership[14].end}
              options={armyLeadership[14].level}
              src={armyLeadership[14].src}
            />
            <ResearchCard
              name={armyLeadership[15].name}
              start={armyLeadership[15].start}
              end={armyLeadership[15].end}
              options={armyLeadership[15].level}
              src={armyLeadership[15].src}
            />
            <ResearchCard
              name={armyLeadership[16].name}
              start={armyLeadership[16].start}
              end={armyLeadership[16].end}
              options={armyLeadership[16].level}
              src={armyLeadership[16].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[17].name}
              start={armyLeadership[17].start}
              end={armyLeadership[17].end}
              options={armyLeadership[17].level}
              src={armyLeadership[17].src}
            />
            <ResearchCard
              name={armyLeadership[18].name}
              start={armyLeadership[18].start}
              end={armyLeadership[18].end}
              options={armyLeadership[18].level}
              src={armyLeadership[18].src}
            />
            <ResearchCard
              name={armyLeadership[19].name}
              start={armyLeadership[19].start}
              end={armyLeadership[19].end}
              options={armyLeadership[19].level}
              src={armyLeadership[19].src}
            />
          </div>
          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[20].name}
              start={armyLeadership[20].start}
              end={armyLeadership[20].end}
              options={armyLeadership[20].level}
              src={armyLeadership[20].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[21].name}
              start={armyLeadership[21].start}
              end={armyLeadership[21].end}
              options={armyLeadership[21].level}
              src={armyLeadership[21].src}
            />
            <EmptySlot />
            <ResearchCard
              name={armyLeadership[22].name}
              start={armyLeadership[22].start}
              end={armyLeadership[22].end}
              options={armyLeadership[22].level}
              src={armyLeadership[22].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={armyLeadership[23].name}
              start={armyLeadership[23].start}
              end={armyLeadership[23].end}
              options={armyLeadership[23].level}
              src={armyLeadership[23].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default ArmyLeadership;
