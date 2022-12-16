import { createSlice } from "@reduxjs/toolkit";
import { commanderData } from "@/utils/commanderData";

const initialState = {
    exp: 0,
    from: 0,
    goal: 0,
    currentExp: 0,
    commanderRarity: "Legendary",
    commander: commanderData,
}

const commandersSlice = createSlice({
    name: 'commander',
    initialState,
    reducers: {
        clearValues: (state) => {
            return initialState
        },
        setSelect: (state, { payload: { value } }) => {
            state.commanderRarity = value
            state.exp = 0
            state.goal = 0
            state.from = 0
            state.currentExp = 0
        },
        setCurrentExp: (state, { payload: { value } }) => {
            state.currentExp = value
        },
        setLevel: (state, { payload: { name, value } }) => {
            if (state.commander.find(item => item.name.includes(state.commanderRarity))) {

                if (name === "from") {
                    state.from = +value
                }
                if (name === "goal") {

                    state.goal = +value
                }
            }
        },
        totalExp: (state) => {
            const idx = state.commander.findIndex(item => item.name.includes(state.commanderRarity))
            let startLevel = state.from
            let endLevel = state.goal

            if (endLevel !== 0 && startLevel >= endLevel) {
                return initialState
            }
            if (startLevel >= 60) return
            if (endLevel > 0 && endLevel <= 60) {
                let exp = state.commander[idx].exp.slice(startLevel, endLevel).reduce((acc: any, curr: any) => acc + curr)
                state.exp = exp
            }
        },

    }
})


export const { totalExp, setLevel, setSelect, setCurrentExp, clearValues } = commandersSlice.actions;

export default commandersSlice.reducer;
