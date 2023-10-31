import { useEffect, useState } from "react";
import { Resource } from "../types";
import { Ingredient } from "./types";

const getIngredients = async () => {
  const response = await fetch("https://norma.nomoreparties.space/api/ingredients");
  if (response.ok) {
    return await response.json()
  }
  throw new Error(response.statusText)
}

export const useIngredients = (): Resource<Ingredient[]> => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [ingredients, setIngredients] = useState<Ingredient[] | undefined>(undefined)
  useEffect(() => {
    getIngredients().then((data) => {
      setIngredients(data.data)
      setLoading(false);
    }).catch((e: Error) => setError(e.message))
  }, [])

  return [ingredients, loading, error]
}
