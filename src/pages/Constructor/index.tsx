import cn from 'classnames';
import { useMemo } from 'react';

import { useIngredients } from "../../resources/ingredients";

import AppHeader from '../../components/AppHeader';
import BurgerConstructor from "../../components/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients";

import styles from './index.module.css';

const Constructor: React.FC = () => {
  const [ingredients, loading, error] = useIngredients()

  const fallback = useMemo(() => {
    if (loading) {
      return <p className="text text_type_main-large">Загрузка</p>;
    } else if (error) {
      return <p className="text text_type_main-large">{error}</p>;
    }
    return null;
  }, [loading, error]);

  return (
    <div className={styles.wrapper}>
      <AppHeader/>
      <main className={styles.main}>
        {
            Boolean(fallback) || !ingredients ? fallback :
            <>
              <BurgerIngredients className={cn(styles.ingredients, "mr-10")} ingredients={ingredients} />
              <BurgerConstructor className={styles.constructor} scheme={{   
                bun: ingredients[7],
                ingredients: [
                  ingredients[5],
                  ingredients[6],
                  ingredients[6],
                  ingredients[6],
                  ingredients[1],
                  ingredients[1],
                  ingredients[1],
                ].map((value, index) => ({...value, key: index })) // иметируем простановку ключей
              }} />
            </>
        }
      </main>
    </div>
  );
}

export default Constructor;
