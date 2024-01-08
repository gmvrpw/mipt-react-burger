import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../.."

import fetchIngredients from "../../actions/ingredients/fetch";
import ingredientsHook from "./types";

const useIngredients: ingredientsHook = () => {
  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(fetchIngredients()) }, []);

  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const loading = useAppSelector((state) => state.ingredients.loading);
  const error = useAppSelector((state) => state.ingredients.error);

  return [
    ingredients,
    loading,
    error,
  ]
}

export default useIngredients;
