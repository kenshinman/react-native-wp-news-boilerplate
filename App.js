import React, { Component } from "react";
import axios from "axios";
import { Linking } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import IndexRoute from "./src/routes/IndexRoute";

axios.defaults.baseURL = "https://punchng.com/wp-json/wp/v2";

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

  // testing deep link

  componentDidMount() {
    Linking.addEventListener("url", this.handleOpenURL);
  }
  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleOpenURL);
  }
  handleOpenURL(event) {
    console.log(event.url);
    const route = e.url.replace(/.*?:\/\//g, "");
    // do something with the url, in our case navigate(route)
  }

  // testing deep link

  render() {
    return (
      <Provider store={store}>
        <IndexRoute />
      </Provider>
    );
  }
}
