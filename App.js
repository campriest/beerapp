import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (

        <View style={styles.container}>

          <View  >
              <Text style = {styles.main}>Hello!</Text>
              <Text style = {styles.underText}>I take it you need a beer, right?</Text>
            {/* <Text>Why lie.</Text> */}

          </View>

          <View style = {styles.buttonStyle}>
                <View >
                  <Text style = {styles.loginStyle}>Login</Text>
                </View>
                    <View style = {styles.line}>

                    </View>
                      <View>
                        <Text style = {styles.signupStyle}>Sign Up</Text>
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