import { BurgerScheme } from "./types";

export const calculateTotalPrice = (scheme: BurgerScheme): number =>
  scheme.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 2 * scheme.bun.price)
