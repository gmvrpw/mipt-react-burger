import cn from 'classnames';

import successImage from '../../images/success.svg'

import { OrderDetailsProps } from "./types";
import styles from './index.module.css';

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderNumber, className }) => {
  return (
    <article className={cn(styles.details, className)}>
      <h1 className="text text_type_digits-large mt-1 mb-8">{orderNumber}</h1>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img className={cn(styles.success, "mt-15 mb-15")} src={successImage} alt="Успешно"/>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </article>
  )
}

export default OrderDetails;
