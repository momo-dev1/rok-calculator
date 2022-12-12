import { createSlice } from "@reduxjs/toolkit";
import { buildingsInitialState, } from "../types/dataTypes";
import { BuildingsData } from "@/utils/BuildingsData";

const initialState: buildingsInitialState = {
    food: 0,
    rock: 0,
    timber: 0,
    ore: 0,
    time: 0,
    power: 0,
    speedBoost: 0,
    buildings: BuildingsData,
}

const buildingsSlice = createSlice({
    name: 'buildings',
    initialState,
    reducers: {
        clearValues: (state) => {
            return initialState
        },
        setbuildingsSpeedBoost: (state, { payload: { value } }) => {
            state.speedBoost = +value
        },
        setQty: (state, { payload: { name, value } }) => {
            if (state.buildings.find(item => item.name.includes(name))) {
                let idx = state.buildings.findIndex(item => item.name.includes(name))
                state.buildings[idx].qty = +value
            }
        },
        setLevel: (state, { payload: { name, value, label } }) => {
            if (state.buildings.find(item => item.name.includes(name))) {
                let idx = state.buildings.findIndex(item => item.name.includes(name))
                if (label === "from") {
                    state.buildings[idx].start = +value
                }
                if (label === "to") {
                    state.buildings[idx].end = +value
                }
            }
        },
        sumResources: (state, { payload: { name, label } }) => {
            function sumResource(buildingName: any[], idx: number) {
                let start = buildingName[idx].start
                let end = buildingName[idx].end
                if (end !== 0 && start >= end) {
                    return initialState
                }
                if (label === "to" && end === 0) {
                    buildingName[idx].totalFood = 0
                    buildingName[idx].totalRock = 0
                    buildingName[idx].totalTimber = 0
                    buildingName[idx].totalOre = 0
                    buildingName[idx].totalItems = 0
                    buildingName[idx].totalPower = 0
                    buildingName[idx].totalTime = 0
                    buildingName[idx].start = 0
                    buildingName[idx].qty = 1
                    return
                }
                if (end !== 0) {
                    let food = buildingName[idx].food.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let rock = buildingName[idx].rock.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let timber = buildingName[idx].timber.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let ore = buildingName[idx].ore.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let power = buildingName[idx].power.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    let time = buildingName[idx].time.slice(start, end).reduce((acc: any, curr: any) => acc + curr)
                    buildingName[idx].totalFood = food
                    buildingName[idx].totalRock = rock
                    buildingName[idx].totalTimber = timber
                    buildingName[idx].totalOre = ore
                    buildingName[idx].totalPower = power
                    buildingName[idx].totalTime = time
                }
            }
            if (state.buildings.find(item => item.name.includes(name))) {
                const idx = state.buildings.findIndex(item => item.name === name)
                sumResource(state.buildings, idx)
            }
        },
        totalResources: (state) => {
            const resourceTotal = (researchName: any[]) => {
                return researchName.reduce((acc, curr) => {
                    const { totalFood, totalRock, totalTimber, totalOre, totalPower, totalTime, qty } = curr;
                    acc.food += totalFood * qty
                    acc.rock += totalRock * qty
                    acc.timber += totalTimber * qty
                    acc.ore += totalOre * qty
                    acc.power += totalPower * qty
                    acc.time += totalTime * qty
                    return acc;
                }, { food: 0, rock: 0, timber: 0, ore: 0, power: 0, time: 0 });
            }

            let totalBuildings = resourceTotal(state.buildings)

            state.food = totalBuildings.food
            state.rock = totalBuildings.rock
            state.timber = totalBuildings.timber
            state.ore = totalBuildings.ore
            state.power = totalBuildings.power

            if (state.speedBoost > 0) {
                state.time = (totalBuildings.time) * (100 / (100 + state.speedBoost))
            } else {
                state.time = (totalBuildings.time)
            }

        }
    }
})


export const { sumResources, setQty, totalResources, setbuildingsSpeedBoost, setLevel, clearValues } = buildingsSlice.actions;

export default buildingsSlice.reducer;
