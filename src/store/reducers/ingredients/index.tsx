import { createReducer } from "@reduxjs/toolkit";
import * as A from "../../actions/ingredients"
import { Ingredient } from "../../types/ingredient";
import { IngredientsState } from "./types";

const initialState: IngredientsState = {
  ingredients: {},
  loading: false,
  error: null,
}

const ingredientsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(A.fetchIngredients.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(A.fetchIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload.reduce(
        (acc, cur) => {
          acc[cur._id] = cur;
          return acc;
        }, {} as Record<string, Ingredient>
      )
      state.loading = false;
    })
    .addCase(A.fetchIngredients.rejected, (state) => {
      state.ingredients = {};
      state.loading = false;
    })
})

export default ingredientsReducer;
