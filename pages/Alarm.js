import {View, StyleSheet, Text, Pressable} from "react-native";
import { requestService } from "../request/services";

 async function sendAlarmActive() {
   const endpointAlarm = '/alarm/active';
  try{
    const response = await requestService(endpointAlarm)
    console.log(response)
  }catch(err){

  }
}

const Alarm = ()=>{
  return (
    <View style={container.container}>
      <View style={container.firstSpace}></View>
      <View style={container.button}>
        <View style={container.buttonContainer}>
          <Pressable onPress={()=>sendAlarmActive()}>
            <Text style={container.buttonText}>Activar alarma</Text>
          </Pressable>
        </View>
      </View>
      <View style={container.secondSpace}></View>
    </View>
  )
}

const container = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  firstSpace: {
    flexGrow: 1
  },
  secondSpace: {
    flexGrow: 1
  },
  button: {
    flexGrow: 5,
    position: "relative"
  },
  buttonContainer: {
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "red"
  },
  buttonText: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32
  }
})
export default Alarm;