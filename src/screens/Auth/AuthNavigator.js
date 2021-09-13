import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import NumberVerification from "../NumberVerification/NumberVerification";
import Otp from "../NumberVerification/Otp";
import OnboardingScreen from "../Onboarding/Artik/Onboarding";
import LoginScreen from "./LoginScreen";

const MainNavigator = createStackNavigator(
  {
    Onboarding: OnboardingScreen,
    Login: LoginScreen,
    Verification: NumberVerification,
    Otp: Otp,
  },
  {
    initialRouteName: "Onboarding",
    defaultNavigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  }
);

const DrawerStack = createDrawerNavigator({
  Main: MainNavigator,
});

export default AuthNavigator = createAppContainer(DrawerStack);
