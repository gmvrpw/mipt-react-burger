import React, { useMemo } from 'react';
import cn from 'classnames';

import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from '../Modal';
import OrderDetails from '../OrderDetails';
import DragableConstructorElement from '../DragableConstructorElement';
import { useBoolean } from '../../hooks/useBoolean';

import styles from './index.module.css';
import { BurgerConstructorProps } from './types';
import { calculateTotalPrice } from './utils';

const BurgerConstructor: React.FC<BurgerConstructorProps> = ({ scheme, className }) => {
  const totalPrice = useMemo(() => calculateTotalPrice(scheme), [scheme]); 
  const [showDetails, open, close] = useBoolean(false);

  return (
    <>
      <article className={cn(styles.container, "pt-25 pb-10", className)}>
        <DragableConstructorElement
          type="top"
          thumbnail={scheme.topBun.image_mobile}
          text={scheme.topBun.name}
          price={scheme.topBun.price}
          isLocked={true}
        />
        <div className={cn(styles.ingredients, "mt-4 mb-4")}>
          {scheme.ingredients.map(({key, image, name, price}) => (
            <DragableConstructorElement
              key={key}
              thumbnail={image}
              text={name}
              price={price}
            />
          ))}
        </div>
        <DragableConstructorElement
          type="bottom"
          thumbnail={scheme.bottomBun.image_mobile}
          text={scheme.bottomBun.name}
          price={scheme.bottomBun.price}
          isLocked={true}
        />
        <div className={cn(styles.total, "mt-10")}>
          <div className={cn(styles.price, "mr-10")}>
            <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
            <CurrencyIcon type="primary"/>
          </div>
          <Button htmlType="submit" onClick={open}>Оформить заказ</Button>
        </div>
      </article>
      <Modal show={showDetails} close={close}>
        <OrderDetails orderNumber={"034536"} className="mt-4 mb-20"/>
      </Modal>
    </>
  )
}

export default BurgerConstructor;
