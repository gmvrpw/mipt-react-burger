import Nullable from "../../../types/nullable";
import Order from "../../types/order";
import { LoadingState } from "../types";

export interface OrderState extends LoadingState {
  order: Nullable<Order>
}
