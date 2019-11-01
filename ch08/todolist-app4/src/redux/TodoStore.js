import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

import TimeActionCreator from "./TimeActionCreator";
import TodoActionCreator from "./TodoActionCreator";
import { composeWithDevTools } from "redux-devtools-extension";
import invariant from "redux-immutable-state-invariant";

let TodoStore;
if (process.env.NODE_ENV === "production") {
  TodoStore = createStore(RootReducer, applyMiddleware(invariant(), thunk));
} else {
  const composeEnhancers = composeWithDevTools({
    ...TimeActionCreator,
    ...TodoActionCreator
  });
  TodoStore = createStore(RootReducer, composeEnhancers(applyMiddleware(invariant(), thunk)));
}

export default TodoStore;
