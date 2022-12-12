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

const WonderBattles: NextPage = () => {
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
    wonderBattles,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [wonderBattles, speedBoost, dispatch]);

  return (
    <>
      <HowToUse title="Wonder Battles" bgColor="rgb(0 2 32 / .6)">
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
        title="Wonder Battles | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/wonder-battles/"
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
              name={wonderBattles[0].name}
              start={wonderBattles[0].start}
              end={wonderBattles[0].end}
              options={wonderBattles[0].level}
              src={wonderBattles[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[1].name}
              start={wonderBattles[1].start}
              end={wonderBattles[1].end}
              options={wonderBattles[1].level}
              src={wonderBattles[1].src}
            />
            <EmptySlot />
            <ResearchCard
              name={wonderBattles[2].name}
              start={wonderBattles[2].start}
              end={wonderBattles[2].end}
              options={wonderBattles[2].level}
              src={wonderBattles[2].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[3].name}
              start={wonderBattles[3].start}
              end={wonderBattles[3].end}
              options={wonderBattles[3].level}
              src={wonderBattles[3].src}
            />
            <EmptySlot />
            <ResearchCard
              name={wonderBattles[4].name}
              start={wonderBattles[4].start}
              end={wonderBattles[4].end}
              options={wonderBattles[4].level}
              src={wonderBattles[4].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[5].name}
              start={wonderBattles[5].start}
              end={wonderBattles[5].end}
              options={wonderBattles[5].level}
              src={wonderBattles[5].src}
            />
            <ResearchCard
              name={wonderBattles[6].name}
              start={wonderBattles[6].start}
              end={wonderBattles[6].end}
              options={wonderBattles[6].level}
              src={wonderBattles[6].src}
            />
            <ResearchCard
              name={wonderBattles[7].name}
              start={wonderBattles[7].start}
              end={wonderBattles[7].end}
              options={wonderBattles[7].level}
              src={wonderBattles[7].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[8].name}
              start={wonderBattles[8].start}
              end={wonderBattles[8].end}
              options={wonderBattles[8].level}
              src={wonderBattles[8].src}
            />
            <ResearchCard
              name={wonderBattles[9].name}
              start={wonderBattles[9].start}
              end={wonderBattles[9].end}
              options={wonderBattles[9].level}
              src={wonderBattles[9].src}
            />
            <ResearchCard
              name={wonderBattles[10].name}
              start={wonderBattles[10].start}
              end={wonderBattles[10].end}
              options={wonderBattles[10].level}
              src={wonderBattles[10].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[11].name}
              start={wonderBattles[11].start}
              end={wonderBattles[11].end}
              options={wonderBattles[11].level}
              src={wonderBattles[11].src}
            />
            <ResearchCard
              name={wonderBattles[12].name}
              start={wonderBattles[12].start}
              end={wonderBattles[12].end}
              options={wonderBattles[12].level}
              src={wonderBattles[12].src}
            />
            <ResearchCard
              name={wonderBattles[13].name}
              start={wonderBattles[13].start}
              end={wonderBattles[13].end}
              options={wonderBattles[13].level}
              src={wonderBattles[13].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[14].name}
              start={wonderBattles[14].start}
              end={wonderBattles[14].end}
              options={wonderBattles[14].level}
              src={wonderBattles[14].src}
            />
            <EmptySlot />
            <ResearchCard
              name={wonderBattles[15].name}
              start={wonderBattles[15].start}
              end={wonderBattles[15].end}
              options={wonderBattles[15].level}
              src={wonderBattles[15].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[16].name}
              start={wonderBattles[16].start}
              end={wonderBattles[16].end}
              options={wonderBattles[16].level}
              src={wonderBattles[16].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[17].name}
              start={wonderBattles[17].start}
              end={wonderBattles[17].end}
              options={wonderBattles[17].level}
              src={wonderBattles[17].src}
            />
            <ResearchCard
              name={wonderBattles[18].name}
              start={wonderBattles[18].start}
              end={wonderBattles[18].end}
              options={wonderBattles[18].level}
              src={wonderBattles[18].src}
            />
            <ResearchCard
              name={wonderBattles[19].name}
              start={wonderBattles[19].start}
              end={wonderBattles[19].end}
              options={wonderBattles[19].level}
              src={wonderBattles[19].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[20].name}
              start={wonderBattles[20].start}
              end={wonderBattles[20].end}
              options={wonderBattles[20].level}
              src={wonderBattles[20].src}
            />
            <ResearchCard
              name={wonderBattles[21].name}
              start={wonderBattles[21].start}
              end={wonderBattles[21].end}
              options={wonderBattles[21].level}
              src={wonderBattles[21].src}
            />
            <ResearchCard
              name={wonderBattles[22].name}
              start={wonderBattles[22].start}
              end={wonderBattles[22].end}
              options={wonderBattles[22].level}
              src={wonderBattles[22].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[23].name}
              start={wonderBattles[23].start}
              end={wonderBattles[23].end}
              options={wonderBattles[23].level}
              src={wonderBattles[23].src}
            />
            <ResearchCard
              name={wonderBattles[24].name}
              start={wonderBattles[24].start}
              end={wonderBattles[24].end}
              options={wonderBattles[24].level}
              src={wonderBattles[24].src}
            />
            <ResearchCard
              name={wonderBattles[25].name}
              start={wonderBattles[25].start}
              end={wonderBattles[25].end}
              options={wonderBattles[25].level}
              src={wonderBattles[25].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={wonderBattles[26].name}
              start={wonderBattles[26].start}
              end={wonderBattles[26].end}
              options={wonderBattles[26].level}
              src={wonderBattles[26].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default WonderBattles;
