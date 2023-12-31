import { Ingredient } from "../../resources/ingredients/types";

type IngredientWithKey = Ingredient & { key: number }

export type BurgerScheme = {
  bun: Ingredient,
  ingredients: IngredientWithKey[],
}

export interface BurgerConstructorProps {
  scheme: BurgerScheme,
  className?: string,
}
