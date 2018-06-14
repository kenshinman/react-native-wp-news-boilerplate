import { StackNavigator } from "react-navigation";
import Auth from "../screens/Auth";

const AuthNavigator = StackNavigator({
  Auth: {
    screen: Auth
  }
});

export default AuthNavigator;
