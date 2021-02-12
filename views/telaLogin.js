import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import logo from '../assets/logo1.png'

export default function TelaLogin(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.brand}>Bem vindo(a) ao aplicativo da Rosaly Jewelry. Faça seu login abaixo:</Text>

      <TextInput style={styles.input} placeholder="Digite o seu E-mail" />

      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true}/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7d0bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 150,
    marginBottom: 10
  },
  brand: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'serif',
    textAlign: 'center',
    paddingHorizontal: 10
  },
  input: {
    marginTop: 15,
    padding: 10,
    width: 270,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  button: {
    width: 110,
    height: 37,
    backgroundColor: "#363636",
    marginTop: 60,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    alignContent: 'center',
    paddingTop: 7,
    fontFamily: 'serif',
    fontSize: 15
  }
});
