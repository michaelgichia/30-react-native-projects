import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

import { sizes, colors } from '../../CommonStyles';

export class HeaderRight extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.Ripple(colors.primaryDark, true)}
      >
        <View style={appBarMenu}>
          <Octicons name="search" size={24} color="#ffffff" />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export class HeaderTitle extends PureComponent {
  render() {
    return <Text style={appBarTitle}>WeatherCare</Text>;
  }
}

export class HeaderLeft extends PureComponent {
  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colors.primaryDark, true)}
      >
        <View style={appBarMenu}>
          <Feather name="menu" size={24} color="#ffffff" />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default HeaderRight;

const styles = StyleSheet.create({
  appBarTitle: {
    fontSize: 19,
    paddingLeft: sizes.APP_BAR_PD_LEFT,
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  appBarMenu: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const { appBarTitle, appBarMenu } = styles;
