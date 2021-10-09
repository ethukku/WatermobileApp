import { ADD_TO_BASKET } from "../types/types";
export const addToBasket = () => (dispatch) => {
  dispatch({
    type: ADD_TO_BASKET,
  });
  console.log("addToBasket action");
};
