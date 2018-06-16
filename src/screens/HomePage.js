import React, { Component } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  RefreshControl,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { Container, Content, Button, Icon } from "native-base";
import { fetchPosts, fetchMorePosts } from "../../actions/postsActions";
import CardListItem from "../components/common/CardListItem";
import InfiniteScroll from "react-native-infinite-scroll";
import HTML from "react-native-render-html";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      per_page: 20,
      refreshing: false
    };
  }

  componentWillMount() {
    this.props.fetchPosts(this.state.page, this.state.per_page);
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Top News",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerLeft: (
      <Button
        style={{ marginTop: 5 }}
        onPress={() => {
          navigation.openDrawer();
        }}
        transparent>
        <Icon name="menu" style={{ color: "#fff" }} />
      </Button>
    ),
    headerRight: (
      <Button
        style={{ marginTop: 5 }}
        onPress={() => {
          alert("more");
        }}
        transparent>
        <Icon name="more" style={{ color: "#fff" }} />
      </Button>
    )
  });

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

  loadMoreData() {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.fetchMorePosts(this.state.page, this.state.per_page);
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
        <InfiniteScroll
          refreshControl={
            <RefreshControl
              onRefresh={() =>
                this.props.fetchPosts(this.state.page, this.state.per_page)
              }
              refreshing={this.state.refreshing}
            />
          }
          horizontal={false} //true - if you want in horizontal
          onLoadMoreAsync={this.loadMoreData.bind(this)}
          distanceFromEnd={10} // distance in density-independent pixels from the right end
        >
          {this.renderPosts()}
          {this.props.posts.fetchingMorePosts && (
            <ActivityIndicator size="large" />
          )}
          <View style={{ marginHorizontal: 25, width: null, height: 10 }} />
        </InfiniteScroll>
        {/* </ScrollView> */}
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
  { fetchPosts, fetchMorePosts }
)(HomePage);
