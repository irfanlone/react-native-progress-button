/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PgButton from './js/pgButton.js';

var ANIMATION_TIME_INTERVAL = 1400;

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ProgressButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }

  buttonPressed() {
    this.setState({
      message: "Action Completed!!"
    });
    setTimeout(() => {
      this.setState({
        message: null
      });
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.actionText}> {this.state.message} </Text>
        <PgButton
          style={styles.submitButton}
          onPress={() => this.buttonPressed()}
          progressDuration={ANIMATION_TIME_INTERVAL}
          progressColors={['#9d5400', '#eb7e00']}
          states={['Submit','Sending...','Sent']}
          progressShadowHeight={50}
        />
        <PgButton
          style={styles.cancelButton}
          onPress={() => this.buttonPressed()}
          progressDuration={ANIMATION_TIME_INTERVAL}
          progressColors={['#7e0000', '#f30000']}
          states={['Cancel','Cancelling...','Done']}
          progressShadowHeight={50}
        />
        <PgButton
          style={styles.requestButton}
          onPress={() => this.buttonPressed()}
          progressDuration={ANIMATION_TIME_INTERVAL}
          progressColors={['#007932','#00b44a']}
          states={['Request', 'Requesting...', 'Complete']}
          progressShadowHeight={50}
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
  submitButton: {
    height: 50,
    width: 150,
    backgroundColor: '#F80',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 30,
  },
  cancelButton: {
    height: 50,
    width: 150,
    backgroundColor: '#C00',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 30,
  },
  requestButton: {
    height: 50,
    width: 150,
    backgroundColor: '#00C851',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 30,
  },
  actionText: {
    fontSize: 35,
    color: '#4286f4',
    marginBottom: 40,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('ProgressButton', () => ProgressButton);
