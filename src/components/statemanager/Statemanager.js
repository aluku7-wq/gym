/** @format */

import React, { createContext, useReducer } from "react";
import { CursorReducer } from "./reducers/CursorReducer";
export const GymContext = createContext();
export const Statemanager = (props) => {
  const [cursorstate, cursorDispatch] = useReducer(CursorReducer, false);
  const info = { cursorstate, cursorDispatch };
  return (
    <GymContext.Provider value={info}>{props.children}</GymContext.Provider>
  );
};
