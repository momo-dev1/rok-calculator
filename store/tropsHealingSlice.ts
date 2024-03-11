import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TroopsInitialState } from "../types/dataTypes";
import { healingTiers as tiers } from "../utils/TiersData";

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
    ...tiers
};

const troopsHealingSlice = createSlice({
    name: 'healing',
    initialState,
    reducers: {
        clearValues: () => ({ ...initialState }),
        setTroopsHealingBoost: (state, action: PayloadAction<number>) => {
            state.speedBoost = action.payload;
        },
        setTroopsSubSidy: (state, action: PayloadAction<number>) => {
            state.subsidy = action.payload;
        },
        setQty: (state, action: PayloadAction<{ name: string; value: number }>) => {
            const { name, value } = action.payload;
            const tierKeys = ['tier1', 'tier2', 'tier3', 'tier4', 'tier5'];
            for (const key of tierKeys) {
                const tier = state[key];
                const unit = tier.find(unit => unit.name.includes(name));
                if (unit) {
                    unit.qty = value;
                    break;
                }
            }
        },
        sumResources: (state) => {
            const tiers = ['tier1', 'tier2', 'tier3', 'tier4', 'tier5'];
            let totals = { food: 0, rock: 0, timber: 0, ore: 0, time: 0, gold: 0 };

            tiers.forEach(tierKey => {
                const tier = state[tierKey];
                tier.forEach(unit => {
                    const { food, stone, timber, ore, time, gold, qty } = unit;
                    totals = {
                        food: totals.food + food * qty,
                        rock: totals.rock + stone * qty,
                        timber: totals.timber + timber * qty,
                        ore: totals.ore + ore * qty,
                        time: totals.time + time * qty,
                        gold: totals.gold + gold * qty,
                    };
                });
            });

            // Apply subsidy and speedBoost adjustments
            const subsidyMultiplier = 1 - (state.subsidy / 100);
            const speedBoostMultiplier = state.speedBoost > 0 ? 100 / (100 + state.speedBoost) : 1;
            state.food = totals.food * subsidyMultiplier;
            state.rock = totals.rock * subsidyMultiplier;
            state.timber = totals.timber * subsidyMultiplier;
            state.ore = totals.ore * subsidyMultiplier;
            state.gold = totals.gold * subsidyMultiplier;
            state.time = totals.time * speedBoostMultiplier;
        },
    },
});

export const { setQty, sumResources, setTroopsHealingBoost, clearValues, setTroopsSubSidy } = troopsHealingSlice.actions;

export default troopsHealingSlice.reducer;