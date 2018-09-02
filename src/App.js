import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <div>Hello World</div> */}
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
