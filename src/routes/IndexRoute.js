import React, { Component } from "react";
import { connect } from "react-redux";
import RootNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";

class IndexRoute extends Component {
  state = {};
  render() {
    return <RootNavigator />;
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
