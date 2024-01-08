import { BurgerConstructorState } from "./types"

export const changeCount = (id: string, state: BurgerConstructorState, value: number) => {
  state.count[id] = (state.count[id] ?? 0) + value;
}
