import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AppWithNavigationState from './js/navigations/AppNavigations';
import { middleware } from './js/utils/redux';
import rootReducer from './js/reducer';

const enhancers = [];
enhancers.push(applyMiddleware(middleware));
enhancers.push(applyMiddleware(thunk));

const store = createStore(rootReducer, compose(...enhancers));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('weatherApp', () => App);
