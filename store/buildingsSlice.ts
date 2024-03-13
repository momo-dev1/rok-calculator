import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { buildingsInitialState } from '../types/dataTypes';
import { BuildingsData } from '@/utils/BuildingsData';

const initialState: buildingsInitialState = {
    food: 0,
    rock: 0,
    timber: 0,
    time: 0,
    power: 0,
    speedBoost: 0,
    blueprint: 0,
    arrow: 0,
    buildings: BuildingsData,
};

const findBuildingIndexByName = (state: buildingsInitialState, name: string) =>
    state.buildings.findIndex((item) => item.name.includes(name));

const buildingsSlice = createSlice({
    name: 'buildings',
    initialState,
    reducers: {
        clearValues: () => initialState,
        setbuildingsSpeedBoost: (state, { payload: { value } }: PayloadAction<{ value: number }>) => {
            state.speedBoost = value;
        },
        setQty: (state, { payload: { name, value } }: PayloadAction<{ name: string; value: number }>) => {
            const idx = findBuildingIndexByName(state, name);
            if (idx !== -1) {
                state.buildings[idx].qty = value;
            }
        },
        setLevel: (
            state,
            { payload: { name, value, label } }: PayloadAction<{ name: string; value: number; label: 'from' | 'to' }>
        ) => {
            const idx = findBuildingIndexByName(state, name);
            if (idx !== -1) {
                state.buildings[idx][label === 'from' ? 'start' : 'end'] = value;
            }
        },
        sumResources: (state, { payload: { name, label } }: PayloadAction<{ name: string; label: 'to' }>) => {
            const idx = findBuildingIndexByName(state, name);
            if (idx !== -1) {
                const building = state.buildings[idx] as any;
                const { start, end } = building;

                if (end !== 0 && start >= end) return initialState;
                if (label === 'to' && end === 0) {
                    Object.assign(building, {
                        totalFood: 0,
                        totalRock: 0,
                        totalTimber: 0,
                        totalItems: 0,
                        totalPower: 0,
                        totalBluePrint: 0,
                        totalArrow: 0,
                        totalTime: 0,
                        start: 0,
                        qty: 1,
                    });
                    return;
                }

                ['food', 'rock', 'timber', 'power', 'blueprint', 'arrow', 'time'].forEach((resource) => {
                    building[`total${resource.charAt(0).toUpperCase() + resource.slice(1)}`] =
                        building[resource].slice(start, end).reduce((acc: any, curr: any) => acc + curr, 0);
                });
            }
        },
        totalResources: (state) => {
            const totals = state.buildings.reduce(
                (acc, { totalFood, totalRock, totalTimber, totalPower, totalBluePrint, totalArrow, totalTime, qty }) => ({
                    food: acc.food + totalFood * qty,
                    rock: acc.rock + totalRock * qty,
                    timber: acc.timber + totalTimber * qty,
                    power: acc.power + totalPower * qty,
                    blueprint: acc.blueprint + totalBluePrint * qty,
                    arrow: acc.arrow + totalArrow * qty,
                    time: acc.time + totalTime * qty,
                }),
                { food: 0, rock: 0, timber: 0, power: 0, blueprint: 0, arrow: 0, time: 0 }
            );

            Object.assign(state, totals, {
                time: state.speedBoost > 0 ? totals.time * (100 / (100 + state.speedBoost)) : totals.time,
            });
        },
    },
});

export const { sumResources, setQty, totalResources, setbuildingsSpeedBoost, setLevel, clearValues } =
    buildingsSlice.actions;

export default buildingsSlice.reducer;
