import App from "./App";
import TodoActionCreator from "../redux/TodoActionCreator";
import TimeActionCreator from "../redux/TimeActionCreator";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime,
    todolist: state.todolist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTime: () => dispatch(TimeActionCreator.changeTime()),
    addTodo: todo => dispatch(TodoActionCreator.addTodo(todo)),
    deleteTodo: no => dispatch(TodoActionCreator.deleteTodo(no)),
    toggleDone: no => dispatch(TodoActionCreator.toggleDone(no))
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
