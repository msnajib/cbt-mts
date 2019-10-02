import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Input, Button } from 'react-native-ui-kitten'

class Home extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    this.state = {
      ipUrl: 'https://google.com',
      validate: ''
    }
  }


  onInputValueChange = (ipUrl) => {
    this.setState({ ipUrl });
  };

  handleOnPress = () => {
    // if (this.state.ipUrl === '') {
    //   this.setState({ validate: 'danger' })
    // } else {
    //   this.props.navigation.navigate('Webview', {
    //     ipUrl: this.state.ipUrl,
    //   })
    //   this.setState({ ipUrl: '', validate: '' })
    // }

    this.props.navigation.navigate('Webview', {
      ipUrl: this.state.ipUrl,
    })
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 80,
        paddingHorizontal: 20
      }}>
        <Image
          source={require('./../assets/logo-mts.png')}
          style={{
            width: 100,
            height: 100
          }} />

        <View style={{
          marginTop: 20,
          alignItems: 'center'
        }}>
          <Text category='h1' style={{
            textAlign: 'center',
            color: '#2f3542'
          }}>Selamat Datang</Text>
          <Text category='h5' style={{
            textAlign: 'center',
            color: '#2f3542'
          }}>CBT MTs NUSA</Text>
        </View>

        <Input
          size='small'
          status={this.state.validate}
          placeholder='IP URL. ex: 192.168.xxx.xxx'
          keyboardType='url'
          value={this.state.ipUrl}
          onChangeText={this.onInputValueChange}
          style={{
            backgroundColor: '#dfe4ea',
            marginTop: 25
          }}
        />
        <Button
          style={{
            width: '100%',
            marginTop: 10,
            backgroundColor: '#44bd32',
            borderColor: '#44bd32'
          }}
          onPress={this.handleOnPress}
          size='medium'>Let's Get Started</Button>

        <Text category='p2' style={{
          textAlign: 'center',
          width: 250,
          color: '#747d8c',
          position: 'absolute',
          bottom: 10
        }}>©2019 MTs NUSA Kenduren</Text>
      </View>
    )
  }
}

export default Home