import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { setLocalStorage } from "@utils/localStorage";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
});

export default store;
