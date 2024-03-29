import React, { Component } from 'react';
import styles from './styles';

class CountryItem extends Component {
  render() {
    const props = this.props;
    let item = props.country;
    return (
      <li style={styles.listItemStyle} className={item.visited ? 'list-group-item active' : 'list-group-item'}>
        {item.country}
      </li>
    );
  }
}

export default CountryItem;
