const WEBVIEW_REF = "WEBVIEW_REF";
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, PermissionsAndroid} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Example App',
          'message': 'Example App access to your location '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        alert("You can use the location");
        this.state.loading = "false";
      } else {
        console.log("location permission denied")
        alert("Location permission denied");
        this.state.loading = "false";
      }
    } catch (err) {
      console.warn(err)
    }
  }

    componentWillMount() {
      this.requestLocationPermission()
    }

    render() {
      return (
        <View style={styles.container}>
          <WebView 
            ref={WEBVIEW_REF}
            geolocationEnabled={true}
            javascriptEnabled={true}
            source={{uri: 'https://html5demos.com/geo/'}} 
        />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
