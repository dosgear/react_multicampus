import React, { Component } from "react";
import App from "./App";
import produce from "immer";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { no: 1, todo: "React", done: false },
        { no: 2, todo: "ES6", done: true },
        { no: 3, todo: "Redux", done: false },
        { no: 4, todo: "Mobx", done: false }
      ]
    };
  }

  addTodo = todo => {
    let newTodoList = produce(this.state.todolist, draft => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    this.setState({ todolist: newTodoList });
  };
  deleteTodo = no => {
    let index = this.state.todolist.findIndex(item => item.no === no);
    let newTodoList = produce(this.state.todolist, draft => {
      draft.splice(index, 1);
    });
    this.setState({ todolist: newTodoList });
  };
  toggleDone = no => {
    let index = this.state.todolist.findIndex(item => item.no === no);
    let newTodoList = produce(this.state.todolist, draft => {
      draft[index].done = !draft[index].done;
    });
    this.setState({ todolist: newTodoList });
  };

  render() {
    return (
      <App
        todolist={this.state.todolist}
        addTodo={this.addTodo}
        deleteTodo={this.deleteTodo}
        toggleDone={this.toggleDone}
      />
    );
  }
}

export default AppContainer;
