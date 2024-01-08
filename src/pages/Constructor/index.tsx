import cn from 'classnames';

import AppHeader from '../../components/AppHeader';
import BurgerConstructor from "../../components/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients";

import styles from './index.module.css';

const Constructor: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients className={cn(styles.ingredients, "mr-10")} />
        <BurgerConstructor className={styles.constructor} />
      </main>
    </div>
  );
}

export default Constructor;
