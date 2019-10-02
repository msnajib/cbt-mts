import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';

export default class SplashScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });
      this.props.navigation.dispatch(resetAction);
    }, 2000);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
          source={require('./../assets/logo-mts.png')}
          style={{
            width: 200,
            height: 200
          }} />
      </View>
    )
  }
}