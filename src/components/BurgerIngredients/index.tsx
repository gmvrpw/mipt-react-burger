import React, { useMemo, useState } from "react";
import cn from "classnames";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import * as C from './components';

import { BurgerIngredientsProps, Category } from "./types";
import { getCategories } from "./utils";
import styles from './index.module.css';

const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ ingredients, className }) => {
  const categories: Category[] = useMemo(() => getCategories(ingredients), [ingredients])
  const [active, setActive] = useState<string>(categories[0].type)

  return (
    <article className={cn(styles.container, className)}>
      <h1 className={cn("text text_type_main-large mt-10 mb-5")}>Соберите бургер</h1>
      <div className={cn(styles.menu)}>
        {categories.map((category, index) => (
          <Tab
            key={index}
            value={category.type}
            active={category.type === active}
            onClick={() => setActive(category.type)}
          >{category.title}</Tab>
        ))}
      </div>
      <div className={cn(styles.ingredients, "mt-10")}>
        {categories.map((category, index) => (
          <C.IngredientsCategory key={index} category={category} className={"mb-10"} />
        ))}
      </div>
    </article>
  )
}

export default BurgerIngredients;
