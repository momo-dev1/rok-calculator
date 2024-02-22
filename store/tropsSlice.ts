import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TroopsInitialState } from "../types/dataTypes";
import { mgeTiers as tiers } from "../utils/TiersData";

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
    ...tiers,
};

const troopsSlice = createSlice({
    name: 'troops',
    initialState,
    reducers: {
        clearValues: () => initialState,
        setTroopsSpeedBoost: (state, action: PayloadAction<number>) => {
            state.speedBoost = action.payload;
        },
        setTroopsSubsidy: (state, action: PayloadAction<number>) => {
            state.subsidy = action.payload;
        },
        setQty: (state, action: PayloadAction<{ name: string; value: string }>) => {
            const tiers = [state.tier1, state.tier2, state.tier3, state.tier4, state.tier5];
            const { name, value } = action.payload;
            const parsedValue = parseInt(value.replace(/,/g, ""), 10);

            tiers.some(tier => {
                const item = tier.find(item => item.name.includes(name));
                if (item) {
                    item.qty = parsedValue;
                    return true; // Stop searching once the item is found and updated
                }
                return false;
            });
        },
        sumResources: (state) => {
            const tiers = [state.tier1, state.tier2, state.tier3, state.tier4, state.tier5];
            state.food = state.rock = state.timber = state.ore = state.time = state.mgePoints = state.power = state.gold = 0;

            tiers.forEach(tier => {
                tier.forEach(item => {
                    const { food, stone, timber, ore, time, mgePoints, power, gold, qty } = item;
                    const multiplier = 1 - (state.subsidy / 100);
                    state.food += food * qty * multiplier;
                    state.rock += stone * qty * multiplier;
                    state.timber += timber * qty * multiplier;
                    state.ore += ore * qty * multiplier;
                    state.time += time * qty * (state.speedBoost > 0 ? 100 / (100 + state.speedBoost) : 1);
                    state.mgePoints += mgePoints * qty;
                    state.power += power * qty;
                    state.gold += gold * qty * multiplier;
                });
            });
        },
    },
});

export const { setQty, sumResources, setTroopsSpeedBoost, clearValues, setTroopsSubsidy } = troopsSlice.actions;

export default troopsSlice.reducer;
