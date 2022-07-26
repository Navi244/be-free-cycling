import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, TextInput, Button, ActivityIndicator, Dimensions } from "react-native";
import MapView , { Marker} from 'react-native-maps';
import { config } from "../config/config";
import {useLocation} from "../hooks/useLocation"
//import { check, PERMISSIONS } from "react-native-permissions";
const axios = require('axios').default;



const makeRequest = ()=>{
  axios.get(config.host + '/json').then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
  })
}

const getInitialPosition = ()=> {
  const position = useLocation().then((response)=>{
    return response
  });
  console.log(position);
}

const Routes = async()=>{
  const [useStateSpinner, setStateSpinner] = useState(true);
  const [initalPosition, setInitalPosition] = useState({});
    // const position = getInitialPosition().then((response)=>{
      
    // })
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
      <MapView
        style={mapsStyles.map}
        initialRegion={{
          latitude: usePosition.latitude,
          longitude: usePosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {/* <Marker
            coordinate={{
              latitude: usePosition.latitude,
              longitude: -99.1838134
            }}
            title= 'Primer marcador'
            description="Este es el marcador"
            ></Marker> */}
        </MapView>
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
        <Text>{usePosition.latitude}</Text>
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
const mapsStyles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: 350,
  },
});
export default Routes;