import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const TodoList = props => {
  let todoItems = props.todolist.map(item => {
    return <TodoItem key={item.no} todoitem={item} deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} />;
  });

  return (
    <div className="row">
      <ul className="list-group">{todoItems}</ul>
    </div>
  );
};

TodoList.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.object),
  toggleDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
