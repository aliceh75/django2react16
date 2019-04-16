import React from "react";
import PropTypes from "prop-types";

class AppContent extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired
  };

  render() {
    return <div>Hello World: {this.props.counter}</div>;
  }
}

export default AppContent;
