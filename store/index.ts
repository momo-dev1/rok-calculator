import { configureStore } from '@reduxjs/toolkit';
import tropsSlice from "./tropsSlice"
import tropsHealingSlice from "./tropsHealingSlice"
import speedSlice from "./speedSlice"
import buildingsSlice from "./buildingsSlice"
import speedOtherSlice from "./speedOtherSlice"
import globalSlice from "./globalSlice"

const store = configureStore({
    reducer: {
        global: globalSlice,
        trops: tropsSlice,
        tropsHealing: tropsHealingSlice,
        speed: speedSlice,
        speedOther: speedOtherSlice,
        buildings: buildingsSlice,
    }
})
export default store;