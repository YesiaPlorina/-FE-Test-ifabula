import { applyMiddleware, createStore } from "redux";

import reducer from "./reducers/index";
import thunk from "redux-thunk";

let middlewares = applyMiddleware(thunk);

export const store = createStore(reducer, middlewares);
