import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import { Container, Content } from "native-base";
import { fetchPosts } from "../../actions/postsActions";
import CardListItem from "../components/common/CardListItem";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  static navigationOptions = {
    title: "Top News",
    // headerStyle: {
    //   backgroundColor: "#3498db"
    // },
    // headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  renderPosts() {
    return this.props.posts.posts.map(post => {
      return (
        <CardListItem
          navigate={this.props.navigation.navigate}
          post={post}
          key={post.id}
        />
      );
    });
  }

  render() {
    if (this.props.posts.fetchingPosts) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <Container>
        <Content style={styles.container}>{this.renderPosts()}</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10
  }
});

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(HomePage);
