import Nullable from "../../../types/nullable";
import { Ingredient } from "../../types/ingredient";

type IngredientHook = () => [
  Nullable<Ingredient>,
  {
    selectIngredient: (ingredient: Ingredient) => void,
    clearIngredient: () => void,
  }
]

export default IngredientHook;
