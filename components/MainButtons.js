import React from "react";
import { StyleSheet, View } from "react-native";
import { Button} from "react-native-elements"
import { useNavigation } from '@react-navigation/native';

const MainButtons = () => {
  const navigation = useNavigation();

  return (
    <View style={mainCategories.container}>
      <View style={mainCategoriesButtons.mainButtons}>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF', }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              borderRadius: 10}}
            title="Enrutamiento"
            onPress={()=> navigation.navigate('Routes')}></Button>
        </View>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF',  }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              borderRadius: 10}}
            title="Alarma"
            onPress={()=> navigation.navigate('Alarm')}></Button>
        </View>
      </View>
      <View style={mainCategoriesButtons.mainButtons}>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              borderRadius: 10}}
            title="Luz"
            onPress={()=> navigation.navigate('Light')}></Button>
        </View>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              borderRadius: 10}}
            title="Estadisticas"
            onPress={()=> navigation.navigate('Statistics')}></Button>
        </View>
      </View>
      <View style={mainCategoriesButtons.mainButtons}>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              borderRadius: 10}}
            title="Amigos"
            onPress={()=> navigation.navigate('Friends')}></Button>
        </View>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              borderRadius: 10}}
            title="Entrenamiento"
            onPress={()=> navigation.navigate('Training')}></Button>
        </View>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              borderRadius: 10}}
            title="Música"
            onPress={()=> navigation.navigate('Music')}></Button>
        </View>
      </View>
    </View>
  )
};

const homeButton = StyleSheet.create({
  button: {
    borderRadius: 20
  }
})

const mainCategories = StyleSheet.create({
  container: {
    marginTop: 16
  }
});

const mainCategoriesButtons = StyleSheet.create({
  mainButtons: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const homeButtons = StyleSheet.create({
  button: {
    margin: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
    maxWidth: '50%',
    padding: 8,
  }
})

export default MainButtons;