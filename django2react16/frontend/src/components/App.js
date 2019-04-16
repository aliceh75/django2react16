import React from "react";
import AppContent from "./AppContent";

class App extends React.Component {
  render() {
    return <div>
      <h1>Django2React16!</h1>
      <AppContent counter={1} />
    </div>;
  }
}

export default App;
