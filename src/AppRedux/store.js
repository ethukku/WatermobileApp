import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./rootReducer";

const store = createStore(allReducer, applyMiddleware(thunk));

export { store };
