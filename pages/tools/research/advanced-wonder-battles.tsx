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

const AdvancedWonderBattles: NextPage = () => {
  const {
    food,
    rock,
    timber,
    ore,
    time,
    might,
    gold,
    tome,
    speedBoost,
    advancedWonderBattles,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [advancedWonderBattles, speedBoost, dispatch]);

  return (
    <>
      <HowToUse title="Advanced Wonder Battles" bgColor="rgb(0 2 32 / .6)">
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
        title="Advanced Wonder Battles | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/advanced-wonder-battles/"
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
            tome={tome}
            speedBoost={speedBoost}
            showTome
            bgColor="rgb(0 2 32 / .7)"
            currentScroll={offset}
          />
          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[0].name}
              start={advancedWonderBattles[0].start}
              end={advancedWonderBattles[0].end}
              options={advancedWonderBattles[0].level}
              src={advancedWonderBattles[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[1].name}
              start={advancedWonderBattles[1].start}
              end={advancedWonderBattles[1].end}
              options={advancedWonderBattles[1].level}
              src={advancedWonderBattles[1].src}
            />
            <ResearchCard
              name={advancedWonderBattles[2].name}
              start={advancedWonderBattles[2].start}
              end={advancedWonderBattles[2].end}
              options={advancedWonderBattles[2].level}
              src={advancedWonderBattles[2].src}
            />
            <ResearchCard
              name={advancedWonderBattles[3].name}
              start={advancedWonderBattles[3].start}
              end={advancedWonderBattles[3].end}
              options={advancedWonderBattles[3].level}
              src={advancedWonderBattles[3].src}
            />
            <ResearchCard
              name={advancedWonderBattles[4].name}
              start={advancedWonderBattles[4].start}
              end={advancedWonderBattles[4].end}
              options={advancedWonderBattles[4].level}
              src={advancedWonderBattles[4].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[5].name}
              start={advancedWonderBattles[5].start}
              end={advancedWonderBattles[5].end}
              options={advancedWonderBattles[5].level}
              src={advancedWonderBattles[5].src}
            />
            <ResearchCard
              name={advancedWonderBattles[6].name}
              start={advancedWonderBattles[6].start}
              end={advancedWonderBattles[6].end}
              options={advancedWonderBattles[6].level}
              src={advancedWonderBattles[6].src}
            />
            <ResearchCard
              name={advancedWonderBattles[7].name}
              start={advancedWonderBattles[7].start}
              end={advancedWonderBattles[7].end}
              options={advancedWonderBattles[7].level}
              src={advancedWonderBattles[7].src}
            />
            <ResearchCard
              name={advancedWonderBattles[8].name}
              start={advancedWonderBattles[8].start}
              end={advancedWonderBattles[8].end}
              options={advancedWonderBattles[8].level}
              src={advancedWonderBattles[8].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[9].name}
              start={advancedWonderBattles[9].start}
              end={advancedWonderBattles[9].end}
              options={advancedWonderBattles[9].level}
              src={advancedWonderBattles[9].src}
            />
            <ResearchCard
              name={advancedWonderBattles[10].name}
              start={advancedWonderBattles[10].start}
              end={advancedWonderBattles[10].end}
              options={advancedWonderBattles[10].level}
              src={advancedWonderBattles[10].src}
            />
            <ResearchCard
              name={advancedWonderBattles[11].name}
              start={advancedWonderBattles[11].start}
              end={advancedWonderBattles[11].end}
              options={advancedWonderBattles[11].level}
              src={advancedWonderBattles[11].src}
            />
            <ResearchCard
              name={advancedWonderBattles[12].name}
              start={advancedWonderBattles[12].start}
              end={advancedWonderBattles[12].end}
              options={advancedWonderBattles[12].level}
              src={advancedWonderBattles[12].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[13].name}
              start={advancedWonderBattles[13].start}
              end={advancedWonderBattles[13].end}
              options={advancedWonderBattles[13].level}
              src={advancedWonderBattles[13].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[14].name}
              start={advancedWonderBattles[14].start}
              end={advancedWonderBattles[14].end}
              options={advancedWonderBattles[14].level}
              src={advancedWonderBattles[14].src}
            />
            <ResearchCard
              name={advancedWonderBattles[15].name}
              start={advancedWonderBattles[15].start}
              end={advancedWonderBattles[15].end}
              options={advancedWonderBattles[15].level}
              src={advancedWonderBattles[15].src}
            />
            <ResearchCard
              name={advancedWonderBattles[16].name}
              start={advancedWonderBattles[16].start}
              end={advancedWonderBattles[16].end}
              options={advancedWonderBattles[16].level}
              src={advancedWonderBattles[16].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[17].name}
              start={advancedWonderBattles[17].start}
              end={advancedWonderBattles[17].end}
              options={advancedWonderBattles[17].level}
              src={advancedWonderBattles[17].src}
            />
            <ResearchCard
              name={advancedWonderBattles[18].name}
              start={advancedWonderBattles[18].start}
              end={advancedWonderBattles[18].end}
              options={advancedWonderBattles[18].level}
              src={advancedWonderBattles[18].src}
            />
            <ResearchCard
              name={advancedWonderBattles[19].name}
              start={advancedWonderBattles[19].start}
              end={advancedWonderBattles[19].end}
              options={advancedWonderBattles[19].level}
              src={advancedWonderBattles[19].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[20].name}
              start={advancedWonderBattles[20].start}
              end={advancedWonderBattles[20].end}
              options={advancedWonderBattles[20].level}
              src={advancedWonderBattles[20].src}
            />
            <ResearchCard
              name={advancedWonderBattles[21].name}
              start={advancedWonderBattles[21].start}
              end={advancedWonderBattles[21].end}
              options={advancedWonderBattles[21].level}
              src={advancedWonderBattles[21].src}
            />
            <ResearchCard
              name={advancedWonderBattles[22].name}
              start={advancedWonderBattles[22].start}
              end={advancedWonderBattles[22].end}
              options={advancedWonderBattles[22].level}
              src={advancedWonderBattles[22].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[23].name}
              start={advancedWonderBattles[23].start}
              end={advancedWonderBattles[23].end}
              options={advancedWonderBattles[23].level}
              src={advancedWonderBattles[23].src}
            />
            <ResearchCard
              name={advancedWonderBattles[24].name}
              start={advancedWonderBattles[24].start}
              end={advancedWonderBattles[24].end}
              options={advancedWonderBattles[24].level}
              src={advancedWonderBattles[24].src}
            />
            <ResearchCard
              name={advancedWonderBattles[25].name}
              start={advancedWonderBattles[25].start}
              end={advancedWonderBattles[25].end}
              options={advancedWonderBattles[25].level}
              src={advancedWonderBattles[25].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[26].name}
              start={advancedWonderBattles[26].start}
              end={advancedWonderBattles[26].end}
              options={advancedWonderBattles[26].level}
              src={advancedWonderBattles[26].src}
            />
            <ResearchCard
              name={advancedWonderBattles[27].name}
              start={advancedWonderBattles[27].start}
              end={advancedWonderBattles[27].end}
              options={advancedWonderBattles[27].level}
              src={advancedWonderBattles[27].src}
            />
            <ResearchCard
              name={advancedWonderBattles[28].name}
              start={advancedWonderBattles[28].start}
              end={advancedWonderBattles[28].end}
              options={advancedWonderBattles[28].level}
              src={advancedWonderBattles[28].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={advancedWonderBattles[29].name}
              start={advancedWonderBattles[29].start}
              end={advancedWonderBattles[29].end}
              options={advancedWonderBattles[29].level}
              src={advancedWonderBattles[29].src}
            />
            <ResearchCard
              name={advancedWonderBattles[30].name}
              start={advancedWonderBattles[30].start}
              end={advancedWonderBattles[30].end}
              options={advancedWonderBattles[30].level}
              src={advancedWonderBattles[30].src}
            />
            <ResearchCard
              name={advancedWonderBattles[31].name}
              start={advancedWonderBattles[31].start}
              end={advancedWonderBattles[31].end}
              options={advancedWonderBattles[31].level}
              src={advancedWonderBattles[31].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default AdvancedWonderBattles;
