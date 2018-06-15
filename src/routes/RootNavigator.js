import { StackNavigator } from "react-navigation";
import HomePage from "../screens/HomePage";
import Details from "../screens/Details";

const RootNavigator = StackNavigator(
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
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "400"
        }
      };
    }
  }
);

export default RootNavigator;
