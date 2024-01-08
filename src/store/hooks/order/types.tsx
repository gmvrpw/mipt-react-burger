import Nullable from "../../../types/nullable";
import Order from "../../types/order";
import { Ingredient } from "../../types/ingredient";

type OrderHook = () => [
  [Nullable<Order>, boolean],
  {
    createOrder: (ingredients: Ingredient[]) => void,
    clearOrder: () => void,
  }
]

export default OrderHook;
