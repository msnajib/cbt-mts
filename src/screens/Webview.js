import React, { Component } from 'react'
import { Text, View, BackHandler, Alert } from 'react-native'
import { WebView } from 'react-native-webview';

class Webview extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    this.state = {
      url: this.props.navigation.state.params.ipUrl
    }
  }

  componentDidMount() {
    if (this.state.url.startsWith('https://') === false) {
      this.setState({ url: 'https://'.concat('', this.state.url) })
    }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }

  backPressed = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false });
    return true;
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <WebView
          source={{ uri: this.state.url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </View>
    )
  }
}

export default Webview