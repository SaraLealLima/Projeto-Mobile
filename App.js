import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './views/telaLogin'
import Home from './views/Home'
import Produtos from './views/Produtos'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer initialRouteName='TelaLogin' headerMode='screen' >
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ title: 'Tela de Login' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Produtos" component={Produtos} options={{ title: 'Produtos' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
