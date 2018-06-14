import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  WebView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import Share from "react-native-share";
import { Container, Content, H3, Fab } from "native-base";
import HTML from "react-native-render-html";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "News"
    };
  };

  handleShare() {}

  //
  render() {
    const {
      title,
      x_featured_media_medium,
      content
    } = this.props.navigation.getParam("post", {});
    const h_title = `<h2 style="color: #333">${title.rendered}</h2>`;

    return (
      <Container>
        <Content style={styles.container}>
          <HTML
            renderers={{
              h_title: () => <Text>hello</Text>
            }}
            html={h_title}
            tagsStyles={{}}
          />
          <Image
            source={{ uri: x_featured_media_medium }}
            style={{ height: 280, width: null }}
          />
          <HTML
            html={content.rendered}
            imagesMaxWidth={Dimensions.get("window").width}
            tagsStyles={{
              p: {
                color: "#333",
                fontSize: 16,
                lineHeight: 20,
                marginBottom: 20
              }
            }}
          />
          <View style={{ height: 40, width: null }} />
        </Content>
        <Fab />
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
