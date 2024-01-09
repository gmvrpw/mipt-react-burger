import Nullable from "../../../types/nullable"
import { IngredientWithKey } from "../../reducers/burgerConstructor/types";
import { Ingredient } from "../../types/ingredient";

type BurgerConstructorScheme = {
  bun: Nullable<Ingredient>,
  ingredients: IngredientWithKey[],
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
