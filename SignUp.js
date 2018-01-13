import Success from './Success.js';
import React from 'react';
import axios from 'axios';
import querystring from 'querystring';


import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
import {StackNavigator } from 'react-navigation';



export default class Login extends React.Component{

  constructor(props){
      super(props);

      this.state = {
          firstName: 'enter name...',
          lastName: 'enter last name...',
          username: 'enter username...',
          email: 'email...',
          password: 'password...'

      };

      //this.onSignUp = this.onSignUp.bind(this);
      //console.log('works');
  }


  onSignUp = (e) => {

    const {navigate} = this.props.navigation;
    navigate('SuccessScreen');

        axios.post('http://192.168.1.3:3000/insert', querystring.stringify({

          firstName: this.state.firstName,
          lastName:  this.state.lastName,
          email:     this.state.email,
          password:  this.state.password,
          username:  this.state.username





        }))
        .then(function(res){
            console.log(res);
        })
        .catch(function(error){
            console.log(error);
        })

        e.preventDefault();

          // .then(res => {
          //   console.log("axios working");
          // })
          // .catch(err => {
          //   console.error(err);
          // })



      console.log("button works");

      // this.setState({
      //   firstName: e.target.value,
      //   lastName: e.target.value,
      //   email: e.target.value
      //
      //
      // });
  }


  render(){



    return (

      <View>

            <Text style = {styles.title}>Sign Up</Text>

              <View style = {styles.verticalLine}></View>

                <View style = {styles.container}>


                  <TextInput style = {styles.inputBoxFirst} clearTextOnFocus = {true} onChangeText = {(firstName) => this.setState({firstName})} value = {this.state.firstName}
                  />

                    <TextInput style = {styles.inputBoxLast}  clearTextOnFocus = {true} onChangeText = {(lastName) => this.setState({lastName})} value = {this.state.lastName}
                      />

                        <TextInput style = {styles.inputBoxUsername} clearTextOnFocus = {true} onChangeText = {(username) => this.setState({username})} value = {this.state.username}
                        />

                          <TextInput style = {styles.inputBoxEmail} clearTextOnFocus = {true} onChangeText = {(email) => this.setState({email})} value = {this.state.email}
                          />

                              <TextInput style = {styles.inputBoxPassword} clearTextOnFocus = {true} onChangeText = {(password) => this.setState({password})} value = {this.state.password}
                              />


      <View  style = {styles.buttonStyle}>
        <TouchableOpacity onPress = {this.onSignUp}>

            <Text style = {styles.buttonText}>Cheers!</Text>
        </TouchableOpacity>
        </View>


        </View>

      </View>


    );
  }
}


const styles = StyleSheet.create({

    container: {

      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(235, 235, 235)'

    },

    title:{
      marginTop: 15,
      marginLeft: 15,
      fontSize: 40,
      color: 'rgb(0,0,0)'

    },

    inputBoxFirst : {
      marginTop: 550,
      height: 20,
      width: '77%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderBottomColor: 'rgb(0,0,0)',
      borderTopColor: 'rgb(235,235,235)',
      borderLeftColor: 'rgb(235,235,235)',
      borderRightColor: 'rgb(235,235,235)'

    },

    inputBoxLast : {
      marginTop: 40,
      height: 20,
      width: '77%',
      borderWidth: 1,
      borderBottomColor: 'rgb(0,0,0)',
      borderTopColor: 'rgb(235,235,235)',
      borderLeftColor: 'rgb(235,235,235)',
      borderRightColor: 'rgb(235,235,235)'

    },

    inputBoxEmail: {
      marginTop: 40,
      height: 20,
      width: '77%',
      borderWidth: 1,
      borderBottomColor: 'rgb(0,0,0)',
      borderTopColor: 'rgb(235,235,235)',
      borderLeftColor: 'rgb(235,235,235)',
      borderRightColor: 'rgb(235,235,235)'

    },

    inputBoxPassword: {
      marginTop: 40,
      height: 20,
      width: '77%',
      borderWidth: 1,
      borderBottomColor: 'rgb(0,0,0)',
      borderTopColor: 'rgb(235,235,235)',
      borderLeftColor: 'rgb(235,235,235)',
      borderRightColor: 'rgb(235,235,235)'


    },

    inputBoxUsername: {
      marginTop: 40,
      height: 20,
      width: '77%',
      borderWidth: 1,
      borderBottomColor: 'rgb(0,0,0)',
      borderTopColor: 'rgb(235,235,235)',
      borderLeftColor: 'rgb(235,235,235)',
      borderRightColor: 'rgb(235,235,235)'


    },

    buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
      height: 40,
      width: '77%',
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)',
      backgroundColor: 'rgba(50,50,50,.5)'

    },

    buttonText: {
      fontSize: 26
    },

    verticalLine: {
      marginTop:-38,
      marginLeft: 150,
      height:35,
      width:1,
      backgroundColor: 'rgb(0,0,0)'

    }




});
