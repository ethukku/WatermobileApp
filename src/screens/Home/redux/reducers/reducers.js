import { ADD_TO_BASKET } from "../types/types";

const initialState = {
  basketItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketItems: action.payload.basketItems,
      };
    default:
      return state;
  }
}
