import { createReducer } from "@reduxjs/toolkit";

import * as A from "../../actions/ingredient"

import { IngredientState } from "./types";

const initialState: IngredientState = {
  ingredient: null,
}

const ingredientReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(A.selectIngredient, (state, action) => {
      state.ingredient = action.payload;
    })
    .addCase(A.clearIngredient, (state) => {
      state.ingredient = null;
    })
})

export default ingredientReducer;
