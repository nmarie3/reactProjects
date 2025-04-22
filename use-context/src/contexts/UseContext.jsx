//useContext is a way to pass data through the component tree without having to manually pass props down each level of the tree;

import { createContext } from "react";

export const UserContext = createContext(null);