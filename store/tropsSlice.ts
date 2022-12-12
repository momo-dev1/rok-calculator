import { createSlice } from "@reduxjs/toolkit";
import { TroopsInitialState, } from "../types/dataTypes";

const initialState: TroopsInitialState = {
    food: 0,
    rock: 0,
    timber: 0,
    ore: 0,
    time: 0,
    might: 0,
    gold: 0,
    speedBoost: 0,
    subsidy: 0,
    tier1: [
        {
            name: "grunt",
            food: 50,
            stone: 0,
            timber: 50,
            ore: 50,
            gold: 0,
            time: 15,
            might: 2,
            qty: 0
        },
        {
            name: "archer",
            food: 50,
            stone: 50,
            timber: 50,
            ore: 0,
            gold: 0,
            time: 15,
            might: 2,
            qty: 0
        },
        {
            name: "cataphract",
            food: 50,
            stone: 50,
            timber: 0,
            ore: 50,
            gold: 0,
            time: 15,
            might: 2,
            qty: 0
        },
        {
            name: "ballista",
            food: 50,
            stone: 50,
            timber: 50,
            ore: 50,
            gold: 0,
            time: 15,
            might: 2,
            qty: 0
        },

    ],
    tier2: [
        {
            name: "gladiator",
            food: 100,
            stone: 0,
            timber: 100,
            ore: 100,
            gold: 5,
            time: 30,
            might: 8,
            qty: 0
        },
        {
            name: "sharpshooter",
            food: 100,
            stone: 100,
            timber: 100,
            ore: 0,
            gold: 5,
            time: 30,
            might: 8,
            qty: 0
        },
        {
            name: "reptilianRider",
            food: 100,
            stone: 100,
            timber: 0,
            ore: 100,
            gold: 5,
            time: 30,
            might: 8,
            qty: 0
        },
        {
            name: "catapult",
            food: 100,
            stone: 100,
            timber: 100,
            ore: 100,
            gold: 5,
            time: 30,
            might: 8,
            qty: 0
        },

    ],
    tier3: [
        {
            name: "royalGuard",
            food: 150,
            stone: 0,
            timber: 150,
            ore: 150,
            gold: 10,
            time: 60,
            might: 24,
            qty: 0
        },
        {
            name: "tealthSniper",
            food: 150,
            stone: 150,
            timber: 150,
            ore: 0,
            gold: 10,
            time: 60,
            might: 24,
            qty: 0
        },
        {
            name: "royalCavalry",
            food: 150,
            stone: 150,
            timber: 0,
            ore: 150,
            gold: 10,
            time: 60,
            might: 24,
            qty: 0
        },
        {
            name: "fireTrebuchet",
            food: 150,
            stone: 150,
            timber: 150,
            ore: 150,
            gold: 10,
            time: 60,
            might: 24,
            qty: 0
        },

    ],
    tier4: [
        {
            name: "heroicFighter",
            food: 1000,
            stone: 0,
            timber: 1000,
            ore: 1000,
            gold: 500,
            time: 120,
            might: 36,
            qty: 0
        },
        {
            name: "heroicCannoner",
            food: 1000,
            stone: 1000,
            timber: 1000,
            ore: 0,
            gold: 500,
            time: 120,
            might: 36,
            qty: 0
        },
        {
            name: "ancientDrake",
            food: 1000,
            stone: 1000,
            timber: 0,
            ore: 1000,
            gold: 500,
            time: 120,
            might: 36,
            qty: 0
        },
        {
            name: "destroyer",
            food: 1000,
            stone: 1000,
            timber: 1000,
            ore: 1000,
            gold: 500,
            time: 120,
            might: 36,
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
                    const { food, stone, timber, ore, time, might, gold, qty } = curr;
                    const totalFood = food * qty
                    const totalStone = stone * qty
                    const totalTimber = timber * qty
                    const totalOre = ore * qty
                    const totalTime = time * qty
                    const totalMight = might * qty
                    const totalGold = gold * qty
                    acc.food += totalFood
                    acc.stone += totalStone
                    acc.timber += totalTimber
                    acc.ore += totalOre
                    acc.time += totalTime
                    acc.might += totalMight
                    acc.gold += totalGold
                    return acc;
                }, { food: 0, stone: 0, timber: 0, ore: 0, time: 0, might: 0, gold: 0 });
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

            state.might = (tierOne.might + tierTwo.might + tierThree.might + tierFour.might)


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
