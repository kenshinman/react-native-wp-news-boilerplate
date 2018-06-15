import React from "react";
import { StackNavigator, createDrawerNavigator } from "react-navigation";
import HomePage from "../screens/HomePage";
import Details from "../screens/Details";
import { View, Text } from "react-native";
import { Icon } from "native-base";

const Stack = StackNavigator(
  {
    Home: {
      screen: HomePage,
      path: "/"
    },
    Details: {
      screen: Details,
      path: "post/:slug"
    }
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const RootNavigator = createDrawerNavigator(
  {
    Main: {
      screen: Stack,
      navigationOptions: ({ navigation }) => {
        return {
          drawerLabel: "Home",
          drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
        };
      }
    }
  },
  {
    contentComponent: () => {
      return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <Text style={{ fontSize: 24 }}>Header</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: "green" }}>
            <Text style={{ fontSize: 24 }}>Header</Text>
          </View>
        </View>
      );
    }
  }
);

export default RootNavigator;
