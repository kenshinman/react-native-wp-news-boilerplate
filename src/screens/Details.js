import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  RefreshControl,
  Linking,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import Share from "react-native-share";
import { Container, Content, Fab, Button, Icon } from "native-base";
import HTML from "react-native-render-html";
import moment from "moment";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: {
          rendered: ""
        },

        content: {
          rendered: ""
        }
      },
      pageTitle: "",
      loading: true
    };
  }

  fetchPost() {
    this.setState({ loading: true });
    console.log("na fetching");
    const slug = this.props.navigation.state.params.slug;
    console.log("slug", slug);
    let url = `http://punchng.com/wp-json/wp/v2/posts?slug=${slug}`;
    console.log(url);
    fetch(url)
      .then(r => {
        console.log("r=> ", r);
        return r.json();
      })
      .then(response => {
        console.log("res=>", response, "<=res");

        this.setState({ post: response[0], loading: false }, () => {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "News"
    };
  };

  componentDidMount() {
    if (Object.keys(this.props.navigation.getParam("post", {})).length > 0) {
      console.log("data is here");
      this.setState({
        post: this.props.navigation.getParam("post", {}),
        loading: false
      });
    } else {
      console.log("no data");
      this.fetchPost();
    }
  }

  render() {
    console.log(this.props.navigation.getParam("slug", {}));
    const {
      title,
      x_featured_media_medium,
      content,
      guid,
      date
    } = this.state.post;
    const h_title = `<h2 style="color: #333">${title.rendered}</h2>`;

    if (this.state.loading) {
      console.log(this.props.navigation);
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <Container>
        <Content style={styles.container}>
          <HTML
            renderers={{
              h_title: () => <Text>hello</Text>
            }}
            html={h_title}
            // tagsStyles={{}}
          />
          <Image
            source={{ uri: x_featured_media_medium }}
            style={{ height: 280, width: null }}
          />
          <Text note style={{ marginVertical: 20 }}>
            <Icon name="time" style={{ fontSize: 14 }} />{" "}
            {moment(date).format("h:mm a")} {"    "}
            <Icon name="calendar" style={{ fontSize: 14 }} />{" "}
            {moment(date).format("ddd, MMM Do, YYYY")}
          </Text>
          <HTML
            html={content.rendered}
            imagesMaxWidth={Dimensions.get("window").width}
            tagsStyles={{
              p: {
                color: "#333",
                fontSize: 16,
                lineHeight: 20,
                marginBottom: 20
              },
              body: { paddingLeft: 40 }
            }}
            onLinkPress={(e, href, obj) => {
              if (href.includes("http://punchng.com")) {
                const url = href.split("http://punchng.com");
                const newUrl = url[1].replace(/\//g, "");
                Linking.openURL(`topnews://topnews/post/${newUrl}`);
              } else {
                Linking.openURL(href);
              }
            }}
          />
          <View style={{ height: 40, width: null }} />
        </Content>
        <Fab
          active={this.state.open}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => {
            Share.open({
              url: guid.rendered,
              title: title.rendered,
              message: "Read this please",
              subject: "Have you read this?"
            });
          }}>
          <Icon name="share" />
        </Fab>
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
  temp: state.temp
});

export default connect(
  mapStateToProps,
  {}
)(Details);
