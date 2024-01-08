import { createAction } from "@reduxjs/toolkit";

const deleteIngredient = createAction<number>('burgerConstructor/deleteIngredient')

export default deleteIngredient;
