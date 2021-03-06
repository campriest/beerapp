import React from 'react';
import axios from 'axios';
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity} from 'react-native';
import querystring from 'querystring';



export default class Login extends React.Component{

  constructor(){

      super();

      this.state = {
          username: 'enter username',
          password: 'enter password'
        }


  }


  logIn = (e) => {
      axios.post('http://192.168.1.3:3000/login', querystring.stringify({
          username: this.state.username,
          password: this.state.password


      }))
      .then(function(res){

          console.log(res);
      })
      .catch(function(error){

          console.log(error);
      })

        console.log("login button pushed");

  }

  render(){

    return (

      <View style = {styles.container}>

              <Text style = {styles.login}>Login</Text>




              <TextInput style = {styles.username} clearTextOnFocus = {true} onChangeText = {(username) => this.setState({username})}  value = {this.state.username}
              />

              <TextInput style = {styles.password} clearTextOnFocus = {true} onChangeText = {(password) =>  this.setState({password})}   value = {this.state.password}
              />

            <View style = {styles.buttonStyle}  >
              <TouchableOpacity onPress = {this.logIn}>
                  <Text style = {styles.buttonText}>Login</Text>
              </TouchableOpacity>
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

    login: {
      marginTop: -100,
      fontSize: 60,
      color: 'rgb(0,0,0)'

    },

    password: {
      marginTop: 20,
      height: 20,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)'


    },

    username: {
      marginTop: 20,
      height: 20,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)'


    },
    buttonStyle : {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      height: 30,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0, 0)',
      backgroundColor:'rgba(50,50,50, .6)'

    },

    buttonText:{
      fontSize: 26


    }


  });
