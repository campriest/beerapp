import React from 'react';
import Login from './Login.js';
import SignUp from './SignUp.js';


import { StyleSheet, Text, View} from 'react-native';
import {StackNavigator, } from 'react-navigation';

export default class Home extends React.Component{




    render(){

        const {navigate} = this.props.navigation;

        return(


          <View style = {styles.container}>

            <View  >
                <Text style = {styles.main}>Hello!</Text>
                <Text style = {styles.underText}>I take it you need a beer, right?</Text>
              {/* <Text>Why lie.</Text> */}

            </View>

            <View style = {styles.buttonStyle}>
                  <View >
                      <Text style = {styles.loginStyle} onPress = { () => navigate('LoginScreen')}>Login</Text>
                  </View>
                      <View style = {styles.line}>

                      </View>
                          <View>
                            <Text style = {styles.signupStyle} onPress = {() => navigate('SignUpScreen')}>Sign Up</Text>
                          </View>
              </View>

          </View>

        );
      }
    }
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(235, 235, 235)'
  },

    main: {
    marginTop: -100,
    color: 'rgb(255, 228, 13)',
    fontSize: 86
},

    underText: {
    marginLeft: 6

  },
    loginStyle: {

      position:'absolute',
      width: 50,
      height: 50,
      marginTop: 50,
      marginLeft: -88


  },
    signupStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      marginTop: 50,
      marginLeft: 48


    },

    line:{
      position: 'absolute',
      width: 1,
      height: 20,
      marginTop: 45,
      backgroundColor:'rgb(80,80,80)'

    },

    loginButtons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'

    }
});
