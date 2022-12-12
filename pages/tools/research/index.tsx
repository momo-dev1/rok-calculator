/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "@/components/index";
import { ResearchCategories } from "@/utils/research/ResearchCategories";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearValues } from "@/store/researchSlice";

const ResearchList = () => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearValues());
  }, [pathname, dispatch]);

  return (
    <Layout
      title="Research List"
      bgColor="rgb(124 93 62 / .7)"
      description="Lords Mobile Research Calculator, Calculate the time and resources you need to complete your research and increase your turf boosts"
      keywords="research caluclator,lords mobile,lm,rss,time,speeds,might,resources,tree,categories,t4,t5,tomes,anima,military,economey,defense,upgrade,monster hunt,army leadership,command,gear,wow,wonders,familiatrs,battles"
      canonical="tools/research/"
    >
      <div className="md:grid-cols-4 md:p-10 grid grid-cols-3 gap-6">
        {ResearchCategories.map((item: any) => {
          return (
            <Link
              key={item.name}
              href={`/tools/research/${item.name}`}
              className="overflow-hidden"
            >
              <a>
                <div className="text-white max-w-[217px] cursor-pointer">
                  <img
                    width={217}
                    height={217}
                    placeholder="blur"
                    className="md:rounded-xl rounded-md"
                    src={item.src.src}
                    alt={`${item.name} img`}
                  />
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default ResearchList;
