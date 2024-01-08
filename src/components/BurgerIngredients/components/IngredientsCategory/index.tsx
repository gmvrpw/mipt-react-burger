import React from "react";
import cn from 'classnames'

import IngredientCard from "../../../IngredientCard";

import { IngredientsCategoryProps } from "./types";
import styles from './index.module.css';

const IngredientsCategory = React.forwardRef<HTMLDivElement, IngredientsCategoryProps>(({ category, count, className }, ref) => (
  <article ref={ref} className={cn(styles.container, className)}>
    <h1 className="text text_type_main-medium mb-6">{category.title}</h1>
    <div className={cn(styles.grid, "pl-1 pr-1 pt-2 pb-6")}>
      {category.ingredients.map((ingredient) => (
        <IngredientCard
          key={ingredient._id}
          ingredient={ingredient}
          className={"mt-4 mb-4 ml-3 mr-3"}
          count={count[ingredient._id] ?? 0}
        />
      ))}
    </div>
  </article>
))

export default IngredientsCategory;
