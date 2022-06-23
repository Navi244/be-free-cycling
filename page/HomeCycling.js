
import React from 'react';
import MainBody from '../components/MainBody';
import { StyleSheet, View } from 'react-native';


const HomeCycling = ()=>{
  return (
    <View style={mainBg.bg}>
      <View style={styles.container}>
        <MainBody></MainBody>
      </View>
    </View>
  )
}

const mainBg = StyleSheet.create({
  bg: {
    backgroundColor: '#eeeeee',
    padding: '1rem',
    height: '100%'
  }
})

const estilosHeader = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: '1rem'
  },
});

export default HomeCycling;

