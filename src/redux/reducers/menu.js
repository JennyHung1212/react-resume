import { SET_CURRENT_MENU } from "../actionTypes";

const initialState = {
  current: "home",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MENU:
      const { key } = action.payload;
      return {
        ...state,
        current: key,
      };
    default:
      return state;
  }
}
