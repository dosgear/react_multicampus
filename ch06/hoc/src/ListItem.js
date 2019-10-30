import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Logger from "./Logger";

class ListItem extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return this.props.itemone !== nextProps.itemone;
  //   }

  render() {
    console.log("### ListItem 컴포넌트 렌더");
    let itemone = this.props.itemone;
    return (
      <li className="list-group-item list-group-item-success" isLog={true}>
        {itemone.no} : {itemone.item}
      </li>
    );
  }
}

ListItem.propTypes = {
  itemone: PropTypes.object.isRequired
};

export default Logger(ListItem);
