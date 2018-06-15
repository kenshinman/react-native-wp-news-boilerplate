import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import rootReducer from "../reducers";
import { autoRehydrate } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
