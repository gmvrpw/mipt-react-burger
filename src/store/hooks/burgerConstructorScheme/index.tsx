import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../.."

import { addIngredient, deleteIngredient, moveIngredient } from "../../actions/burgerConstructor";
import { Ingredient } from "../../types/ingredient";
import BurgerConstructorSchemeHook from "./types";

const useBurgerConstructorScheme: BurgerConstructorSchemeHook = () => {
  const dispatch = useAppDispatch()

  const bun = useAppSelector((state) => state.burgerConstructor.bun);
  const ingredients = useAppSelector((state) => state.burgerConstructor.ingredients);

  return [
    { bun, ingredients },
    {
      addIngredient: useCallback((ingredient: Ingredient) => dispatch(addIngredient(ingredient)), []),
      moveIngredient: useCallback((from: number, to: number) => dispatch(moveIngredient({from, to})), []),
      deleteIngredient: useCallback((index: number) => dispatch(deleteIngredient(index)), [])
    }
  ]
}

export default useBurgerConstructorScheme;
