import React from "react";
import { createPortal } from "react-dom";
import cn from 'classnames';

import * as C from './components';

import { ModalProps } from "./types";
import styles from './index.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal: React.FC<ModalProps> = ({ title, show, close, children }) => {
  return (
    <>
      {!show ? false : createPortal(
        <C.ModalOverlay className={styles.overlay} close={close}>
          <section className={cn(styles.modal, "p-10")}>
            <div className={styles.header}>
              <h1 className={cn(styles.title, "text text_type_main-large mr-9")}>
                {title}
              </h1>
              <CloseIcon type="primary" onClick={() => close()}/>
            </div>
            {children}
          </section>
        </C.ModalOverlay>,
        document.body
      )}
    </>
  )
}

export default Modal;
