import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api";
import { Ingredient } from "../../types/ingredient";

type Order = {
  name: string,
  order: {
    number: number,
  },
  success: true
}

const createOrder = createAsyncThunk('order/create', async (ingredients: Ingredient[]) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ingredients: ingredients.map((ingredient) => ingredient._id) })
  });
  return (await response.json()) as Order;
})

export default createOrder;
