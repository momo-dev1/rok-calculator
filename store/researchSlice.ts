import { createSlice } from "@reduxjs/toolkit";
import { ResearchInitialState } from "../types/dataTypes";
import {
    MilitaryData,
    EconomyData,
    DefenseData,
    MonsterHunt,
    UpgradeDefense,
    UpgradeMilitary,
    ArmyLeadership,
    MilitaryCommand,
    Gear,
    WonderBattles,
    AdvancedWonderBattles,
    Familiars
} from "@/utils/research";

const initialState: ResearchInitialState = {
    food: 0,
    rock: 0,
    timber: 0,
    ore: 0,
    time: 0,
    gold: 0,
    tome: 0,
    anima: 0,
    speedBoost: 0,
    military: MilitaryData,
    economy: EconomyData,
    defense: DefenseData,
    monsterHunt: MonsterHunt,
    upgradeDefense: UpgradeDefense,
    upgradeMilitary: UpgradeMilitary,
    armyLeadership: ArmyLeadership,
    militaryCommand: MilitaryCommand,
    gear: Gear,
    wonderBattles: WonderBattles,
    advancedWonderBattles: AdvancedWonderBattles,
    familiars: Familiars
}

const researchSlice = createSlice({
    name: 'research',
    initialState,
    reducers: {
        clearValues: (state) => {
            return initialState
        },
        setResearchSpeedBoost: (state, { payload: { value } }) => {
            state.speedBoost = +value
        },
        setLevel: (state, { payload: { name, value, label } }) => {
            if (state.military.find(item => item.name.includes(name))) {
                let idx = state.military.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.military[idx].start = +value
                }
                if (label === "to") {
                    state.military[idx].end = +value
                }
            } else if (state.economy.find(item => item.name.includes(name))) {
                let idx = state.economy.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.economy[idx].start = +value
                }
                if (label === "to") {
                    state.economy[idx].end = +value
                }
            } else if (state.defense.find(item => item.name.includes(name))) {
                let idx = state.defense.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.defense[idx].start = +value
                }
                if (label === "to") {
                    state.defense[idx].end = +value
                }
            } else if (state.monsterHunt.find(item => item.name.includes(name))) {
                let idx = state.monsterHunt.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.monsterHunt[idx].start = +value
                }
                if (label === "to") {
                    state.monsterHunt[idx].end = +value
                }
            } else if (state.upgradeDefense.find(item => item.name.includes(name))) {
                let idx = state.upgradeDefense.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.upgradeDefense[idx].start = +value
                }
                if (label === "to") {
                    state.upgradeDefense[idx].end = +value
                }
            } else if (state.upgradeMilitary.find(item => item.name.includes(name))) {
                let idx = state.upgradeMilitary.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.upgradeMilitary[idx].start = +value
                }
                if (label === "to") {
                    state.upgradeMilitary[idx].end = +value
                }
            } else if (state.armyLeadership.find(item => item.name.includes(name))) {
                let idx = state.armyLeadership.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.armyLeadership[idx].start = +value
                }
                if (label === "to") {
                    state.armyLeadership[idx].end = +value
                }
            } else if (state.militaryCommand.find(item => item.name.includes(name))) {
                let idx = state.militaryCommand.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.militaryCommand[idx].start = +value
                }
                if (label === "to") {
                    state.militaryCommand[idx].end = +value
                }
            } else if (state.gear.find(item => item.name.includes(name))) {
                let idx = state.gear.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.gear[idx].start = +value
                }
                if (label === "to") {
                    state.gear[idx].end = +value
                }
            } else if (state.wonderBattles.find(item => item.name.includes(name))) {
                let idx = state.wonderBattles.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.wonderBattles[idx].start = +value
                }
                if (label === "to") {
                    state.wonderBattles[idx].end = +value
                }
            } else if (state.advancedWonderBattles.find(item => item.name.includes(name))) {
                let idx = state.advancedWonderBattles.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.advancedWonderBattles[idx].start = +value
                }
                if (label === "to") {
                    state.advancedWonderBattles[idx].end = +value
                }
            } else if (state.familiars.find(item => item.name.includes(name))) {
                let idx = state.familiars.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.familiars[idx].start = +value
                }
                if (label === "to") {
                    state.familiars[idx].end = +value
                }
            }
        },
        sumResources: (state, { payload: { name, label } }) => {
            function sumResource(researchName: any[], idx: number) {
                let start = researchName[idx].start
                let end = researchName[idx].end
                if (end !== 0 && start >= end) {
                    return initialState
                }
                if (label === "to" && end === 0) {

                    researchName[idx].totalFood = 0
                    researchName[idx].totalRock = 0
                    researchName[idx].totalTimber = 0
                    researchName[idx].totalOre = 0
                    researchName[idx].totalGold = 0
                    researchName[idx].totalTime = 0
                    researchName[idx].totalTome = 0
                    researchName[idx].totalAnima = 0
                    researchName[idx].start = 0
                    return
                }
                if (end !== 0) {
                    let food = researchName[idx].food.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let rock = researchName[idx].rock.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let timber = researchName[idx].timber.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let ore = researchName[idx].ore.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let gold = researchName[idx].gold.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let time = researchName[idx].time.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let tome = researchName[idx]?.tomes?.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let anima = researchName[idx]?.anima?.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    researchName[idx].totalFood = food
                    researchName[idx].totalRock = rock
                    researchName[idx].totalTimber = timber
                    researchName[idx].totalOre = ore
                    researchName[idx].totalGold = gold
                    researchName[idx].totalTime = time
                    researchName[idx].totalTome = tome
                    researchName[idx].totalAnima = anima
                }
            }
            if (state.military.find(item => item.name.includes(name))) {
                const idx = state.military.findIndex(item => item.name === name)
                sumResource(state.military, idx)

            } else if (state.economy.find(item => item.name.includes(name))) {
                const idx = state.economy.findIndex(item => item.name === name)
                sumResource(state.economy, idx)

            } else if (state.defense.find(item => item.name.includes(name))) {
                const idx = state.defense.findIndex(item => item.name === name)
                sumResource(state.defense, idx)

            } else if (state.monsterHunt.find(item => item.name.includes(name))) {
                const idx = state.monsterHunt.findIndex(item => item.name === name)
                sumResource(state.monsterHunt, idx)

            } else if (state.upgradeDefense.find(item => item.name.includes(name))) {
                const idx = state.upgradeDefense.findIndex(item => item.name === name)
                sumResource(state.upgradeDefense, idx)

            } else if (state.upgradeDefense.find(item => item.name.includes(name))) {
                const idx = state.upgradeDefense.findIndex(item => item.name === name)
                sumResource(state.upgradeDefense, idx)

            } else if (state.upgradeMilitary.find(item => item.name.includes(name))) {
                const idx = state.upgradeMilitary.findIndex(item => item.name === name)
                sumResource(state.upgradeMilitary, idx)

            } else if (state.armyLeadership.find(item => item.name.includes(name))) {
                const idx = state.armyLeadership.findIndex(item => item.name === name)
                sumResource(state.armyLeadership, idx)

            } else if (state.militaryCommand.find(item => item.name.includes(name))) {
                const idx = state.militaryCommand.findIndex(item => item.name === name)
                sumResource(state.militaryCommand, idx)

            } else if (state.gear.find(item => item.name.includes(name))) {
                const idx = state.gear.findIndex(item => item.name === name)
                sumResource(state.gear, idx)

            } else if (state.wonderBattles.find(item => item.name.includes(name))) {
                const idx = state.wonderBattles.findIndex(item => item.name === name)
                sumResource(state.wonderBattles, idx)

            } else if (state.advancedWonderBattles.find(item => item.name.includes(name))) {
                const idx = state.advancedWonderBattles.findIndex(item => item.name === name)
                sumResource(state.advancedWonderBattles, idx)

            } else if (state.familiars.find(item => item.name.includes(name))) {
                const idx = state.familiars.findIndex(item => item.name === name)
                sumResource(state.familiars, idx)

            }
        },

        totalResources: (state) => {
            const resourceTotal = (researchName: any[]) => {
                return researchName.reduce((acc, curr) => {
                    const { totalFood, totalRock, totalTimber, totalOre, totalTime, totalGold } = curr;
                    acc.food += totalFood
                    acc.stone += totalRock
                    acc.timber += totalTimber
                    acc.ore += totalOre
                    acc.time += totalTime
                    acc.gold += totalGold
                    acc.tome += curr?.totalTome
                    acc.anima += curr?.totalAnima
                    return acc;
                }, { food: 0, stone: 0, timber: 0, ore: 0, time: 0, gold: 0, tome: 0, anima: 0 });
            }
            if (state.military.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.military)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.economy.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.economy)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.defense.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.defense)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.monsterHunt.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.monsterHunt)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.upgradeDefense.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.upgradeDefense)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.upgradeMilitary.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.upgradeMilitary)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.armyLeadership.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.armyLeadership)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.militaryCommand.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.militaryCommand)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.gear.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.gear)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.wonderBattles.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.wonderBattles)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                state.tome = resources.tome
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.advancedWonderBattles.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.advancedWonderBattles)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                state.tome = resources.tome
                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else if (state.familiars.some(item => item.totalTime > 0)) {
                const resources = resourceTotal(state.familiars)
                state.food = resources.food
                state.rock = resources.stone
                state.timber = resources.timber
                state.ore = resources.ore
                state.gold = resources.gold
                state.anima = resources.anima

                if (state.speedBoost > 0) {
                    state.time = resources.time * (100 / (100 + state.speedBoost))
                } else {
                    state.time = resources.time
                }
            } else {
                state.food = 0
                state.rock = 0
                state.timber = 0
                state.ore = 0
                state.time = 0
                state.gold = 0
                state.tome = 0
                state.anima = 0
            }
        }

    }
})

export const { setLevel, sumResources, totalResources, clearValues, setResearchSpeedBoost } = researchSlice.actions;

export default researchSlice.reducer;