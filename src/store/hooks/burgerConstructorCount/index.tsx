import { useAppSelector } from "../..";

const useBurgerConstructorCount = () => {
  return useAppSelector((state) => state.burgerConstructor.count);
}

export default useBurgerConstructorCount;
