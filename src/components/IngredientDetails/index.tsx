import { useMemo } from 'react';
import cn from 'classnames';

import { componentsTitles, defaultComponentTitle } from './consts';
import { IngredientDetailsProps } from "./types";
import styles from './index.module.css';

const IngredientDetail: React.FC<IngredientDetailsProps> = ({ 
  image, 
  name, 
  fat, 
  calories, 
  proteins, 
  carbohydrates, 
  className 
}) => {
  const components = useMemo(() => ([
    { type: "calories", value: calories },
    { type: "proteins", value: proteins },
    { type: "fat", value: fat }, 
    { type: "carbohydrates", value: carbohydrates },
  ]), [fat, calories, proteins, carbohydrates])

  return(
    <article className={cn(styles.details, className)}>
      <img src={image} alt={name}/>
      <h1 className={cn(styles.name, "text text_type_main-medium mt-4 mb-8")}>{name}</h1>
      <ul className={styles.components}>
        {components.map(({type, value}, index) => (
          <li key={index} className={styles.component}>
            <p className={cn(styles.title, "text text_type_main-default text_color_inactive")}>{componentsTitles[type] ?? defaultComponentTitle}</p>
            <p className="text text_type_digits-default text_color_inactive">{value}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default IngredientDetail;
