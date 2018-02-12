import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Animated, Easing } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import MainScreen from '../containers/MainScreen';
import SearchScreen from '../containers/SearchScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    Search: {
      screen: SearchScreen,
    },
  },
  {
    initialRouteName: 'Search',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {
        const { position, scene: { index } } = sceneProps;
        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1],
        });
        return { opacity };
      },
    }),
  },
);

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
