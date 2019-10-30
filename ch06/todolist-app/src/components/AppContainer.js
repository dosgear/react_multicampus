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
    console.log("constructor AppContainer");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps AppContainer");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount AppContainer");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate AppContainer");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate AppContainer");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate AppContainer");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount AppContainer");
  }

  addTodo = todo => {
    console.log("* call addTodo()");
    let newTodoList = produce(this.state.todolist, draft => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    console.log("* call AppContainer setState()");
    this.setState({ todolist: newTodoList });
  };
  deleteTodo = no => {
    console.log("* call deleteTodo()");
    let index = this.state.todolist.findIndex(item => item.no === no);
    let newTodoList = produce(this.state.todolist, draft => {
      draft.splice(index, 1);
    });
    console.log("* call AppContainer setState()");
    this.setState({ todolist: newTodoList });
  };
  toggleDone = no => {
    console.log("* call toggleDone()");
    let index = this.state.todolist.findIndex(item => item.no === no);
    let newTodoList = produce(this.state.todolist, draft => {
      draft[index].done = !draft[index].done;
    });
    console.log("* call AppContainer setState()");
    this.setState({ todolist: newTodoList });
  };

  render() {
    console.log("render AppContainer");
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
