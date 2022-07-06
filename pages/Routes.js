import React from "react";
import { Text, StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import { config } from "../config/config";
const axios = require('axios').default;


const makeRequest = ()=>{
  axios.get(config.host + '/json').then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
  })
}


const Routes = ()=>{
  return(
    <SafeAreaView>
      <Text>Página de enrutamiento</Text>
      <TextInput
        style={inpunt.input}
        placeholder='Ingresa en donde estás' />
      <TextInput 
        style={inpunt.input}
        placeholder='Ingresa a donde vas'/>
      <Text>Mapa de ubicación</Text>
      <Button
        onPress={()=>makeRequest()}
        color="#841584"
        titleStyle={{ color: 'black' }}
        buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
        containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
          shadowColor: 'black',
          shadowOpacity: 0.2,
          borderRadius: 10}}
        title="Comenzar"></Button>
    </SafeAreaView>
  )
};

const inpunt = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  map: {
    width: '50%',
    height: '50%'
  }
});
export default Routes;