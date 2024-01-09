import Nullable from "../../../types/nullable"
import { Ingredient } from "../../types/ingredient";

export interface IngredientWithKey extends Ingredient {
  key: number;
}

export interface BurgerConstructorState {
  bun: Nullable<Ingredient>;
  ingredients: IngredientWithKey[];
  count: Record<string, number>;
}
