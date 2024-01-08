import { createReducer } from "@reduxjs/toolkit";
import * as A from "../../actions/burgerConstructor";

import { BurgerConstructorState } from "./types";
import { changeCount } from "./utils";

const initialState: BurgerConstructorState = {
  bun: null,
  ingredients: [],
  count: {},
}

const burgerConstructorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(A.addIngredient, (state, action) => {
      if (action.payload.type === "bun") {
        if (state.bun) {
          changeCount(state.bun._id, state, -2)
        }
        state.bun = action.payload;
        changeCount(state.bun._id, state, 2)
        return;
      }
      state.ingredients.push(action.payload);
      changeCount(action.payload._id, state, 1)
    })
    .addCase(A.moveIngredient, (state, action) => {
      if (action.payload.from === -1 || action.payload.to === -1) {
        return; 
      }
      const ingredient = state.ingredients.splice(action.payload.from, 1)
      state.ingredients.splice(action.payload.to, 0, ...ingredient);
    })
    .addCase(A.deleteIngredient, (state, action) => {
      changeCount(state.ingredients[action.payload]._id, state, -1)
      state.ingredients.splice(action.payload, 1);
    })
})

export default burgerConstructorReducer;
