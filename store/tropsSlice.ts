import { createSlice } from "@reduxjs/toolkit";
import { TroopsInitialState } from "../types/dataTypes";

const initialState: TroopsInitialState = {
    food: 0,
    rock: 0,
    timber: 0,
    ore: 0,
    time: 0,
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
            power: 4,
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

            }
        },
        sumResources: (state) => {
            const resourceTotal = (tier: any[]) => {
                return tier.map((item: any) => item).reduce((acc: any, curr: any) => {
                    const { food, stone, timber, ore, time, power, gold, qty } = curr;
                    const totalFood = food * qty
                    const totalStone = stone * qty
                    const totalTimber = timber * qty
                    const totalOre = ore * qty
                    const totalTime = time * qty
                    const totalpower = power * qty
                    const totalGold = gold * qty
                    acc.food += totalFood
                    acc.stone += totalStone
                    acc.timber += totalTimber
                    acc.ore += totalOre
                    acc.time += totalTime
                    acc.power += totalpower
                    acc.gold += totalGold
                    return acc;
                }, { food: 0, stone: 0, timber: 0, ore: 0, time: 0, power: 0, gold: 0 });
            }
            const tierOne = resourceTotal(state.tier1)

            const tierTwo = resourceTotal(state.tier2)

            const tierThree = resourceTotal(state.tier3)

            const tierFour = resourceTotal(state.tier4)

            if (state.subsidy > 0) {
                state.food = (tierOne.food + tierTwo.food + tierThree.food + tierFour.food) - ((tierOne.food + tierTwo.food + tierThree.food + tierFour.food) * (state.subsidy / 100))
            } else {
                state.food = (tierOne.food + tierTwo.food + tierThree.food + tierFour.food)
            }

            if (state.subsidy > 0) {
                state.rock = (tierOne.stone + tierTwo.stone + tierThree.stone + tierFour.stone) - ((tierOne.stone + tierTwo.stone + tierThree.stone + tierFour.stone) * (state.subsidy / 100))
            } else {
                state.rock = (tierOne.stone + tierTwo.stone + tierThree.stone + tierFour.stone)
            }

            if (state.subsidy > 0) {
                state.timber = (tierOne.timber + tierTwo.timber + tierThree.timber + tierFour.timber) - ((tierOne.timber + tierTwo.timber + tierThree.timber + tierFour.timber) * (state.subsidy / 100))
            } else {
                state.timber = (tierOne.timber + tierTwo.timber + tierThree.timber + tierFour.timber)
            }

            if (state.subsidy > 0) {
                state.ore = (tierOne.ore + tierTwo.ore + tierThree.ore + tierFour.ore) - ((tierOne.ore + tierTwo.ore + tierThree.ore + tierFour.ore) * (state.subsidy / 100))
            } else {
                state.ore = (tierOne.ore + tierTwo.ore + tierThree.ore + tierFour.ore)
            }

            if (state.subsidy > 0) {
                state.gold = (tierTwo.gold + tierThree.gold + tierFour.gold) - ((tierTwo.gold + tierThree.gold + tierFour.gold) * (state.subsidy / 100))
            } else {
                state.gold = tierTwo.gold + tierThree.gold + tierFour.gold
            }

            state.power = (tierOne.power + tierTwo.power + tierThree.power + tierFour.power)


            if (state.speedBoost > 0) {
                state.time = (tierOne.time + tierTwo.time + tierThree.time + tierFour.time) * (100 / (100 + state.speedBoost))
            } else {
                state.time = (tierOne.time + tierTwo.time + tierThree.time + tierFour.time)
            }

        },
    },

});


export const { setQty, sumResources, setTroopsSpeedBoost, clearValues, setTroopsSubSidy } = tropsSlice.actions;

export default tropsSlice.reducer;
