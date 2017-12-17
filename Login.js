import React from 'react';
import { StyleSheet, TextInput, Text, View, Button} from 'react-native';

export default class Login extends React.Component{

  constructor(){

      super();
      this.state = {
          username: 'enter username',
          password: 'enter password'
        }

  }






  render(){

    return (

      <View style = {styles.container}>

              <Text style = {styles.login}>Login</Text>



              <TextInput style = {styles.username} onChangeText = {(username) => this.setState({username})}  value = {this.state.username}
              />

            <TextInput style = {styles.password} onChangeText = {(password) =>  this.setState({password})}   value = {this.state.password}
              />

            <View style = {styles.buttonStyle}  >

              <Text style = {styles.buttonText}>Login</Text>
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
