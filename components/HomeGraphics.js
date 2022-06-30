import react from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeGraphics = ()=>{
    return(
        <View style={graphicsHome.cgp}>
          <View style={graphicsHome.containerUserGraphic}>
            <Text style={graphicsHome.graphicTitleUser}>Gráfica de Iván Montes</Text>
          </View>
          <View style={graphicsHome.containerFriendGraphic}>
            <Text style={graphicsHome.graphicFriendTitle}>Gráfica de Omar</Text>
          </View>
        </View>
    )
}

const graphicsHome = StyleSheet.create({
  cgp:{
    display: 'flex',
    flexDirection: 'row'
  },
  containerUserGraphic: {
    flexGrow: 1,
    borderRadius: 5,
    borderWidth: 1,
    padding: 14,
    marginRight: 5,
    flexBasis: 0
  },
  graphicTitleUser: {
    textAlign: 'center'
  },
  containerFriendGraphic: {
    flexGrow: 1,
    borderRadius: 5,
    borderWidth: 1,
    padding: 14,
    marginLeft: 5,
    flexBasis: 0
  },
  graphicFriendTitle: {
    textAlign: 'center'
  }
})

export default HomeGraphics;