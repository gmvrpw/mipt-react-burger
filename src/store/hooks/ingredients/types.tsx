import Nullable from "../../../types/nullable";
import { LoadingStateError } from "../../reducers/types";
import { Ingredient } from "../../types/ingredient";

type ingredientsHook = () => [
  Record<string, Ingredient>,
  boolean,
  Nullable<LoadingStateError>
]

export default ingredientsHook;
