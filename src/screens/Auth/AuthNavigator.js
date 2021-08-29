import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from './LoginScreen';


const MainNavigator = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: ({ navigation }) => ({
      headerShown: false,
    })
  },

); 

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
);
 
export default AuthNavigator = createAppContainer(DrawerStack);
