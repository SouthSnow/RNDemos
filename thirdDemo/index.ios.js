/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var SearchPage = require('./SearchPage');


class thirdDemo extends Component {
  render() {
    return (
      <NavigatorIOS 
        style = {styles.container}
        initialRoute = {{
          title: 'Property Finder',
          component: SearchPage,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('thirdDemo', () => thirdDemo);
