import { SET_CURRENT_MENU } from "./actionTypes";

export const setCurrentMenu = (key) => {
  return {
    type: SET_CURRENT_MENU,
    payload: {
      key,
    },
  };
};
