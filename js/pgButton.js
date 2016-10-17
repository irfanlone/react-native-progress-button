import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

var DEFAULT_ACTION_TIMER = 1200;
var DEFAULT_PROGRESS_COLORS = ['rgb(255,255,255)', 'rgb(124,142,162)'];
var DEFAULT_STATES = ['Submit', 'Sending', 'Sent'];

class PgButton extends Component {

  constructor(props) {
    super(props);
    let states = this.props.states ? this.props.states : DEFAULT_STATES;
    this.state = {
      pressAction: new Animated.Value(0),
      requestButtonTitle: states[0],
      buttonStates: states
    };
  }

  requestPressed = () => {
    this.setState({
      requestButtonTitle: this.state.buttonStates[1],
    });
    let timerDuration = this.props.progressDuration ? this.props.progressDuration : DEFAULT_ACTION_TIMER
    Animated.timing(this.state.pressAction, {
        duration: timerDuration,
        toValue: 1
    }).start(this.animationActionComplete);

    setTimeout(() => {
      this.props.onPress();
    }, timerDuration);
  }

  animationActionComplete = () => {
    this.setState({
      requestButtonTitle: this.state.buttonStates[2],
    });
  }

  getButtonWidthLayout = (e) => {
    this.setState({
        buttonWidth: e.nativeEvent.layout.width,
        buttonHeight: e.nativeEvent.layout.height + 25
    });
  }

  getProgressStyles = () => {
    var width = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: [0, this.state.buttonWidth]
    });
    var bgColor = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: this.props.progressColors ? this.props.progressColors : DEFAULT_PROGRESS_COLORS
    })
    return {
        width: width,
        height: this.state.buttonHeight,
        backgroundColor: bgColor
    }
  }

  render() {

    return (
      <TouchableOpacity
        disabled={(this.state.requestButtonEnabled === false) ? true : false}
        style={styles.requestButton}
        onPress={() => this.requestPressed()}
        underlayColor='#55879F'>

        <View style={styles.button} onLayout={this.getButtonWidthLayout}>
          <Animated.View style={[styles.bgFill, this.getProgressStyles() ]} />
          <Text style={[styles.buttonText]}>{this.state.requestButtonTitle}</Text>
        </View>
        
      </TouchableOpacity>
    );
  }
}

export default PgButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3E7EC',
    flex: 1,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'transparent'
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
  bgFill: {
    position: 'absolute',
    top: -12.5,
    left: 0,
  },

});
