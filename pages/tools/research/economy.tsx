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

const Economy: NextPage = () => {
  const { food, rock, timber, ore, time, might, gold, speedBoost, economy } =
    useSelector((state: any) => state.research);
  const { offset } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalResources());
  }, [economy, speedBoost, dispatch]);

  return (
    <>
      <HowToUse title="Economy" bgColor="rgb(0 2 32 / .6)">
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
        title="Economy | Research Calculator"
        description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
        keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
        canonical="tools/research/economy/"
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
              name={economy[0].name}
              start={economy[0].start}
              end={economy[0].end}
              options={economy[0].level}
              src={economy[0].src}
            />
            <EmptySlot />
            <ResearchCard
              name={economy[1].name}
              start={economy[1].start}
              end={economy[1].end}
              options={economy[1].level}
              src={economy[1].src}
            />
            <EmptySlot />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={economy[2].name}
              start={economy[2].start}
              end={economy[2].end}
              options={economy[2].level}
              src={economy[2].src}
            />
            <ResearchCard
              name={economy[3].name}
              start={economy[3].start}
              end={economy[3].end}
              options={economy[3].level}
              src={economy[3].src}
            />
            <ResearchCard
              name={economy[4].name}
              start={economy[4].start}
              end={economy[4].end}
              options={economy[4].level}
              src={economy[4].src}
            />
            <ResearchCard
              name={economy[5].name}
              start={economy[5].start}
              end={economy[5].end}
              options={economy[5].level}
              src={economy[5].src}
            />
          </div>

          <div className="row gap-7 flex flex-wrap justify-center">
            <ResearchCard
              name={economy[6].name}
              start={economy[6].start}
              end={economy[6].end}
              options={economy[6].level}
              src={economy[6].src}
            />
            <EmptySlot />
            <ResearchCard
              name={economy[7].name}
              start={economy[7].start}
              end={economy[7].end}
              options={economy[7].level}
              src={economy[7].src}
            />
            <EmptySlot />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Economy;
