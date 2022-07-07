import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView, TextInput, Button, ActivityIndicator } from "react-native";
import { config } from "../config/config";
import * as Location from 'expo-location';
//import { check, PERMISSIONS } from "react-native-permissions";
const axios = require('axios').default;



const makeRequest = ()=>{
  axios.get(config.host + '/json').then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
  })
}

async function getStatusPermissions (){
  let {status} = await Location.requestForegroundPermissionsAsync();
  return status;
}


 async function getCurrentPosition() {
  let {coords} = await Location.getCurrentPositionAsync()
    .then(coord => {
      return coord
    })

  return coords;
}

const Routes = ()=>{
  const [useStateSpinner, setStateSpinner] = useState(true);
  const [usePosition, setStatePosition] = useState('');

  const permissionsState = getStatusPermissions({});
  permissionsState.then((status)=>{
    if (status === 'granted') {
    const location = getCurrentPosition()
    .then(coord => {
      console.log(coord)
      return coord
    });
    console.log(location)
    setStateSpinner(false)
    } else if(status === 'denied') {
      console.log('Denegado');
    }
  });

  return(
    <SafeAreaView>
      <ActivityIndicator size="large" color="#00ff00" animating={useStateSpinner}/>
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
        <Text>{}</Text>
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