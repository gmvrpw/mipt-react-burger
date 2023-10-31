import { BurgerScheme } from "./types";

export const calculateTotalPrice = (scheme: BurgerScheme): number =>
  scheme.ingredients.reduce((acc, ingredient) => acc + ingredient.price, scheme.topBun.price + scheme.topBun.price)
