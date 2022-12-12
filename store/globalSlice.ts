import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    offset: 0
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setOffset: (state, { payload: { value } }) => {
            state.offset = +value + 50
        }
    }
})



export const { setOffset } = globalSlice.actions;

export default globalSlice.reducer;