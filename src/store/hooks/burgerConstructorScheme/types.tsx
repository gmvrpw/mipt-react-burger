import Nullable from "../../../types/nullable"
import { Ingredient } from "../../types/ingredient";

type BurgerConstructorScheme = {
  bun: Nullable<Ingredient>,
  ingredients: Ingredient[],
}

type BurgerConstructorSchemeHook = () => [
  BurgerConstructorScheme,
  {
    addIngredient: (ingredient: Ingredient) => void,
    moveIngredient: (from: number, to: number) => void,
    deleteIngredient: (index: number) => void,
  }
]

export default BurgerConstructorSchemeHook;
