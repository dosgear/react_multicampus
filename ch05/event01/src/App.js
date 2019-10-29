import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }

  add() {
    /* 기본 */
    // this.setState({ num: this.state.num + 1 });
    // console.log("## num: " + this.state.num);

    /* 콜백 함수로 연속 처리 */
    // this.setState({ num: this.state.num + 1 }, () => {
    //   console.log("## num: " + this.state.num);
    // });

    /* setState에 함수를 전달  */
    this.setState(state => {
      return { num: this.state.num + 1 };
    });
  }

  subtract = () => {
    this.setState({ num: this.state.num - 1 });
  };

  render() {
    return (
      <div className="well">
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary" onClick={this.subtract}>
            <span className="glyphicon glyphicon-minus"></span>
          </button>
          <button type="button" className="btn btn-primary" onClick={this.add.bind(this)}>
            <span className="glyphicon glyphicon-plus"></span>
          </button>
          <input type="text" className="form-control input-number" value={this.state.num} />
        </span>
      </div>
    );
  }
}

export default App;
