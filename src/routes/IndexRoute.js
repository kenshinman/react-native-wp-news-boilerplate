import React, { Component } from "react";
import { connect } from "react-redux";
import { Platform, StatusBar } from "react-native";
import RootNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";

const prefix = Platform.OS == "android" ? "topnews://topnews/" : "topnews://";
class IndexRoute extends Component {
  state = {};
  render() {
    return [
      <StatusBar
        backgroundColor="#c23616"
        barStyle="light-content"
        key="statBar"
      />,
      <RootNavigator key="mainNav" uriPrefix="topnews://topnews/" />
    ];
    if (this.props.auth.isAuthenticated) {
      return <RootNavigator />;
    } else {
      return <AuthNavigator />;
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(IndexRoute);
