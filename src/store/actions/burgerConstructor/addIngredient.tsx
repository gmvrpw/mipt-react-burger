import { createAction } from "@reduxjs/toolkit";
import { Ingredient } from "../../types/ingredient";

const addIngredient = createAction<Ingredient>('burgerConstructor/addIngredient')

export default addIngredient;
