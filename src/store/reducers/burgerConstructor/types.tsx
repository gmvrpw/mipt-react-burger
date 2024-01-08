import Nullable from "../../../types/nullable"
import { Ingredient } from "../../types/ingredient";

export interface BurgerConstructorState {
  bun: Nullable<Ingredient>;
  ingredients: Ingredient[];
  count: Record<string, number>;
}
