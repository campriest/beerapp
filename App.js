import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator, } from 'react-navigation';

const App = StackNavigator ({
  HomeScreen:   {
    screen: Home
  },
  LoginScreen:  {
    screen: Login
  },
  SignUpScreen: {
    screen: SignUp
  }

});

export default App;
