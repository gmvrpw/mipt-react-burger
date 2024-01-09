import { BurgerConstructorState } from "./types"

const MOD = 10e9;
let key = 0;
export const keyGenerator = () => { 
  key = (key + 1) % MOD;
  return key;
};

export const changeCount = (id: string, state: BurgerConstructorState, value: number) => {
  state.count[id] = (state.count[id] ?? 0) + value;
}
