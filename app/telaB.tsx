import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/pink.png')}></Image>
        <Text style={styles.titulo}>Book Shop</Text>
        <Image style={styles.img1} source={require('../assets/pink.png')}></Image>
        <Image style={styles.img2} source={require('../assets/pink.png')}></Image>
        <Image style={styles.img3} source={require('../assets/pink.png')}></Image>
        <Image style={styles.img4} source={require('../assets/pink.png')}></Image>
        <Image style={styles.img5} source={require('../assets/pink.png')}></Image>
        <Image style={styles.img6} source={require('../assets/pink.png')}></Image>
        <Image style={styles.img7} source={require('../assets/pink.png')}></Image>
        <Image style={styles.img8} source={require('../assets/pink.png')}></Image>
      <Link href="/telaC"style={styles.link}>ir para o carrinho de compras!</Link>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    position:'absolute',
    fontSize:20,
    color:'#EDB8CB',
    top:150
    
  },
  link:{
    position:'absolute',
    fontSize:20,
    color:'#EDB8CB',
    top:169
  },
  img:{
    justifyContent:'center',
    width:99,
    height:70,
    top:-270,
    borderRadius:20,
  },
  text:{
    fontSize:16,
    justifyContent: 'center',
  },
  img1:{
    position:'absolute',
    right:70,
    width:90,
    height:70,
    top:250
  },
  img2:{
    position:'absolute',
    right:70,
    width:90,
    height:70,
    top:350
  },
  img3:{
    position:'absolute',
    right:70,
    width:90,
    height:70,
    top:450
  },
  img4:{
    position:'absolute',
    right:70,
    width:90,
    height:70,
    top:550
  },
  img5:{
    position:'absolute',
    left:70,
    width:90,
    height:70,
    top:550,
  },
  img6:{
    position:'absolute',
    left:70,
    width:90,
    height:70,
    top:450,
  },
  img7:{
    position:'absolute',
    left:70,
    width:90,
    height:70,
    top:250,
  },
  img8:{
    position:'absolute',
    left:70,
    width:90,
    height:70,
    top:350,
  },
});