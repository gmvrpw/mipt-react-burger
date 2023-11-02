import { Ingredient } from "../../resources/ingredients/types";

export interface IngredientCardProps {
  ingredient: Ingredient,
  count?: number,
  className?: string,
}
