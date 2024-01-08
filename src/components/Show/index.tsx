import { FC } from "react";

import * as T from './types';

const Show: FC<T.ShowProps> = ({ when, fallback, children }) => (<> { when ? children : fallback} </>)

export default Show;
