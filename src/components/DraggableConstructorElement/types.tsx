import { ComponentProps } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

export interface DraggableConstructorElementProps extends ComponentProps<typeof ConstructorElement> {
  index: number;
}
