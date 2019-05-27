import Cookies from "js-cookie";
import React from "react";

import AppContent from "./AppContent";

class App extends React.Component {
  state = {
    counter_value: 0
  }

  render() {
    return <div>
      <h1>Django2React16!</h1>
      <AppContent
        counter={this.state.counter_value}
        onIncCounter={() => this.handleIncCounter()}
      />
    </div>;
  }

  componentDidMount() {
    this.setState({counter_value: window.counter_value});
  }

  handleIncCounter() {
    fetch(`/api/${window.counter_pk}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({counter_value: data.value});
    }).catch((error) => {
      alert(error);
    });
  }
}

export default App;
