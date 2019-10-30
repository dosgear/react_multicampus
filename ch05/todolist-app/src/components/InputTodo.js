import React, { Component } from "react";
import PropTypes from "prop-types";

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  addHandler = () => {
    if (this.state.todo.trim() !== "") {
      this.props.addTodo(this.state.todo);
      this.setState({ todo: "" });
    }
  };
  changeTodo = e => {
    this.setState({ todo: e.target.value });
  };
  enterHandler = e => {
    if (e.keyCode === 13) {
      this.addHandler();
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="input-group">
            <input
              id="msg"
              type="text"
              className="form-control"
              name="msg"
              placeholder="할일을 여기에 입력!"
              value={this.state.todo}
              onChange={this.changeTodo}
              onKeyUp={this.enterHandler}
            />
            <span className="btn btn-primary input-group-addon" onClick={this.addHandler}>
              추가
            </span>
          </div>
        </div>
      </div>
    );
  }
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default InputTodo;
