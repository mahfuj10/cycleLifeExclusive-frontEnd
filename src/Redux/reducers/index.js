import counterReducer from "./Counter";
import productReducer from "./products";
import loggedReducer from "./Logged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    products: productReducer

})

export default allReducer;