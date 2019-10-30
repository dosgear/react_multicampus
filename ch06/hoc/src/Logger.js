import React, { Component } from "react";
import PropTypes from "prop-types";
import ms from "microseconds";

let Logger = LoggingComponent => {
  class Logger extends Component {
    constructor(props) {
      super(props);
      if (this.props.isLog) {
        this.start = ms.now();
      }
    }

    componentDidMount() {
      if (this.props.isLog) {
        let ts = ms.now() - this.start;
        console.log(`### ${this.componentName} mounted: ${ts} microseconds.`);
      }
    }

    render() {
      this.componentName = LoggingComponent.name;
      return <LoggingComponent {...this.props} />;
    }
  }

  Logger.propTypes = {
    isLog: PropTypes.bool.isRequired
  };

  Logger.defaultProps = {
    isLog: false
  };

  return Logger;
};

export default Logger;
