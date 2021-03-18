import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import DetailScreen from './Screens/DetailScreen';
import HomeScreen from './Screens/HomeScreen';
import reducers from './reducers'



class App extends Component {
  render() {
    const navigator = createStackNavigator({
      Index: HomeScreen,
      Detail: DetailScreen,

    }, {
      initialRouteName: 'Index',
      defaultNavigationOptions: {
        title: 'yigitcan'
      }
    })

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    const App = createAppContainer(navigator);
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


export default App;


