import { Layout, HowToUse, ClearBtn } from "@/components/index";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import {
  clearValues,
  setCurrentExp,
  setSelect,
  setLevel,
  totalExp,
} from "@/store/commanderSlice";
import { formatResources } from "@/utils/helpers";

const CommanderPage: NextPage = () => {
  const { exp, currentExp, from, goal, commanderRarity } = useSelector(
    (state: any) => state.commander
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (from > 0 && goal > from) {
      dispatch(totalExp());
    }
  }, [from, goal, exp, dispatch]);

  function handleInputChange(e: any) {
    let { name, value, maxLength } = e.target;
    if (value.length >= maxLength) return;

    dispatch(setLevel({ name, value }));
  }

  let slecetedColor;
  if (commanderRarity === "Legendary") {
    slecetedColor = "text-orange-500";
  } else if (commanderRarity === "Epic") {
    slecetedColor = "text-purple-500";
  } else if (commanderRarity === "Elite") {
    slecetedColor = "text-blue-500";
  } else if (commanderRarity === "Advanced") {
    slecetedColor = "text-green-500";
  }

  const handleSelectChange = (e: { target: { value: string } }) => {
    let { value } = e.target;
    dispatch(setSelect({ value }));
  };

  const handleClearValues = () => {
    dispatch(clearValues());
    dispatch(setCurrentExp({ value: 0 }));
  };

  return (
    <>
      <HowToUse title="Commander Exp Calculator">
        <div className="text-md md:text-lg space-y-3 text-gray-100">
          <div className="flex flex-wrap items-center gap-2">
            Select your commander&apos;s rarity.
          </div>

          <div className="flex flex-wrap items-center gap-2">
            Then select your from level.
          </div>

          <div className="flex flex-wrap items-center gap-2">
            Then select your goal level.
          </div>

          <div className="flex flex-wrap items-center gap-2">
            The maximum level is <b>60</b>
          </div>

          <p>
            Add the current commander Exp.
            <span className="ml-1 text-sm">(Optional)</span>
          </p>

          <ul className="space-y-2 text-base">
            <li>
              <p className="text-2xl text-shadow text-yellow-400">• Note •</p>
            </li>
            <li>
              <div className="mt-1 ml-5 text-gray-300 text-sm space-y-1">
                <p>
                  - <b>Commander experience (EXP)</b> allows a commander to
                  reach a higher level.
                </p>

                <p>
                  - EXP can also be gained by applying EXP tomes to the
                  commander.
                </p>
                <p>
                  - EXP can be gained via fighting Barbarians, forts, holy site
                  guardians, and other barbarian events such as Lohar.
                </p>
                <p>- EXP cannot be gained by fighting other players.</p>
              </div>
            </li>
          </ul>
        </div>
      </HowToUse>

      <Layout
        title="Commander Exp Calculator | Rise of Kingdoms (RoK)"
        description="Rise of Kingdoms (RoK) - Commander Calculator. The tool helps calculate exp you need to upgrade your commanders level."
        keywords="rise of kingdoms calculator, rok calculator, rok training, rok troops training, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup"
        canonical="commander-calculator"
      >
        <>
          <div className="flex items-center text-white text-2xl gap-4 justify-center mb-2">
            Total Exp: {formatResources(exp - currentExp)}
            <ClearBtn onClick={handleClearValues} />
          </div>

          <form className="my-2 w-full md:w-1/2 space-y-2">
            <div>
              <label
                htmlFor="commander"
                className="block text-lg font-medium text-gray-300 "
              >
                Commander&apos;s rarity
              </label>
              <select
                onChange={handleSelectChange}
                id="commander"
                name="commander"
                className={`bg-darkCharcoal font-semibold mt-1 block w-full pl-3 pr-10 py-3 text-sm border border-gray-300 focus:outline-none md:text-base rounded-md ${slecetedColor}`}
                value={commanderRarity}
              >
                <option className="text-orange-500">Legendary</option>
                <option className="text-purple-500">Epic</option>
                <option className="text-blue-500">Elite</option>
                <option className="text-green-500">Advanced</option>
              </select>
            </div>

            <div className="bg-darkCharcoal   flex items-center border rounded  border-gray-400 overflow-hidden">
              <label
                htmlFor="CurrentExp"
                className="flex items-center  py-2 px-4 bg-ironGrey text-gray-300"
              >
                Current Exp
              </label>{" "}
              <input
                id="CurrentExp"
                onChange={({ target }) =>
                  dispatch(setCurrentExp({ value: +target.value }))
                }
                type="string"
                value={currentExp}
                placeholder="0"
                onFocus={(e) => e.target.select()}
                className="bg-transparent py-1 text-gray-300 px-4 focus:outline-none flex-1"
              />
            </div>

            <div className="flex items-center bg-darkCharcoal border rounded  border-gray-400 overflow-hidden">
              <label
                htmlFor="level"
                className="py-2 px-4 bg-ironGrey text-gray-300"
              >
                From
              </label>
              <input
                id="level"
                type="string"
                maxLength={3}
                placeholder="0"
                name="from"
                value={from}
                onChange={handleInputChange}
                onFocus={(e) => e.target.select()}
                className="bg-transparent py-1 text-gray-300 px-4 focus:outline-none flex-1 w-full"
              />
              <label className="py-2 px-4 bg-ironGrey text-gray-300">
                Level
              </label>
            </div>

            <div className="flex items-center bg-darkCharcoal border rounded  border-gray-400 overflow-hidden">
              <label
                htmlFor="Goal"
                className="py-2 px-4 bg-ironGrey text-gray-300 "
              >
                Goal
              </label>
              <input
                id="Goal"
                type="string"
                maxLength={3}
                placeholder="0"
                name="goal"
                value={goal}
                onChange={handleInputChange}
                onFocus={(e) => e.target.select()}
                className="bg-transparent py-1 text-gray-300 px-4 focus:outline-none flex-1 w-full"
              />
              <label className="py-2 px-4 bg-ironGrey text-gray-300">
                Level
              </label>
            </div>
          </form>
        </>
      </Layout>
    </>
  );
};

export default CommanderPage;
