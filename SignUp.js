import React from 'react';
import axios from 'axios';
import querystring from 'querystring';

import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';



export default class Login extends React.Component{

  constructor(props){
      super(props);

      this.state = {
          firstName: 'enter name...',
          lastName: 'enter last name...',
          email: 'email...',
          password: 'password...'

      };

      //this.onSignUp = this.onSignUp.bind(this);
      //console.log('works');
  }


  onSignUp = (e) => {



        axios.post('http://192.168.1.2:3000/insert', querystring.stringify({

          firstName: this.state.firstName,
          lastName:  this.state.lastName,
          email:     this.state.email,
          password:  this.state.password





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

      <View style = {styles.container}>

        <Text style = {styles.title}>Sign Up</Text>

      <TextInput style = {styles.inputBoxFirst} clearTextOnFocus = {true} onChangeText = {(firstName) => this.setState({firstName})} value = {this.state.firstName}
        />

      <TextInput style = {styles.inputBoxLast}  clearTextOnFocus = {true} onChangeText = {(lastName) => this.setState({lastName})} value = {this.state.lastName}
        />

        <TextInput style = {styles.inputBoxEmail} clearTextOnFocus = {true} onChangeText = {(email) => this.setState({email})} value = {this.state.email}
        />

      <TextInput style = {styles.inputBoxPassword} clearTextOnFocus = {true} onChangeText = {(password) => this.setState({password})} value = {this.state.password}
        />


      <View  style = {styles.buttonStyle}>
        <TouchableOpacity onPress = {this.onSignUp} >

            <Text style = {styles.buttonText}>Sign Up</Text>
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

    },

    title:{
      marginTop: -100,
      fontSize: 60,
      color: 'rgb(0,0,0)'

    },

    inputBoxFirst : {
      marginTop: 20,
      height: 20,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)'

    },

    inputBoxLast : {
      marginTop: 20,
      height: 20,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)'


    },

    inputBoxEmail: {
      marginTop: 20,
      height: 20,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)'

    },

    inputBoxPassword: {
      marginTop: 20,
      height: 20,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)'


    },

    buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      height: 30,
      width: 200,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgb(0,0,0)',
      backgroundColor: 'rgba(50,50,50,.5)'

    },

    buttonText: {
      fontSize: 26
    }




});
