import { Ingredient } from "../../types/ingredient";
import { LoadingState } from "../types";

export interface IngredientsState extends LoadingState {
  ingredients: Record<string, Ingredient>
}
