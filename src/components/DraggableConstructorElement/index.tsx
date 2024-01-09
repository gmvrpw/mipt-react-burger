import cn from 'classnames';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import { DraggableConstructorElementProps } from "./types"
import styles from './index.module.css';
import { useDrag, useDrop } from 'react-dnd';
import useBurgerConstructorScheme from '../../store/hooks/burgerConstructorScheme';

const DraggableConstructorElement: React.FC<DraggableConstructorElementProps> = ({ index, extraClass, isLocked, ...others }) => {
  const [, { moveIngredient }] = useBurgerConstructorScheme()

  const [, drag] = useDrag(() => ({
    type: "ingredientSorting",
    item: { index },
  }))
  const [, drop] = useDrop(() => ({
    accept: "ingredientSorting",
    drop: (item: { index: number }) => {
      moveIngredient(item.index, index)
    }
  }))

  return (
    <div ref={(node) => !isLocked && drag(drop(node))} className={styles.container}>
      { !isLocked ? <DragIcon type="primary"/> : false }
      <ConstructorElement 
        extraClass={cn("ml-2", { "ml-8": isLocked }, extraClass)}
        isLocked={isLocked}
        {...others}
      />
    </div>
  )
}

export default DraggableConstructorElement;
