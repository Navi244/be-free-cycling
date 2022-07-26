import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';

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

const useLocation = () => {
    const [useStatePosition, setStatePosition] = useState()
    debugger;
    useEffect(()=>{
        const permissionsState = getStatusPermissions({});
        permissionsState.then((status)=>{
        
          if (status === 'granted') {
          getCurrentPosition()
          .then(coord => {
            setStatePosition(coord)
            return useStatePosition;
          });
          setStateSpinner(false)
          } else if(status === 'denied') {
            console.log('Denegado');
          }
          
        });
      },[])

}

export {useLocation}