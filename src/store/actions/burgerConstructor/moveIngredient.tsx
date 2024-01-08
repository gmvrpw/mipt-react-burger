import { createAction } from "@reduxjs/toolkit";

type MoveIngredientPayload = {
  from: number,
  to: number,
}

const moveIngredient = createAction<MoveIngredientPayload>('burgerConstructor/moveIngredient')

export default moveIngredient;
