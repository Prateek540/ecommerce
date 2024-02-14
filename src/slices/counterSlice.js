import { createSlice } from "@reduxjs/toolkit";
import products from "../components/Products";

const initialState = [];

export const counterSlice = createSlice({
  name: "counterCart",
  initialState,
  reducers: {
    increment: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      let productId = products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state[index].count = state[index].count + 1;
        state[index].total = state[index].total + state[index].cost;
      } else {
        state.push({
          ...products[productId],
          count: 1,
          total: products[productId].cost,
        });
      }
    },
    decrement: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1 && state[index].count >= 1) {
        state[index].count = state[index].count - 1;
        state[index].total = state[index] - state[index].cost;
      }
      if (state[index].count === 1 && index !== -1) {
        state = state.filter((item) => item.id !== action.payload.id);
      }
    },
    remove: () => initialState,
  },
});

export const { increment, decrement, remove } = counterSlice.actions;
export default counterSlice.reducer;
