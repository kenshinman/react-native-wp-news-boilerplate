import React, { Component } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./src/store";
import IndexRoute from "./src/routes/IndexRoute";

axios.defaults.baseURL = "http://punchng.com/wp-json/wp/v2";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IndexRoute />
      </Provider>
    );
  }
}
