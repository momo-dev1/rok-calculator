import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpeedOther } from "@/utils/SpeedData";
import { ResourcesData } from "@/utils/ResourceData";

interface SpeedOtherState {
  amount: number;
  speedOther: typeof SpeedOther;
  resourcePack: typeof ResourcesData;
}

const initialState: SpeedOtherState = {
  amount: 0,
  speedOther: SpeedOther,
  resourcePack: ResourcesData,
};

const calculateTotalAmount = (items: { amount: number; value: number }[]) =>
  items.reduce((total, { amount, value }) => total + amount * value, 0);

const speedOtherSlice = createSlice({
  name: "speedOther",
  initialState,
  reducers: {
    clearValues: () => initialState,
    setAmount: (
      state,
      action: PayloadAction<{ name: string; value: number }>
    ) => {
      const { name, value } = action.payload;
      const items = [...state.speedOther, ...state.resourcePack];
      const item = items.find((item) => item.name.includes(name));
      if (item) {
        item.value = value;
      }
    },
    sumCount: (state) => {
      const speedOtherTotal = calculateTotalAmount(state.speedOther);
      const resourcePackTotal = calculateTotalAmount(state.resourcePack);
      state.amount = state.speedOther.some((item) => item.value > 0)
        ? speedOtherTotal
        : resourcePackTotal;
    },
  },
});

export const { sumCount, setAmount, clearValues } = speedOtherSlice.actions;

export default speedOtherSlice.reducer;
