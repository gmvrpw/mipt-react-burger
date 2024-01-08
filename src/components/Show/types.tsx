import React, { PropsWithChildren } from "react";

export interface ShowProps extends PropsWithChildren {
  when: boolean;
  fallback: React.ReactNode;
}
