import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  title?: string,
  close: () => void,
}
