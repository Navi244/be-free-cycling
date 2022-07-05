import React, { useState }  from "react";
import { StyleSheet } from "react-native";
import MultipleButtons from "../components/MultipleButtons";

const buttons = [{id:1, name: "Principiante", page: "BeginnerTraining"}, {id:2, name: "Intermedio", page: "IntermediateTraining"}, {id:3, name: "Avanzado", page: "AdvancedTraining"}];

const Training = ()=>{
  return (
    <MultipleButtons buttonsData = {buttons}></MultipleButtons>
  );
}

const styles = StyleSheet.create({
 
});

export default Training;