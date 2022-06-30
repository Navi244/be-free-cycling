import HomeCycling from './pages/HomeCycling';
import Routes from './pages/Routes';
import MainHeader from './components/MainHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeCycling} options={{
            headerTitle:()=> <MainHeader title="Inicio" />,
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            headerTitleStyle: {
            }
          }}/>
        <Stack.Screen name="Routes" component={Routes} options={{
          headerTitle:()=> <MainHeader title="Enrutamiento" />,
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
