import { Category } from "../../types";

export interface IngredientsCategoryProps {
  category: Category,
  count: Record<string, number>,
  className?: string,
}
