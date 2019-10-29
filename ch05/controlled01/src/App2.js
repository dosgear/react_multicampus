import React, { Component } from "react";

class App2 extends Component {
  constructor() {
    super();
    this.state = { x: 0, y: 0, result: 0 };
  }
  add = () => {
    let x = parseInt(this.elemX.value);
    let y = parseInt(this.refs.elemY.value);
    if (isNaN(x)) x = 0;
    if (isNaN(y)) y = 0;
    this.setState({
      x: x,
      y: y,
      result: x + y
    });
  };
  render() {
    return (
      <div className="container">
        X :
        <input
          type="text"
          defaultValue={this.state.x}
          ref={input => {
            this.elemX = input;
          }}
        />
        <br />
        Y : <input type="text" defaultValue={this.state.y} ref="elemY" />
        <br />
        <button onClick={this.add}></button>
        <br />
        결과 : <span>{this.state.result}</span>
      </div>
    );
  }
}

export default App2;
