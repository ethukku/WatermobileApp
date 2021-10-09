import { combineReducers } from "redux";
import addToBasketReducer from "../screens/Home/redux/reducers/reducers";

const allReducer = combineReducers({
  addToBasketReducer,
});

export default allReducer;
