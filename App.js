import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <AppNavigator />
  </ApplicationProvider>
);

export default App;