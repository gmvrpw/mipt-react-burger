import { useEffect } from 'react';
import cn from 'classnames';

import { ModalOverlayProps } from "./types";
import styles from './index.module.css';

const ModalOverlay: React.FC<ModalOverlayProps> = ({ close, className, children }) => {
  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close()
      }
    }
    document.addEventListener("keyup", closeByEscape)
    return () => {
      document.removeEventListener("keyup", closeByEscape)
    }
  })

  return (
    <div
      className={cn(styles.overlay, className)}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          close();
        }
      }}
    >
      {children}
    </div>
  )
}

export default ModalOverlay;
