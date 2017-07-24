import '../Config';
import DebugConfig from '../Config/DebugConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';
import createStore from '../Redux';

// create our store
const store = createStore();

/**
 * Provides an entry point into the application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * I have created the Redux store here, put it into a provider and then bring in the
 * RootContainer.
 *
 * I separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
