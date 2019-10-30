import React from "react";
import PropTypes from "prop-types";

import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const App = props => {
  console.log("render App");
  return (
    <div className="container">
      <div className="well">
        <div className="title">:: Todolist App</div>
      </div>
      <div className="panel panel-default panel-borderless">
        <div className="panel-body">
          <InputTodo addTodo={props.addTodo} />
          <TodoList todolist={props.todolist} toggleDone={props.toggleDone} deleteTodo={props.deleteTodo} />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.object),
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired
};

export default App;
