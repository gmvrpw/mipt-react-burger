import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api";
import { Ingredient } from "../../types/ingredient";

const fetchIngredients = createAsyncThunk('ingredients/fetch', async () => {
  const response = await fetch(`${BASE_URL}/ingredients`);
  return (await response.json()).data as Ingredient[];
})

export default fetchIngredients;
