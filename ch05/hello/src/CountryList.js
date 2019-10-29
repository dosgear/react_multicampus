import React, { Component } from 'react';
import CountryItem from './CountryItem';

class CountryList extends Component {
  render() {
    const props = this.props;
    let list = props.countries;
    let countries = list.map((item, index) => {
      return <CountryItem key={item.no} country={item} />;
    });
    return <ul>{countries}</ul>;
  }
}

export default CountryList;
