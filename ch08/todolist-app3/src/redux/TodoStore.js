import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

// const TodoStore = createStore(RootReducer);
// export default TodoStore;

const logger = store => next => action => {
  // console.log("# 변경 전 상태: ", store.getState());
  if (typeof action !== "undefined") {
    // console.log("### action: ", JSON.stringify(action));
    console.log("### action 실행 : ", new Date().toLocaleTimeString(), JSON.stringify(action));
    return next(action);
  }
  // console.log("# 변경 후 상태: ", store.getState());
};

const TodoStore = createStore(RootReducer, applyMiddleware(logger, thunk));
export default TodoStore;
