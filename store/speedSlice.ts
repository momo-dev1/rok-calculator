import { createSlice } from '@reduxjs/toolkit';
import { SpeedInitialState } from '../types/dataTypes';
import { SpeedData } from '@/utils/SpeedData';

const initialState: SpeedInitialState = {
    time: 0,
    speed: SpeedData,
};

const speedSlice = createSlice({
    name: 'speed',
    initialState,
    reducers: {
        clearValues: () => initialState,
        setTime: (state, { payload: { name, value } }) => {
            const { speed } = state;
            const speedItem = speed.find(item => item.times.find(i => i.name === name));
            const timeItem = speedItem?.times.find(i => i.name === name);
            if (timeItem) {
                timeItem.value = +value;
            }
        },
        sumTime: (state) => {
            const totalTimeCount = state.speed.map(item => item.times.reduce((acc, { time, value }) => {
                acc += time * value;
                return acc;
            }, 0)).reduce((acc, curr) => acc + curr, 0);
            state.time = totalTimeCount;
        },
    },
});

export const { setTime, sumTime, clearValues } = speedSlice.actions;

export default speedSlice.reducer;
