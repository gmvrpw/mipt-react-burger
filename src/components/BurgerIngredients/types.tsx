import { Ingredient } from "../../resources/ingredients/types"

export type Category = {
  key: number,
  type: string,
  title: string,
  ingredients: Ingredient[]
}

export interface BurgerIngredientsProps {
  ingredients: Ingredient[],
  className?: string,
}
