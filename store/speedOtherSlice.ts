import { createSlice } from "@reduxjs/toolkit";
import { SpeedOther } from "@/utils/SpeedData";
import { ResourcesData } from "@/utils/ResourceData";

const initialState = {
    amount: 0,
    speedOther: SpeedOther,
    resourcePack: ResourcesData,
};

const speedOtherSlice = createSlice({
    name: "speedOther",
    initialState,
    reducers: {
        clearValues: (state) => {
            return initialState;
        },
        setAmount: (state, { payload: { name, value } }) => {
            const speedOtherIndex = state.speedOther.findIndex(
                (item) => item.name.includes(name)
            );
            const resourcePackIndex = state.resourcePack.findIndex(
                (item) => item.name.includes(name)
            );

            if (speedOtherIndex !== -1) {
                state.speedOther[speedOtherIndex].value = +value;
            } else if (resourcePackIndex !== -1) {
                state.resourcePack[resourcePackIndex].value = +value;
            }
        },
        sumCount: (state) => {
            const resourceTotal = (tier: any) => {
                return tier.map((item: any) => item).reduce((acc: any, curr: any) => {
                    let { amount, value } = curr;
                    let totalAmount = amount * value;
                    acc.amount += totalAmount;
                    return acc;
                }, { amount: 0 });
            };

            const speedOther = resourceTotal(state.speedOther);
            const resourcePack = resourceTotal(state.resourcePack);

            if (state.speedOther.some((item) => item.value > 0)) {
                state.amount = speedOther.amount;
            } else {
                state.amount = resourcePack.amount;
            }
        },
    },
});

export const { sumCount, setAmount, clearValues } = speedOtherSlice.actions;

export default speedOtherSlice.reducer;