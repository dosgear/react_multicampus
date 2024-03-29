import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import Logger from "./Logger";

class List extends Component {
  render() {
    console.log("### List 컴포넌트 렌더");
    let items = this.props.itemlist.map(item => {
      return <ListItem key={item.no} itemone={item} isLog={true} />;
    });

    return <ul className="list-group">{items}</ul>;
  }
}

List.propTypes = {
  itemlist: PropTypes.arrayOf(PropTypes.object)
};

export default Logger(List);
