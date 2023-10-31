export interface IngredientCardProps {
  image: string,
  image_large: string,
  price: number,
  name: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  count?: number,
  className?: string,
}
