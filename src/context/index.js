import { combineReducers, legacy_createStore } from "redux";
import wishlist from "./wishlist";
import token from "./token";
import cart from "./cart";

const reducers = combineReducers({
  wishlist,
  cart,
  token,
});

export const store = legacy_createStore(reducers);
