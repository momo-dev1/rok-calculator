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
            food: 20,
            stone: 0,
            timber: 20,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Slinger",
            food: 16,
            stone: 0,
            timber: 24,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Horseman",
            food: 24,
            stone: 0,
            timber: 16,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "BatteringRam",
            food: 24,
            stone: 0,
            timber: 24,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },

    ],
    tier2: [
        {
            name: "Swordsman",
            food: 40,
            stone: 0,
            timber: 40,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Bowman",
            food: 0,
            stone: 30,
            timber: 40,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Light Cavalry",
            food: 40,
            stone: 30,
            timber: 0,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Arcuballista",
            food: 26,
            stone: 30,
            timber: 26,
            gold: 0,
            time: 1,
            mgePoints: 0,
            power: 0,
            qty: 0
        },

    ],
    tier3: [
        {
            name: "Spearman",
            food: 60,
            stone: 0,
            timber: 60,
            gold: 4,
            time: 2,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Composite Bowman",
            food: 0,
            stone: 44,
            timber: 60,
            gold: 4,
            time: 2,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Heavy Cavalry",
            food: 60,
            stone: 44,
            timber: 0,
            gold: 4,
            time: 2,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Mangonel",
            food: 40,
            stone: 30,
            timber: 40,
            gold: 4,
            time: 2,
            mgePoints: 0,
            power: 0,
            qty: 0
        },

    ],
    tier4: [
        {
            name: "Long Swordsman",
            food: 120,
            timber: 120,
            stone: 0,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "CrossBowman",
            food: 0,
            timber: 120,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Knight",
            food: 120,
            timber: 0,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Ballista",
            food: 80,
            timber: 80,
            stone: 60,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Legionary",
            food: 120,
            timber: 120,
            stone: 0,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Teutonic Knight",
            food: 120,
            timber: 0,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "LongBowman",
            food: 0,
            timber: 120,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Throwing Axeman",
            food: 120,
            timber: 120,
            stone: 0,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Conquistador",
            food: 120,
            timber: 0,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Chu-Ko-Nu",
            food: 0,
            timber: 120,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Samurai",
            food: 120,
            timber: 120,
            stone: 0,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Hwarang",
            food: 0,
            timber: 120,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Mamluk",
            food: 120,
            timber: 0,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Janissary",
            food: 0,
            timber: 120,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: "Cataphract",
            food: 120,
            timber: 0,
            stone: 90,
            gold: 8,
            time: 3,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
    ],
    tier5: [
        {
            name: 'Royal Guard',
            food: 320,
            timber: 320,
            stone: 0,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Royal Crossbowman',
            food: 0,
            timber: 320,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Royal Knight',
            food: 320,
            timber: 0,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Trebuchet',
            food: 200,
            timber: 200,
            stone: 160,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Legionary',
            food: 320,
            timber: 320,
            stone: 0,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Teutonic Knight',
            food: 320,
            timber: 0,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Longbowman',
            food: 0,
            timber: 320,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Throwing Axeman',
            food: 320,
            timber: 320,
            stone: 0,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Conquistador',
            food: 320,
            timber: 0,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Chu-Ko-Nu',
            food: 0,
            timber: 320,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Samurai',
            food: 320,
            timber: 320,
            stone: 0,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Hwarang',
            food: 0,
            timber: 320,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Mamluk',
            food: 320,
            timber: 0,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Janissary',
            food: 0,
            timber: 320,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
        {
            name: 'Elite Cataphract',
            food: 320,
            timber: 0,
            stone: 240,
            gold: 160,
            time: 4,
            mgePoints: 0,
            power: 0,
            qty: 0
        },
    ]
};

const tropsSlice = createSlice({
    name: 'trops',
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
            if (state.tier1.find(item => item.name.includes(name))) {
                let idx = state.tier1.findIndex(item => item.name.includes(name))
                state.tier1[idx].qty = +(value.replace(/,/g, ""))
            } else if (state.tier2.find(item => item.name.includes(name))) {
                let idx = state.tier2.findIndex(item => item.name.includes(name))
                state.tier2[idx].qty = +(value.replace(/,/g, ""))
            } else if (state.tier3.find(item => item.name.includes(name))) {
                let idx = state.tier3.findIndex(item => item.name.includes(name))
                state.tier3[idx].qty = +(value.replace(/,/g, ""))
            } else if (state.tier4.find(item => item.name.includes(name))) {
                let idx = state.tier4.findIndex(item => item.name.includes(name))
                state.tier4[idx].qty = +(value.replace(/,/g, ""))
            } else if (state.tier5.find(item => item.name.includes(name))) {
                let idx = state.tier5.findIndex(item => item.name.includes(name))
                state.tier5[idx].qty = +(value.replace(/,/g, ""))
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