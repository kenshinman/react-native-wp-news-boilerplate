import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import rootReducer from "../reducers";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
