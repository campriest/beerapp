import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Success from './Success.js';

import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator, } from 'react-navigation';
//import {Match, MemoryRouter as Router} from 'react-router-native';

const App = StackNavigator ({
  HomeScreen:   {
    screen: Home
  },
  LoginScreen:  {
    screen: Login
  },
  SignUpScreen: {
    screen: SignUp
  },

  SuccessScreen:{

    screen: Success
  }

});


export default App;
