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

const Defense: NextPage = () => {
  const { food, rock, timber, ore, time, might, gold, speedBoost, defense } =
    useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [defense, speedBoost, dispatch]);

  return (
    <>
      <HowToUse title="Defense" bgColor="rgb(0 2 32 / .6)">
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
        title="Defense | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/defense/"
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
              name={defense[0].name}
              start={defense[0].start}
              end={defense[0].end}
              options={defense[0].level}
              src={defense[0].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[1].name}
              start={defense[1].start}
              end={defense[1].end}
              options={defense[1].level}
              src={defense[1].src}
            />
            <ResearchCard
              name={defense[2].name}
              start={defense[2].start}
              end={defense[2].end}
              options={defense[2].level}
              src={defense[2].src}
            />
            <ResearchCard
              name={defense[3].name}
              start={defense[3].start}
              end={defense[3].end}
              options={defense[3].level}
              src={defense[3].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[4].name}
              start={defense[4].start}
              end={defense[4].end}
              options={defense[4].level}
              src={defense[4].src}
            />
            <ResearchCard
              name={defense[5].name}
              start={defense[5].start}
              end={defense[5].end}
              options={defense[5].level}
              src={defense[5].src}
            />
            <ResearchCard
              name={defense[6].name}
              start={defense[6].start}
              end={defense[6].end}
              options={defense[6].level}
              src={defense[6].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[7].name}
              start={defense[7].start}
              end={defense[7].end}
              options={defense[7].level}
              src={defense[7].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[8].name}
              start={defense[8].start}
              end={defense[8].end}
              options={defense[8].level}
              src={defense[8].src}
            />
            <ResearchCard
              name={defense[9].name}
              start={defense[9].start}
              end={defense[9].end}
              options={defense[9].level}
              src={defense[9].src}
            />
            <ResearchCard
              name={defense[10].name}
              start={defense[10].start}
              end={defense[10].end}
              options={defense[10].level}
              src={defense[10].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[11].name}
              start={defense[11].start}
              end={defense[11].end}
              options={defense[11].level}
              src={defense[11].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[12].name}
              start={defense[12].start}
              end={defense[12].end}
              options={defense[12].level}
              src={defense[12].src}
            />
            <ResearchCard
              name={defense[13].name}
              start={defense[13].start}
              end={defense[13].end}
              options={defense[13].level}
              src={defense[13].src}
            />
            <ResearchCard
              name={defense[14].name}
              start={defense[14].start}
              end={defense[14].end}
              options={defense[14].level}
              src={defense[14].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[15].name}
              start={defense[15].start}
              end={defense[15].end}
              options={defense[15].level}
              src={defense[15].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={defense[16].name}
              start={defense[16].start}
              end={defense[16].end}
              options={defense[16].level}
              src={defense[16].src}
            />
            <ResearchCard
              name={defense[17].name}
              start={defense[17].start}
              end={defense[17].end}
              options={defense[17].level}
              src={defense[17].src}
            />
            <ResearchCard
              name={defense[18].name}
              start={defense[18].start}
              end={defense[18].end}
              options={defense[18].level}
              src={defense[18].src}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Defense;
