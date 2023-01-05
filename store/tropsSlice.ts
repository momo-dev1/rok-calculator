import { createSlice } from "@reduxjs/toolkit";
import { TroopsInitialState } from "../types/dataTypes";

const initialState: TroopsInitialState = {
    food: 0,
    rock: 0,
    timber: 0,
    ore: 0,
    time: 0,
    mgePoints: 0,
    power: 0,
    gold: 0,
    speedBoost: 0,
    subsidy: 0,
    tier1: [
        {
            name: "Warrior",
            food: 50,
            stone: 0,
            timber: 50,
            gold: 0,
            time: 15,
            mgePoints: 5,
            power: 1,
            qty: 0
        },
        {
            name: "Slinger",
            food: 40,
            stone: 0,
            timber: 60,
            gold: 0,
            time: 15,
            mgePoints: 5,
            power: 1,
            qty: 0
        },
        {
            name: "Horseman",
            food: 60,
            stone: 0,
            timber: 40,
            gold: 0,
            time: 15,
            mgePoints: 5,
            power: 1,
            qty: 0
        },
        {
            name: "BatteringRam",
            food: 60,
            stone: 0,
            timber: 60,
            gold: 0,
            time: 15,
            mgePoints: 5,
            power: 1,
            qty: 0
        },

    ],
    tier2: [
        {
            name: "Swordsman",
            food: 100,
            stone: 0,
            timber: 100,
            gold: 0,
            time: 30,
            mgePoints: 10,
            power: 2,
            qty: 0
        },
        {
            name: "Bowman",
            food: 0,
            stone: 75,
            timber: 100,
            gold: 0,
            time: 30,
            mgePoints: 10,
            power: 2,
            qty: 0
        },
        {
            name: "Light Cavalry",
            food: 100,
            stone: 75,
            timber: 0,
            gold: 0,
            time: 30,
            mgePoints: 10,
            power: 2,
            qty: 0
        },
        {
            name: "Arcuballista",
            food: 65,
            stone: 50,
            timber: 65,
            gold: 0,
            time: 30,
            mgePoints: 10,
            power: 2,
            qty: 0
        },

    ],
    tier3: [
        {
            name: "Spearman",
            food: 150,
            stone: 0,
            timber: 150,
            gold: 10,
            time: 60,
            mgePoints: 20,
            power: 3,
            qty: 0
        },
        {
            name: "Composite Bowman",
            food: 0,
            stone: 112,
            timber: 150,
            gold: 10,
            time: 60,
            mgePoints: 20,
            power: 3,
            qty: 0
        },
        {
            name: "Heavy Cavalry",
            food: 150,
            stone: 112,
            timber: 0,
            gold: 10,
            time: 60,
            mgePoints: 20,
            power: 3,
            qty: 0
        },
        {
            name: "Mangonel",
            food: 100,
            stone: 75,
            timber: 100,
            gold: 10,
            time: 60,
            mgePoints: 20,
            power: 3,
            qty: 0
        },

    ],
    tier4: [
        {
            name: "Long Swordsman",
            food: 300,
            timber: 300,
            stone: 0,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "CrossBowman",
            food: 0,
            timber: 300,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Knight",
            food: 300,
            timber: 0,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Ballista",
            food: 200,
            timber: 200,
            stone: 150,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Legionary",
            food: 300,
            timber: 300,
            stone: 0,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Teutonic Knight",
            food: 300,
            timber: 0,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "LongBowman",
            food: 0,
            timber: 300,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Throwing Axeman",
            food: 300,
            timber: 300,
            stone: 0,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Conquistador",
            food: 300,
            timber: 0,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Chu-Ko-Nu",
            food: 0,
            timber: 300,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Samurai",
            food: 300,
            timber: 300,
            stone: 0,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Hwarang",
            food: 0,
            timber: 300,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Mamluk",
            food: 300,
            timber: 0,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Janissary",
            food: 0,
            timber: 300,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
        {
            name: "Cataphract",
            food: 300,
            timber: 0,
            stone: 225,
            gold: 20,
            time: 80,
            mgePoints: 40,
            power: 4,
            qty: 0
        },
    ],
    tier5: [
        {
            name: 'Royal Guard',
            food: 800,
            timber: 800,
            stone: 0,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Royal Crossbowman',
            food: 0,
            timber: 800,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Royal Knight',
            food: 800,
            timber: 0,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Trebuchet',
            food: 500,
            timber: 500,
            stone: 400,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Legionary',
            food: 800,
            timber: 800,
            stone: 0,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Teutonic Knight',
            food: 800,
            timber: 0,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Longbowman',
            food: 0,
            timber: 800,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Throwing Axeman',
            food: 800,
            timber: 800,
            stone: 0,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Conquistador',
            food: 800,
            timber: 0,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Chu-Ko-Nu',
            food: 0,
            timber: 800,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Samurai',
            food: 800,
            timber: 800,
            stone: 0,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Hwarang',
            food: 0,
            timber: 800,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Mamluk',
            food: 800,
            timber: 0,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Janissary',
            food: 0,
            timber: 800,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
        {
            name: 'Elite Cataphract',
            food: 800,
            timber: 0,
            stone: 600,
            gold: 400,
            time: 120,
            mgePoints: 100,
            power: 10,
            qty: 0
        },
    ]
};

const tropsSlice = createSlice({
    name: 'troops',
    initialState,
    reducers: {
        clearValues: (state) => {
            return initialState
        },
        setTroopsSpeedBoost: (state, { payload: { value } }) => {
            state.speedBoost = +value
        },
        setTroopsSubSidy: (state, { payload: { value } }) => {
            state.subsidy = +value
        },
        setQty: (state, { payload: { name, value } }) => {
            const { tier1, tier2, tier3, tier4, tier5 } = state;

            let targetTier;
            if (tier1.find((item) => item.name.includes(name))) {
                targetTier = tier1;
            } else if (tier2.find((item) => item.name.includes(name))) {
                targetTier = tier2;
            } else if (tier3.find((item) => item.name.includes(name))) {
                targetTier = tier3;
            } else if (tier4.find((item) => item.name.includes(name))) {
                targetTier = tier4;
            } else if (tier5.find((item) => item.name.includes(name))) {
                targetTier = tier5;
            }

            if (targetTier) {
                const idx = targetTier.findIndex((item) => item.name.includes(name));
                targetTier[idx].qty = +value.replace(/,/g, "");
            }
        },
        sumResources: (state) => {
            const resourceTotal = (tier: any[]) => {
                return tier.map((item: any) => item).reduce((acc: any, curr: any) => {
                    const { food, stone, timber, ore, time, mgePoints, power, gold, qty } = curr;
                    const totalFood = food * qty
                    const totalStone = stone * qty
                    const totalTimber = timber * qty
                    const totalOre = ore * qty
                    const totalTime = time * qty
                    const totalMgePoints = mgePoints * qty
                    const totalpower = power * qty
                    const totalGold = gold * qty
                    acc.food += totalFood
                    acc.stone += totalStone
                    acc.timber += totalTimber
                    acc.ore += totalOre
                    acc.time += totalTime
                    acc.mgePoints += totalMgePoints
                    acc.power += totalpower
                    acc.gold += totalGold
                    return acc;
                }, { food: 0, stone: 0, timber: 0, ore: 0, time: 0, mgePoints: 0, power: 0, gold: 0 });
            }
            const tierOne = resourceTotal(state.tier1)

            const tierTwo = resourceTotal(state.tier2)

            const tierThree = resourceTotal(state.tier3)

            const tierFour = resourceTotal(state.tier4)

            const tierFive = resourceTotal(state.tier5)

            if (state.subsidy > 0) {
                state.food = (tierOne.food + tierTwo.food + tierThree.food + tierFour.food + tierFive.food) - ((tierOne.food + tierTwo.food + tierThree.food + tierFour.food + tierFive.food + tierFive.food) * (state.subsidy / 100))
            } else {
                state.food = (tierOne.food + tierTwo.food + tierThree.food + tierFour.food + tierFive.food)
            }

            if (state.subsidy > 0) {
                state.rock = (tierOne.stone + tierTwo.stone + tierThree.stone + tierFour.stone + tierFive.stone) - ((tierOne.stone + tierTwo.stone + tierThree.stone + tierFour.stone + tierFive.stone) * (state.subsidy / 100))
            } else {
                state.rock = (tierOne.stone + tierTwo.stone + tierThree.stone + tierFour.stone + tierFive.stone)
            }

            if (state.subsidy > 0) {
                state.timber = (tierOne.timber + tierTwo.timber + tierThree.timber + tierFour.timber + tierFive.timber) - ((tierOne.timber + tierTwo.timber + tierThree.timber + tierFour.timber + tierFive.timber) * (state.subsidy / 100))
            } else {
                state.timber = (tierOne.timber + tierTwo.timber + tierThree.timber + tierFour.timber + tierFive.timber)
            }

            if (state.subsidy > 0) {
                state.gold = (tierTwo.gold + tierThree.gold + tierFour.gold + tierFive.gold) - ((tierTwo.gold + tierThree.gold + tierFour.gold + tierFive.gold) * (state.subsidy / 100))
            } else {
                state.gold = tierTwo.gold + tierThree.gold + tierFour.gold + tierFive.gold
            }

            state.power = (tierOne.power + tierTwo.power + tierThree.power + tierFour.power + tierFive.power)

            state.mgePoints = (tierOne.mgePoints + tierTwo.mgePoints + tierThree.mgePoints + tierFour.mgePoints + tierFive.mgePoints)

            if (state.speedBoost > 0) {
                state.time = (tierOne.time + tierTwo.time + tierThree.time + tierFour.time + tierFive.time) * (100 / (100 + state.speedBoost))
            } else {
                state.time = (tierOne.time + tierTwo.time + tierThree.time + tierFour.time + tierFive.time)
            }

        },
    },

});


export const { setQty, sumResources, setTroopsSpeedBoost, clearValues, setTroopsSubSidy } = tropsSlice.actions;

export default tropsSlice.reducer;
