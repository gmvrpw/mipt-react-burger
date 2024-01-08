import { createAction } from "@reduxjs/toolkit";
import { Ingredient } from "../../types/ingredient";

const selectIngredient = createAction<Ingredient>('ingredient/select')

export default selectIngredient;
