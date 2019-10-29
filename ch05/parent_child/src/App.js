import React, { Component } from "react";
import produce from "immer";

import MyButton from "./MyButton";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    };
  }

  addItem() {
    if (!this.num) this.num = 0;
    this.num++;
    let newItemList = produce(this.state.itemList, draft => {
      draft.push({ no: this.num, item: "아이템: " + this.num });
    });
    this.setState({ itemList: newItemList });
  }

  render() {
    return (
      <div className="container">
        <div className="well">
          <MyButton addItem={this.addItem.bind(this)} />
          <List itemlist={this.state.itemList} />
        </div>
      </div>
    );
  }
}

export default App;
