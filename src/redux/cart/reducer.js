import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { indexOf } from "lodash";
import { fetchcart } from "./action";

export const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtocart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    // update: (state, action) => {
    //   const { product, quantity } = action.payload;
    //   console.log(action.payload);

    //   const index = state.findIndex((x) => x._id === product._id);

    //   if (index !== -1) {
    //     state[index].quantity = quantity;
    //   }

    //   localStorage.setItem("cart", JSON.stringify(state));
    // },

    // remove: (state, action) => {
    //   const { product, quantity } = action.payload;
    //   console.log(action.payload);

    //   const index = state.findIndex((x) => x._id === product._id);
    //   if (index !== -1) {
    //     state.splice(index, 1);
    //   }
    //   localStorage.setItem("cart", JSON.stringify(state));
    // },
  },

  extraReducers: {
    [fetchcart.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchcart.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchcart.rejected]: (state, action) => {
      state.item.loading = false;
    },
  },
});
const { reducer, actions } = cart;
export const { addtocart } = actions;
export default reducer;
