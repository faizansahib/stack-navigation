import { StatusBar } from 'expo-status-bar';
import { baseURI } from 'min-document';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';


 class App extends React.Component {

 
  render() {
  return(
  
     <View>
     <TouchableOpacity style={{marginTop: 200, marginLeft: 100, borderWidth: 1, borderColor: 'coral', height: 50, width: 200, borderRadius:5, alignItems: 'center', justifyContent:'center' }} 
     onPress={()=> {this.props.navigation.navigate('Profile')}}
     >
       <Text style={{color:'coral'}}>Go to Profile</Text>
     </TouchableOpacity>
   </View>
    
    
  )
  }    

}

function Profile({navigation}) {

    return(
      
     <View>
     <TouchableOpacity style={{marginTop: 200, marginLeft: 100, borderWidth: 1, borderColor: 'coral', height: 50, width: 200, borderRadius:5, alignItems: 'center', justifyContent:'center' }} 
     onPress={()=> {navigation.navigate('About')}}
     >
       <Text style={{color:'coral'}}>Go to About</Text>
     </TouchableOpacity>
   </View>
    )
}

function About({navigation}) {
  return(
    
    <View>
    <TouchableOpacity style={{marginTop: 200, marginLeft: 100, borderWidth: 1, borderColor: 'coral', height: 50, width: 200, borderRadius:5, alignItems: 'center', justifyContent:'center' }} 
    onPress={()=> {navigation.navigate('Home')}}
    >
      <Text style={{color:'coral'}}>Go to Home</Text>
    </TouchableOpacity>
  </View>
  )
}

const AppNavigator = createStackNavigator({

    Home: {
      screen:App
    },
    Profile: {

       screen: Profile
    },
    About: {
      screen: About
    }
})

export default createAppContainer(AppNavigator);

