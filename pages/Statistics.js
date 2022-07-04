import React from "react";
import { View, Text } from "react-native";
import MultipleButtons from "../components/MultipleButtons"

const buttons = [{id:1, name: "Personales", page: "PersonalStatistics"}, {id:2, name: "Amigos", page: "FriendsStatistics"}];

const Statistics = ()=>{
  return(
    <View>
      <MultipleButtons buttonsData ={buttons}></MultipleButtons>
    </View>
  )
}

export default Statistics;