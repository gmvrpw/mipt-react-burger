import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import * as R from "./reducers";

export const store = configureStore({
  reducer: {
    ingredients: R.ingredientsReducer,
    ingredient: R.ingredientReducer,
    burgerConstructor: R.burgerConstructorReducer,
    order: R.orderReducer,
  }
})

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 
