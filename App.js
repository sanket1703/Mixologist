import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Login from './Screens/Login';  
import home from './Screens/home';
import description from './Screens/description';
import test from './Screens/test';
import settings from './Screens/settings';
export default class App extends React.Component {
  render() {
    return (
          <AppContainer/> 
    );
  }
}
const AppDrawerNavigator = createDrawerNavigator({
  Login: {
    screen: Login,
   
  },
  home: {
    screen: home,
    navigationOptions : {
          header : null
    }
  },
  description : {
    screen : description
  },
  test : {
    screen :test
  },
  
});


const AppStackNavigator = createStackNavigator({

  Login: {
    screen: Login,
   
  },
  home: {
    screen: home,
    navigationOptions : {
          header : null
    }
  },
  description : {
    screen : description
  },
  test : {
    screen :test
  },
  
});

const AppContainer = createAppContainer(AppStackNavigator)

