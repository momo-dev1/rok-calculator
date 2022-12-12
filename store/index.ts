import { configureStore } from '@reduxjs/toolkit';
import tropsSlice from "./tropsSlice"
import researchSlice from "./researchSlice"
import speedSlice from "./speedSlice"
import buildingsSlice from "./buildingsSlice"
import globalSlice from "./globalSlice"

const store = configureStore({
    reducer: {
        global: globalSlice,
        trops: tropsSlice,
        research: researchSlice,
        speed: speedSlice,
        buildings: buildingsSlice,
    }
})
export default store;