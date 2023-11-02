export type Ingredient = {
  _id: string,
  name: string,
  type: "bun" | "sauce" | "main",
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
}

export interface IngredientsError {
  type: string,
  message: string,
  payload?: string,
}
