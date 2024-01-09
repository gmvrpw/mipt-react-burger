import React, { useMemo, useState, useEffect, useRef } from "react";
import cn from "classnames";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import useIngredients from "../../store/hooks/ingredients";
import useBurgerConstructorCount from "../../store/hooks/burgerConstructorCount";

import Show from "../Show";

import * as C from './components';
import * as T from "./types";
import { getCategories } from "./utils";
import styles from './index.module.css';

const BurgerIngredients: React.FC<T.BurgerIngredientsProps> = ({ className }) => {
  const [ingredients, loading] = useIngredients()
  const count = useBurgerConstructorCount()

  const categories: T.Category[] = useMemo(() => getCategories(ingredients), [ingredients])
  const [active, setActive] = useState<number>(0)
  
  const categoriesRef = useRef<HTMLDivElement | null>(null)
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    categoryRefs.current.slice(0, categories.length);
  }, [categories])

  useEffect(() => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollTop = categoryRefs.current[active]?.offsetTop ?? 0;
    }
  }, [active])

  return (
    <article className={cn(styles.container, className)}>
      <h1 className={cn("text text_type_main-large mt-10 mb-5")}>Соберите бургер</h1>
      <Show when={!loading} fallback={<p>Loading</p>}>
        <div className={cn(styles.menu)}>
          {categories.map((category, index) => (
            <Tab
              key={index}
              value={category.type}
              active={index === active}
              onClick={() => setActive(index)}
            >{category.title}</Tab>
          ))}
        </div>
        <div ref={categoriesRef} className={cn(styles.ingredients, "mt-10")}>
          {categories.map((category, index) => (
            <C.IngredientsCategory 
              ref={el => categoryRefs.current[index] = el}
              key={index}
              category={category}
              count={count}
              className={"mb-10"}
            />
          ))}
        </div>
      </Show>
    </article>
  )
}

export default BurgerIngredients;
