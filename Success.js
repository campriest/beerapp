import React from 'react';
import Hr from 'react-native-hr-plus';
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity} from 'react-native';

export default class Success extends React.Component{

  constructor(){
      super();

  }

render(){


      return(

          <View style = {styles.container}>

              <Text style = {styles.signedUpText}>All Set!</Text>

            {/* <Hr color = "rgb(0,0,0)" width={1}>

            </Hr> */}

            <View style = {styles.bottomLine}>

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


  signedUpText:{
    marginTop: -50,
    fontSize: 90,
    color: 'rgb(255, 228, 13)'

  },

  lineStyle:{
    color: 'rgb(0,0,0)',
    width:1,
    padding: 5


  },

  bottomLine:{
    width: '80%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor:'rgb(0,0,0)'

  }





});
