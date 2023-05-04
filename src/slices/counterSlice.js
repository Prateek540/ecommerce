import { createSlice } from "@reduxjs/toolkit";
import products from "../components/Products";

const initialState = products;

export const counterSlice = createSlice({
  name: "counterCart",
  initialState,
  reducers: {
    increment: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      if (state[index].count < 3) {
        state[index].count = state[index].count + 1;
        state[index].total = state[index].count * state[index].cost;
      }
    },
    decrement: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      if (state[index].count > 0) {
        state[index].count = state[index].count - 1;
        state[index].total = state[index].count * state[index].cost;
      }
    },
    remove: () => initialState,
  },
});

export const { increment, decrement, remove } = counterSlice.actions;
export default counterSlice.reducer;
