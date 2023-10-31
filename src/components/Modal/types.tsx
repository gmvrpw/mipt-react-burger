import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  title?: string,
  show: boolean,
  close: () => void,
}
