import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";

import {
  Content,
  Container,
  H3,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

import { loginUser } from "../../actions/authActions";
import { connect } from "react-redux";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  doLogin() {
    const data = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(data);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Login"
    };
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#fff", padding: 10 }}>
        <Content>
          <Form
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              paddingBottom: 30,
              marginTop: 20
            }}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                keyboardType="email-address"
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry={true}
              />
            </Item>

            <Button block light onPress={this.doLogin.bind(this)}>
              <Text> Login </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(Auth);
