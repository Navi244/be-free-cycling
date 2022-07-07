import React, {useState, useEffect} from "react";
import { View, TextInput, StyleSheet, Button, Modal, Pressable, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { loginRequest } from "../request/services";
import AlertLogin from "../components/AlertLogin";

async function requestLogin(user, password){
  const endpoint = '/login'
  try {
    const response = await loginRequest(user, password, endpoint);
    console.log(response);
    return response;
  }catch(err){
    console.log(err)
  }
}

const renderModal = (props)=>{
    debugger;
    return <AlertLogin isVisible={true} />
}

const Login = ( )=>{
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text style={styles.modalText}>Usuario o contraseña incorrecto</Text>
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Aceptar</Text>
              </Pressable>
          </View>
          </View>
      </Modal>
      <TextInput 
        style={loginStyles.input}
        value={user}
        onChangeText={setUser}
        placeholder="Usuario" />
      <TextInput
        style={loginStyles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button 
        color="#bebebe"
        onPress={
          ()=>requestLogin(user, password).then(data=>{
            navigation.navigate('Home')
            //(data.length > 0) ? navigation.navigate('Home') : setModalVisible(true);
          })
        }
        title="Entrar">
      </Button>
          {
            useEffect(()=>{{
              if(modalVisible === true){
                return <AlertLogin isVisible={true} />
              }
            } }, [modalVisible])
          }
    </View>
    )}

const loginStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Login;