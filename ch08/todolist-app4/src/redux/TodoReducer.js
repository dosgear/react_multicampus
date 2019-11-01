import Constant from "../Constant";
import produce from "immer";

const initialState = {
  todolist: [
    { no: 1, todo: "React", done: false },
    { no: 2, todo: "ES6", done: true },
    { no: 3, todo: "Redux", done: false },
    { no: 4, todo: "Mobx", done: false }
  ]
};

const TodoReducer = (todolist = initialState.todolist, action) => {
  let index, newTodoList;
  switch (action.type) {
    case Constant.ADD_TODO:
      newTodoList = produce(todolist, draft => {
        draft.push({ no: new Date().getTime(), todo: action.payload.todo, done: false });
      });
      return newTodoList;
    case Constant.DELETE_TODO:
      index = todolist.findIndex(item => item.no === action.payload.no);
      newTodoList = produce(todolist, draft => {
        draft.splice(index, 1);
      });
      return newTodoList;
    case Constant.TOGGLE_DONE:
      index = todolist.findIndex(item => item.no === action.payload.no);
      newTodoList = produce(todolist, draft => {
        draft[index].done = !draft[index].done;
      });
      return newTodoList;
    default:
      return todolist;
  }
};

export default TodoReducer;
