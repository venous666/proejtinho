import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Link } from "expo-router";
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo!</Text>
      <Image style={styles.img} source={require('../assets/pink.png')}></Image>
      <StatusBar style="auto" />
      <TextInput style={styles.input}placeholder="E-mail"></TextInput>
      <TextInput style={styles.input}placeholder="Senha"></TextInput>
      <TextInput style={styles.input}placeholder="Confirmar senha"></TextInput>
      <Link href="/telaB" style={styles.link}>Entrar</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:26,
    fontWeight:'bold',
  },
  input:{
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ffb8e0',
    borderRadius: 5,
    width: '80%',
    
  },
  img:{
    justifyContent:'center',
    width:250,
    height:250,

    borderRadius:5,
  },
  link:{
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f49ac1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#f49ac1',
  },
  
});
