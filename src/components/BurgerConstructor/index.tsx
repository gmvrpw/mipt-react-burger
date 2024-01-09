import cn from 'classnames';
import React, { useMemo } from 'react';
import { useDrop } from 'react-dnd';

import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { Ingredient } from '../../store/types/ingredient';
import useBurgerConstructorScheme from '../../store/hooks/burgerConstructorScheme';

import Modal from '../Modal';
import OrderDetails from '../OrderDetails';
import DraggableConstructorElement from '../DraggableConstructorElement';

import styles from './index.module.css';
import { BurgerConstructorProps } from './types';
import useOrder from '../../store/hooks/order';

const BurgerConstructor: React.FC<BurgerConstructorProps> = ({ className }) => {
  const [[order, loading], { clearOrder, createOrder }] = useOrder()
  
  const [scheme, { addIngredient, deleteIngredient }] = useBurgerConstructorScheme();
  const [, drop] = useDrop(() => ({
    accept: "ingredient",
    drop: (ingredient: Ingredient) => addIngredient(ingredient)
  }))

  const totalPrice = useMemo(
    () => scheme.ingredients.reduce((acc, cur) => acc + cur.price, 2 * (scheme.bun?.price ?? 0)),
    [scheme]
  );

  return (
    <>
      <article ref={drop} className={cn(styles.container, "pt-25 pb-10", className)}>
        {scheme.bun && <DraggableConstructorElement
          index={-1}
          type="top"
          thumbnail={scheme.bun.image_mobile}
          text={`${scheme.bun.name} (верх)`}
          price={scheme.bun.price}
          isLocked={true}
        />}
        <div className={cn(styles.ingredients, "mt-4 mb-4")}>
          {scheme.ingredients.map(({ key, image, name, price }, index) => (
            <DraggableConstructorElement
              key={key}
              index={index}
              thumbnail={image}
              text={name}
              price={price}
              handleClose={() => deleteIngredient(index)}
            />
          ))}
        </div>
        {scheme.bun && <DraggableConstructorElement
          index={-1}
          type="bottom"
          thumbnail={scheme.bun.image_mobile}
          text={`${scheme.bun.name} (низ)`}
          price={scheme.bun.price}
          isLocked={true}
        />}
        <div className={cn(styles.total, "mt-10")}>
          <div className={cn(styles.price, "mr-10")}>
            <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
            <CurrencyIcon type="primary"/>
          </div>
          <Button htmlType="submit" onClick={() => {
            if (scheme.bun) {
              createOrder([scheme.bun, ...scheme.ingredients, scheme.bun])
            }
          }}>{loading ? "Обрабатываем..." : "Оформить заказ"}</Button>
        </div>
      </article>
      {order && <Modal close={clearOrder}>
        <OrderDetails orderNumber={order.order.number} className="mt-4 mb-20"/>
      </Modal>}
    </>
  )
}

export default BurgerConstructor;
