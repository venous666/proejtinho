import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo!</Text>
      <Image style={styles.img} source={require('../assets/carrinho.png')}></Image>
      <Link href="/"style={styles.link}>Home</Link>
      <StatusBar style="auto" />
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
  link:{
    position:'absolute',
    fontSize:20,
    color:'#EDB8CB',
    top:169
  },
  titulo:{
    fontSize:26,
    fontWeight:'bold',
  }
});
