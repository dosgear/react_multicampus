import React, { Component } from 'react';
import CountryList from './CountryList';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      msg: '<i>World!!</i>',
      list: [
        { no: 1, country: '이집트', visited: false },
        { no: 2, country: '일본', visited: true },
        { no: 3, country: '피지', visited: false },
        { no: 4, country: '콜롬비아', visited: false },
      ],
    };
  }

  createString(x, y) {
    return (
      <div class="well">
        {x} + {y} = {x + y}
      </div>
    );
  }

  render() {
    return (
      <div class="container">
        <h1>Hello {this.state.msg}!!</h1>
        <hr class="dash-style" />
        {this.createString(4, 5)}
        <CountryList countries={this.state.list} />
      </div>
    );
  }
}

export default App;
