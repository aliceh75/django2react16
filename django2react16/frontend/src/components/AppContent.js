import React from "react";
import PropTypes from "prop-types";

class AppContent extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    onIncCounter: PropTypes.func.isRequired
  };

  render() {
    return <div>
      <p>Hello World: {this.props.counter}</p>
      <button onClick={this.props.onIncCounter}>Increment</button>
    </div>;
  }
}

export default AppContent;
