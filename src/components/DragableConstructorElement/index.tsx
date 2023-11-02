import cn from 'classnames';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import { DragableConstructorElementProps } from "./types"
import styles from './index.module.css';

const DragableConstructorElement: React.FC<DragableConstructorElementProps> = ({ extraClass, isLocked, ...others }) => {
  return (
    <div className={styles.container}>
      { !isLocked ? <DragIcon type="primary"/> : false }
      <ConstructorElement 
        extraClass={cn("ml-2", { "ml-8": isLocked }, extraClass)}
        isLocked={isLocked} 
        {...others}
      />
    </div>
  )
}

export default DragableConstructorElement;
