import { BurgerIcon, CloseIcon, CurrencyIcon, DragIcon, LockIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ComponentProps } from "react";

type Icon = 
  typeof CurrencyIcon |
  typeof BurgerIcon |
  typeof LockIcon |
  typeof DragIcon |
  typeof CloseIcon

export interface LinkProps extends ComponentProps<"a"> {
  Icon: Icon
}
