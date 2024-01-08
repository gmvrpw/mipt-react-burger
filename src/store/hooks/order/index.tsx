import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { clearOrder, createOrder } from "../../actions/order";
import OrderHook from "./types";

const useOrder: OrderHook = () => {
  const dispatch = useAppDispatch()

  const order = useAppSelector((state) => state.order.order);
  const loading = useAppSelector((state) => state.order.loading);

  return [
    [
      order,
      loading,
    ],
    {
      createOrder: useCallback((ingredients) => dispatch(createOrder(ingredients)), []),
      clearOrder: useCallback(() => dispatch(clearOrder()), []),
    }
  ]
}

export default useOrder;
