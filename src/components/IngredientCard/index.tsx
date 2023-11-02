import React from "react";
import cn from 'classnames';

import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../Modal";
import IngredientDetails from "../IngredientDetails";
import { useBoolean } from "../../hooks/useBoolean";

import { IngredientCardProps } from "./types";
import styles from './index.module.css';

const IngredientCard: React.FC<IngredientCardProps> = ({ 
  ingredient, 
  count = 0,
  className,
}) => {
  const [showDetails, open, close] = useBoolean(false);
  return (
    <>
      <article className={cn(styles.container, className)} onClick={open}>
        <img className={cn(styles.image, "pl-4 pr-4")} src={ingredient.image} alt={ingredient.name}/>
        <div className={cn(styles.price, "mt-1 mb-4")}>
          <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <h1 className={cn(styles.name, "text text_type_main-default")}>{ingredient.name}</h1>
        {
          Boolean(count) ?
            <Counter count={count} size="default" extraClass="m-1" /> :
            false
        }
      </article>
      {showDetails && <Modal 
        title="Детали инградиента"
        close={close}
      >
        <IngredientDetails
          ingredient={ingredient}
          className="mb-5" 
        />
      </Modal>}
    </>
  )
}

export default IngredientCard
