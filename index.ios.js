/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PgButton from './js/pgButton.js';

var PROGRESS_BUTTON_TIME_INTERVAL = 1200;
var PROGRESS_BUTTON_COLORS = ['rgb(255,255,255)', 'rgb(124,142,162)'];
var PROGRESS_BUTTON_STATES = ['Submit', 'Sending', 'Sent'];

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ProgressButton extends Component {
  
  buttonPressed() {
    console.log("Hello button Pressed");
  }
  
  render() {
    return (
      <View style={styles.container}>
        <PgButton
          style={styles.requestButton}
          onPress={() => this.buttonPressed()}
          progressDuration={1200}
          progressColors={PROGRESS_BUTTON_COLORS}
          states={PROGRESS_BUTTON_STATES}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  requestButton: {
    height: 50,
    width: 150,
    marginLeft: -2,
    backgroundColor: '#435e7c',
    justifyContent: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

AppRegistry.registerComponent('ProgressButton', () => ProgressButton);
