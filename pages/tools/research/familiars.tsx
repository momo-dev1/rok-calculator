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

const Familiars: NextPage = () => {
  const {
    food,
    rock,
    timber,
    ore,
    time,
    might,
    gold,
    anima,
    speedBoost,
    familiars,
  } = useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [familiars, speedBoost, dispatch]);

  return (
    <>
      <HowToUse title="Familiars" bgColor="rgb(0 2 32 / .6)">
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
        title="Familiars | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/familiars/"
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
            anima={anima}
            speedBoost={speedBoost}
            showAnima
            bgColor="rgb(0 2 32 / .7)"
            currentScroll={offset}
          />
          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[0].name}
              start={familiars[0].start}
              end={familiars[0].end}
              options={familiars[0].level}
              src={familiars[0].src}
            />
            <EmptySlot />
            <ResearchCard
              name={familiars[1].name}
              start={familiars[1].start}
              end={familiars[1].end}
              options={familiars[1].level}
              src={familiars[1].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[2].name}
              start={familiars[2].start}
              end={familiars[2].end}
              options={familiars[2].level}
              src={familiars[2].src}
            />
            <EmptySlot />
            <ResearchCard
              name={familiars[3].name}
              start={familiars[3].start}
              end={familiars[3].end}
              options={familiars[3].level}
              src={familiars[3].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[4].name}
              start={familiars[4].start}
              end={familiars[4].end}
              options={familiars[4].level}
              src={familiars[4].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[5].name}
              start={familiars[5].start}
              end={familiars[5].end}
              options={familiars[5].level}
              src={familiars[5].src}
            />
            <ResearchCard
              name={familiars[6].name}
              start={familiars[6].start}
              end={familiars[6].end}
              options={familiars[6].level}
              src={familiars[6].src}
            />
            <ResearchCard
              name={familiars[7].name}
              start={familiars[7].start}
              end={familiars[7].end}
              options={familiars[7].level}
              src={familiars[7].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[8].name}
              start={familiars[8].start}
              end={familiars[8].end}
              options={familiars[8].level}
              src={familiars[8].src}
            />
            <ResearchCard
              name={familiars[9].name}
              start={familiars[9].start}
              end={familiars[9].end}
              options={familiars[9].level}
              src={familiars[9].src}
            />
            <ResearchCard
              name={familiars[10].name}
              start={familiars[10].start}
              end={familiars[10].end}
              options={familiars[10].level}
              src={familiars[10].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[11].name}
              start={familiars[11].start}
              end={familiars[11].end}
              options={familiars[11].level}
              src={familiars[11].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[12].name}
              start={familiars[12].start}
              end={familiars[12].end}
              options={familiars[12].level}
              src={familiars[12].src}
            />
            <EmptySlot />
            <ResearchCard
              name={familiars[13].name}
              start={familiars[13].start}
              end={familiars[13].end}
              options={familiars[13].level}
              src={familiars[13].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[14].name}
              start={familiars[14].start}
              end={familiars[14].end}
              options={familiars[14].level}
              src={familiars[14].src}
            />
            <EmptySlot />
            <ResearchCard
              name={familiars[15].name}
              start={familiars[15].start}
              end={familiars[15].end}
              options={familiars[15].level}
              src={familiars[15].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[16].name}
              start={familiars[16].start}
              end={familiars[16].end}
              options={familiars[16].level}
              src={familiars[16].src}
            />
            <ResearchCard
              name={familiars[17].name}
              start={familiars[17].start}
              end={familiars[17].end}
              options={familiars[17].level}
              src={familiars[17].src}
            />
            <ResearchCard
              name={familiars[18].name}
              start={familiars[18].start}
              end={familiars[18].end}
              options={familiars[18].level}
              src={familiars[18].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[19].name}
              start={familiars[19].start}
              end={familiars[19].end}
              options={familiars[19].level}
              src={familiars[19].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[20].name}
              start={familiars[20].start}
              end={familiars[20].end}
              options={familiars[20].level}
              src={familiars[20].src}
            />
            <ResearchCard
              name={familiars[21].name}
              start={familiars[21].start}
              end={familiars[21].end}
              options={familiars[21].level}
              src={familiars[21].src}
            />
            <ResearchCard
              name={familiars[22].name}
              start={familiars[22].start}
              end={familiars[22].end}
              options={familiars[22].level}
              src={familiars[22].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={familiars[23].name}
              start={familiars[23].start}
              end={familiars[23].end}
              options={familiars[23].level}
              src={familiars[23].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Familiars;
