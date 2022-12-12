import { useEffect } from "react";
import type { NextPage } from "next";
import {
  Layout,
  ClearBtn,
  HowToUse,
  Resources,
  EmptySlot,
  SpeedBoost,
  ResearchCard,
} from "@/components/index";
import { useDispatch, useSelector } from "react-redux";
import { clearValues, totalResources } from "@/store/researchSlice";
import { FromIcon, FromFiveIcon, GoalIcon } from "public/assets";

const Military: NextPage = () => {
  const { food, rock, timber, ore, time, might, gold, speedBoost, military } =
    useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalResources());
  }, [military, speedBoost, dispatch]);

  return (
    <>
      <HowToUse title="Military" bgColor="rgb(0 2 32 / .6)">
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
        title="Military | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/military/"
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
          <div className="row">
            <ResearchCard
              name={military[0].name}
              start={military[0].start}
              end={military[0].end}
              options={military[0].level}
              src={military[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[1].name}
              start={military[1].start}
              end={military[1].end}
              options={military[1].level}
              src={military[1].src}
            />
            <ResearchCard
              name={military[2].name}
              start={military[2].start}
              end={military[2].end}
              options={military[2].level}
              src={military[2].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[3].name}
              start={military[3].start}
              end={military[3].end}
              options={military[3].level}
              src={military[3].src}
            />
            <ResearchCard
              name={military[4].name}
              start={military[4].start}
              end={military[4].end}
              options={military[4].level}
              src={military[4].src}
            />
            <ResearchCard
              name={military[5].name}
              start={military[5].start}
              end={military[5].end}
              options={military[5].level}
              src={military[5].src}
            />
            <ResearchCard
              name={military[6].name}
              start={military[6].start}
              end={military[6].end}
              options={military[6].level}
              src={military[6].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[7].name}
              start={military[7].start}
              end={military[7].end}
              options={military[7].level}
              src={military[7].src}
            />
            <ResearchCard
              name={military[8].name}
              start={military[8].start}
              end={military[8].end}
              options={military[8].level}
              src={military[8].src}
            />
            <ResearchCard
              name={military[9].name}
              start={military[9].start}
              end={military[9].end}
              options={military[9].level}
              src={military[9].src}
            />
            <ResearchCard
              name={military[10].name}
              start={military[10].start}
              end={military[10].end}
              options={military[10].level}
              src={military[10].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[11].name}
              start={military[11].start}
              end={military[11].end}
              options={military[11].level}
              src={military[11].src}
            />
            <ResearchCard
              name={military[12].name}
              start={military[12].start}
              end={military[12].end}
              options={military[12].level}
              src={military[12].src}
            />
            <ResearchCard
              name={military[13].name}
              start={military[13].start}
              end={military[13].end}
              options={military[13].level}
              src={military[13].src}
            />
            <ResearchCard
              name={military[14].name}
              start={military[14].start}
              end={military[14].end}
              options={military[14].level}
              src={military[14].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[15].name}
              start={military[15].start}
              end={military[15].end}
              options={military[15].level}
              src={military[15].src}
            />
            <ResearchCard
              name={military[16].name}
              start={military[16].start}
              end={military[16].end}
              options={military[16].level}
              src={military[16].src}
            />
            <ResearchCard
              name={military[17].name}
              start={military[17].start}
              end={military[17].end}
              options={military[17].level}
              src={military[17].src}
            />
            <ResearchCard
              name={military[18].name}
              start={military[18].start}
              end={military[18].end}
              options={military[18].level}
              src={military[18].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[19].name}
              start={military[19].start}
              end={military[19].end}
              options={military[19].level}
              src={military[19].src}
            />
            <ResearchCard
              name={military[20].name}
              start={military[20].start}
              end={military[20].end}
              options={military[20].level}
              src={military[20].src}
            />
            <ResearchCard
              name={military[21].name}
              start={military[21].start}
              end={military[21].end}
              options={military[21].level}
              src={military[21].src}
            />
            <ResearchCard
              name={military[22].name}
              start={military[22].start}
              end={military[22].end}
              options={military[22].level}
              src={military[22].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[23].name}
              start={military[23].start}
              end={military[23].end}
              options={military[23].level}
              src={military[23].src}
            />
            <ResearchCard
              name={military[24].name}
              start={military[24].start}
              end={military[24].end}
              options={military[24].level}
              src={military[24].src}
            />
            <ResearchCard
              name={military[25].name}
              start={military[25].start}
              end={military[25].end}
              options={military[25].level}
              src={military[25].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[26].name}
              start={military[26].start}
              end={military[26].end}
              options={military[26].level}
              src={military[26].src}
            />
            <ResearchCard
              name={military[27].name}
              start={military[27].start}
              end={military[27].end}
              options={military[27].level}
              src={military[27].src}
            />
            <ResearchCard
              name={military[28].name}
              start={military[28].start}
              end={military[28].end}
              options={military[28].level}
              src={military[28].src}
            />
            <ResearchCard
              name={military[29].name}
              start={military[29].start}
              end={military[29].end}
              options={military[29].level}
              src={military[29].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[30].name}
              start={military[30].start}
              end={military[30].end}
              options={military[30].level}
              src={military[30].src}
            />
            <EmptySlot />
            <ResearchCard
              name={military[31].name}
              start={military[31].start}
              end={military[31].end}
              options={military[31].level}
              src={military[31].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[32].name}
              start={military[32].start}
              end={military[32].end}
              options={military[32].level}
              src={military[32].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={military[33].name}
              start={military[33].start}
              end={military[33].end}
              options={military[33].level}
              src={military[33].src}
            />
            <ResearchCard
              name={military[34].name}
              start={military[34].start}
              end={military[34].end}
              options={military[34].level}
              src={military[34].src}
            />
            <ResearchCard
              name={military[35].name}
              start={military[35].start}
              end={military[35].end}
              options={military[35].level}
              src={military[35].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Military;
