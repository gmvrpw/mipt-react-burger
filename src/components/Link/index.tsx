import React from "react";
import cn from 'classnames';

import { LinkProps } from "./types";
import styles from './index.module.css';

const Link: React.FC<LinkProps> = ({Icon, children, className, ...others}) => {
  return (
    <a 
      className={cn(
        styles.link,
        "pl-5 pr-5 pt-4 pb-4",
        className
      )} 
      {...others}
    >
      <Icon type="secondary" />
      <span className="text text_type_main-default ml-2">{children}</span>
    </a>
  )
}

export default Link;
