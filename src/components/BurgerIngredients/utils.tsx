import { Ingredient } from "../../resources/ingredients/types";

import { categoryKey, categoryTitle, titlePlaceholder } from "./consts";
import { Category } from "./types";

export const getCategories = (ingredients: Ingredient[]): Category[] => {
  let keyPlaceholder = Object.keys(categoryKey).length;

  return Object.values(ingredients.reduce((acc, ingredient) => { 
    if (acc[ingredient.type]) {
      acc[ingredient.type].ingredients.push(ingredient)
      return acc;
    }
 
   acc[ingredient.type] = {
      key: categoryKey[ingredient.type] ?? keyPlaceholder++,
      type: ingredient.type,
      title: categoryTitle[ingredient.type] ?? titlePlaceholder,
      ingredients: [ingredient],
    }
    return acc;
  }, 
  {} as Record<string, Category>)).sort((a, b) => (a.key - b.key))
}
