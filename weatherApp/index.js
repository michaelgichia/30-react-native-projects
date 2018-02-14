import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import thunk from 'redux-thunk';
import AppWithNavigationState from './js/navigations/AppNavigations';
import { middleware } from './js/utils/redux';
import rootReducer from './js/reducer';

const enhancers = [];
enhancers.push(applyMiddleware(middleware));
enhancers.push(applyMiddleware(thunk));

const store = createStore(rootReducer, compose(...enhancers));
const persistor = persistStore(store);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('weatherApp', () => App);
