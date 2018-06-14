import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import moment from "moment";
import HTML from "react-native-render-html";
import {
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Thumbnail
  // Image
} from "native-base";

class CardListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      title,
      x_featured_media_medium,
      date,
      x_categories
    } = this.props.post;
    const h_title = `<h3>${title.rendered}</h3>`;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigate("Details", {
            post: this.props.post
          })
        }>
        <Card>
          <CardItem>
            <Left>
              {/* <Thumbnail source={{ uri: "Image URL" }} /> */}
              <Body>
                <HTML
                  html={h_title}
                  tagsStyles={{
                    h3: {
                      color: "#333",
                      fontWeight: "400"
                    }
                  }}
                />
                <Text note>
                  <Icon name="time" style={{ fontSize: 14 }} />{" "}
                  {moment(date).format("h:mm a, ddd, MMM Do, YYYY")}
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <ImageBackground
              source={{ uri: x_featured_media_medium }}
              style={{ height: 200, width: null, flex: 1 }}>
              {/* <Text>{title.rendered}</Text> */}
            </ImageBackground>
          </CardItem>
          <CardItem>
            <Left>
              <Text>{x_categories}</Text>
            </Left>
            <Body />
            <Right>
              <Text note>
                <Icon name="chatbubbles" /> <Icon name="bookmark" />
              </Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}
const styles = {
  smallIcon: 12
};

export default CardListItem;
