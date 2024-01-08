import { createReducer } from "@reduxjs/toolkit";
import { OrderState } from "./types";

import * as A from "../../actions/order"

const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
}

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(A.createOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(A.createOrder.fulfilled, (state, action) => {
      state.order = action.payload 
      state.loading = false;
    })
    .addCase(A.createOrder.rejected, (state) => {
      state.loading = false;
      state.order = null;
    })
    .addCase(A.clearOrder, (state) => {
      state.order = null;
      state.error = null;
    })
})

export default orderReducer;
