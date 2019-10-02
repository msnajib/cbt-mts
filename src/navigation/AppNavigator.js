import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from './../screens/SplashScreen';
import Home from './../screens/Home';
import Webview from './../screens/Webview';

const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Home: {
    screen: Home
  },
  Webview: {
    screen: Webview
  }
});

export default createAppContainer(AppNavigator);