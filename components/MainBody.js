import React from "react";
import { StyleSheet, View } from "react-native";
import HomeGraphics from "./HomeGraphics";
import MainButtons from "./MainButtons";

const MainBody = ()=>{
  return(
    <View style={ContaninerGraphics.main}>
      <HomeGraphics></HomeGraphics>
      <MainButtons></MainButtons>
    </View>
  )
}

const ContaninerGraphics = StyleSheet.create({
  main: {
    height: '100%'
  }
})

export default MainBody;