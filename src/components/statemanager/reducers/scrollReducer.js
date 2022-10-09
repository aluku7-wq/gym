/** @format */

export const scrollReducer = (sidebar, action) => {
  switch (action.type) {
    case "SIDE":
      return !sidebar;

    default:
      return sidebar;
  }
};
