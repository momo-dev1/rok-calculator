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

const Gear: NextPage = () => {
  const { food, rock, timber, ore, time, might, gold, speedBoost, gear } =
    useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [gear, speedBoost, dispatch]);
  return (
    <>
      <HowToUse title="Gear" bgColor="rgb(0 2 32 / .6)">
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
        title="Gear | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/gear/"
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
              name={gear[0].name}
              start={gear[0].start}
              end={gear[0].end}
              options={gear[0].level}
              src={gear[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[1].name}
              start={gear[1].start}
              end={gear[1].end}
              options={gear[1].level}
              src={gear[1].src}
            />
            <ResearchCard
              name={gear[2].name}
              start={gear[2].start}
              end={gear[2].end}
              options={gear[2].level}
              src={gear[2].src}
            />
            <ResearchCard
              name={gear[3].name}
              start={gear[3].start}
              end={gear[3].end}
              options={gear[3].level}
              src={gear[3].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[4].name}
              start={gear[4].start}
              end={gear[4].end}
              options={gear[4].level}
              src={gear[4].src}
            />
            <EmptySlot />
            <ResearchCard
              name={gear[5].name}
              start={gear[5].start}
              end={gear[5].end}
              options={gear[5].level}
              src={gear[5].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[6].name}
              start={gear[6].start}
              end={gear[6].end}
              options={gear[6].level}
              src={gear[6].src}
            />
            <EmptySlot />
            <ResearchCard
              name={gear[7].name}
              start={gear[7].start}
              end={gear[7].end}
              options={gear[7].level}
              src={gear[7].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[8].name}
              start={gear[8].start}
              end={gear[8].end}
              options={gear[8].level}
              src={gear[8].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[9].name}
              start={gear[9].start}
              end={gear[9].end}
              options={gear[9].level}
              src={gear[9].src}
            />
            <ResearchCard
              name={gear[10].name}
              start={gear[10].start}
              end={gear[10].end}
              options={gear[10].level}
              src={gear[10].src}
            />
            <ResearchCard
              name={gear[11].name}
              start={gear[11].start}
              end={gear[11].end}
              options={gear[11].level}
              src={gear[11].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[12].name}
              start={gear[12].start}
              end={gear[12].end}
              options={gear[12].level}
              src={gear[12].src}
            />
            <ResearchCard
              name={gear[13].name}
              start={gear[13].start}
              end={gear[13].end}
              options={gear[13].level}
              src={gear[13].src}
            />
            <ResearchCard
              name={gear[14].name}
              start={gear[14].start}
              end={gear[14].end}
              options={gear[14].level}
              src={gear[14].src}
            />
            <ResearchCard
              name={gear[15].name}
              start={gear[15].start}
              end={gear[15].end}
              options={gear[15].level}
              src={gear[15].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[16].name}
              start={gear[16].start}
              end={gear[16].end}
              options={gear[16].level}
              src={gear[16].src}
            />
            <ResearchCard
              name={gear[17].name}
              start={gear[17].start}
              end={gear[17].end}
              options={gear[17].level}
              src={gear[17].src}
            />
            <ResearchCard
              name={gear[18].name}
              start={gear[18].start}
              end={gear[18].end}
              options={gear[18].level}
              src={gear[18].src}
            />
            <ResearchCard
              name={gear[19].name}
              start={gear[19].start}
              end={gear[19].end}
              options={gear[19].level}
              src={gear[19].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[20].name}
              start={gear[20].start}
              end={gear[20].end}
              options={gear[20].level}
              src={gear[20].src}
            />
            <ResearchCard
              name={gear[21].name}
              start={gear[21].start}
              end={gear[21].end}
              options={gear[21].level}
              src={gear[21].src}
            />
            <ResearchCard
              name={gear[22].name}
              start={gear[22].start}
              end={gear[22].end}
              options={gear[22].level}
              src={gear[22].src}
            />
            <ResearchCard
              name={gear[23].name}
              start={gear[23].start}
              end={gear[23].end}
              options={gear[23].level}
              src={gear[23].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[24].name}
              start={gear[24].start}
              end={gear[24].end}
              options={gear[24].level}
              src={gear[24].src}
            />
            <EmptySlot />
            <ResearchCard
              name={gear[25].name}
              start={gear[25].start}
              end={gear[25].end}
              options={gear[25].level}
              src={gear[25].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={gear[26].name}
              start={gear[26].start}
              end={gear[26].end}
              options={gear[26].level}
              src={gear[26].src}
            />
            <ResearchCard
              name={gear[27].name}
              start={gear[27].start}
              end={gear[27].end}
              options={gear[27].level}
              src={gear[27].src}
            />
            <ResearchCard
              name={gear[28].name}
              start={gear[28].start}
              end={gear[28].end}
              options={gear[28].level}
              src={gear[28].src}
            />
            <ResearchCard
              name={gear[29].name}
              start={gear[29].start}
              end={gear[29].end}
              options={gear[29].level}
              src={gear[29].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Gear;
