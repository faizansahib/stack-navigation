
import React from 'react';
import {Button,Text,TextInput, View} from 'react-native';

 class App extends React.Component {

    constructor()
    {
      super();
      this.state={

        name : '',
        password: '',
        email : ''
      }
    }

    submit() {

         console.warn( this.state)
    }
 
  render() {
  return(

    <View style={styles.container}>

    <View style={styles.app}>
    <TextInput placeholder='enter your name'
    onChangeText={(text)=> {this.setState({name:text})}}
    >

    </TextInput>

      <TextInput placeholder='enter your password' secureTextEntry={true}
      onChangeText={(text)=> {this.setState({password:text})}}
      >

      </TextInput>

      <TextInput placeholder='enter your email'
      onChangeText={(text)=> {this.setState({email: text})}}
      >

      </TextInput>
   
     <Button title='click me' onPress={this.submit()}  />

    
   
    </View>
</View>
  )
  }    

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  }})
