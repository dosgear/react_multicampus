import React, { Component } from "react";
import PropTypes from "prop-types";

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
    console.log("constructor InputTodo");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps InputTodo");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount InputTodo");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate InputTodo");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate InputTodo");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate InputTodo");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount InputTodo");
  }

  addHandler = () => {
    console.log("* call addHandler()");
    if (this.state.todo.trim() !== "") {
      this.props.addTodo(this.state.todo);
      console.log("* call InputTodo setState()");
      this.setState({ todo: "" });
    }
  };
  changeTodo = e => {
    console.log("* call changeTodo()");
    console.log("* call InputTodo setState()");
    this.setState({ todo: e.target.value });
  };
  enterHandler = e => {
    console.log("* call enterHandler()");
    if (e.keyCode === 13) {
      this.addHandler();
    }
  };

  render() {
    console.log("render InputTodo");
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
