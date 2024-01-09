import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { clearIngredient, selectIngredient } from "../../actions/ingredient";
import IngredientHook from "./types";

const useIngredient: IngredientHook = () => {
  const dispatch = useAppDispatch()

  const ingredient = useAppSelector((state) => state.ingredient.ingredient);

  return [
    ingredient,
    {
      selectIngredient: useCallback((ingredient) => dispatch(selectIngredient(ingredient)), []),
      clearIngredient: useCallback(() => dispatch(clearIngredient()), []),
    }
  ]
}

export default useIngredient;
