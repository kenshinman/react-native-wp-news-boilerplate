import { StackNavigator } from "react-navigation";
import HomePage from "../screens/HomePage";
import Details from "../screens/Details";

const RootNavigator = StackNavigator({
  Home: {
    screen: HomePage
  },
  Details: {
    screen: Details
  }
});

export default RootNavigator;
