import React, { Component } from "react";
import axios from "axios";
import { Linking } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import IndexRoute from "./src/routes/IndexRoute";

axios.defaults.baseURL = "http://punchng.com/wp-json/wp/v2";

export default class App extends Component {
  // componentDidMount() {
  //   Linking.getInitialURL()
  //     .then(url => {
  //       if (url) {
  //         console.log("Initial url is: " + url);
  //       }
  //     })
  //     .catch(err => console.error("An error occurred", err));
  // }
  render() {
    return (
      <Provider store={store}>
        <IndexRoute />
      </Provider>
    );
  }
}
