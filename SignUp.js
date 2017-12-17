import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';


export default class Login extends React.Component{

  constructor(){
      super();

      this.state = {
          firstName: 'enter name...',
          lastName: 'enter last name...',
          email: 'email...'

      }

  }


  render(){

    return (

      <View style = {styles.container}>
        <Text style = {styles.title}>Sign Up</Text>

        <TextInput style = {styles.inputBoxFirst} onChangeText = {(firstName) => this.setState({firstName})} value = {this.state.firstName}
        />

        <TextInput style = {styles.inputBoxLast}  onChangeText = {(lastName) => this.setState({lastName})} value = {this.state.lastName}
        />

        <TextInput style = {styles.inputBoxEmail} onChangeText = {(email) => this.setState({email})} value = {this.state.email}
        />

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

    }


});
