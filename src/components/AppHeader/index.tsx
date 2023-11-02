import cn from 'classnames'
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Link from "../Link";

import styles from './index.module.css';

const AppHeader: React.FC = () => {
  return (
    <header className={cn(styles.header, "p-4")}>
      <nav className={styles.navigation}>
        <div className={cn(styles.group, styles.group_aligment_start)}>
          <Link Icon={BurgerIcon} href="container">Конструктор</Link>
          <Link Icon={ListIcon} href="container">Лента закаpов</Link>
        </div>
        <Logo/>
        <div className={cn(styles.group, styles.group_aligment_end)}>
          <Link Icon={ProfileIcon} href="container">Личный кабинет</Link>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader;
