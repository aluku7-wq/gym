/** @format */

import React, { createContext, useReducer } from "react";
import { CursorReducer } from "./reducers/CursorReducer";
import { scrollReducer } from "./reducers/scrollReducer";
export const GymContext = createContext();
export const Statemanager = (props) => {
  const [cursorstate, cursorDispatch] = useReducer(CursorReducer, false);
  const [sidebar, sidedipatch] = useReducer(scrollReducer, false);
  const info = { cursorstate, cursorDispatch, sidebar, sidedipatch };
  return (
    <GymContext.Provider value={info}>{props.children}</GymContext.Provider>
  );
};
