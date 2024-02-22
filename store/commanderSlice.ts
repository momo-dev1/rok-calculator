import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commanderData } from "@/utils/commanderData";

const initialState = {
    exp: 0,
    from: 0,
    goal: 0,
    currentExp: 0,
    commanderRarity: "Legendary",
    commander: commanderData,
};

const commandersSlice = createSlice({
    name: 'commander',
    initialState,
    reducers: {
        clearValues: () => ({ ...initialState }),
        setSelect: (state, { payload: { value } }: PayloadAction<{ value: string }>) => {
            state.commanderRarity = value;
            state.exp = 0;
            state.from = 0;
            state.goal = 0;
            state.currentExp = 0;
        },
        setCurrentExp: (state, { payload: { value } }: PayloadAction<{ value: number }>) => {
            state.currentExp = value;
        },
        setLevel: (state, { payload: { name, value } }: PayloadAction<{ name: 'from' | 'goal'; value: number }>) => {
            state[name] = value;
        },
        totalExp: (state) => {
            const idx = state.commander.findIndex(item => item.name.includes(state.commanderRarity));
            if (idx === -1 || state.from >= state.goal || state.from >= 60) {
                return;
            }

            const expArray = state.commander[idx].exp.slice(state.from, state.goal);
            state.exp = expArray.reduce((acc, curr) => acc + curr, 0);
        },
    },
});

export const { totalExp, setLevel, setSelect, setCurrentExp, clearValues } = commandersSlice.actions;

export default commandersSlice.reducer;
