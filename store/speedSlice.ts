import { createSlice } from "@reduxjs/toolkit";
import { SpeedInitialState, } from "../types/dataTypes";
import { SpeedData } from "@/utils/SpeedData";

const initialState: SpeedInitialState = {
    time: 0,
    speed: SpeedData,
}

const speedSlice = createSlice({
    name: 'speed',
    initialState,
    reducers: {
        clearValues: (state) => {
            return initialState
        },
        setTime: (state, { payload: { name, value } }) => {
            let idx = state.speed.findIndex(item => item.times.find(i => i.name === name))
            let itemIdx = state.speed[idx].times.findIndex(i => i.name === name)
            state.speed[idx].times[itemIdx].value = +value
        },
        sumTime: (state) => {
            let totalTimeCount = state.speed.map(item => item.times.reduce((acc, curr) => {
                let { time, value } = curr
                let totalTime = time * value
                acc += totalTime
                return acc
            }, 0)).reduce((acc, curr) => acc + curr, 0)
            state.time = totalTimeCount
        },
    }
})


export const { setTime, sumTime, clearValues } = speedSlice.actions;

export default speedSlice.reducer;
