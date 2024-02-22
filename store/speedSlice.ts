import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    // Resets the state to its initial values
    clearValues: () => initialState,

    // Sets the value of a specific time item within a speed object
    setTime: (state, action: PayloadAction<{ name: string; value: number }>) => {
      const { name, value } = action.payload;
      state.speed.forEach((speedItem) => {
        const timeItem = speedItem.times.find((i) => i.name === name);
        if (timeItem) {
          timeItem.value = value;
        }
      });
    },

    // Calculates and updates the total time based on the speed data
    sumTime: (state) => {
      state.time = state.speed.reduce((totalTime, speedItem) => {
        const itemTotal = speedItem.times.reduce((itemSum, { time, value }) => itemSum + time * value, 0);
        return totalTime + itemTotal;
      }, 0);
    },
  },
});

export const { setTime, sumTime, clearValues } = speedSlice.actions;

export default speedSlice.reducer;
