/** @format */

export const CursorReducer = (state, action) => {
  switch (action.type) {
    case "EXPAND":
      return false;
    case "SHRINK":
      return true;
    default:
      return state;
  }
};
