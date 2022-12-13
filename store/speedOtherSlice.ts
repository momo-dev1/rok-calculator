import { createSlice } from "@reduxjs/toolkit";
import { SpeedOther } from "@/utils/SpeedData";

const initialState = {
    amount: 0,
    speedOther: SpeedOther,
}

const speedOtherSlice = createSlice({
    name: 'speedOther',
    initialState,
    reducers: {
        clearValues: (state) => {
            return initialState
        },
        setAmount: (state, { payload: { name, value } }) => {
            if (state.speedOther.find(item => item.name.includes(name))) {
                let idx = state.speedOther.findIndex(item => item.name.includes(name))
                state.speedOther[idx].value = +value
            }
        },
        sumCount: (state) => {
            let totalAmountCount = state.speedOther.reduce((acc, curr) => {
                let { amount, value } = curr
                let totalAmount = amount * value
                acc.amount += totalAmount
                return acc
            }, { amount: 0 })
            state.amount = totalAmountCount.amount
        }
    }
})


export const { sumCount, setAmount, clearValues } = speedOtherSlice.actions;

export default speedOtherSlice.reducer;