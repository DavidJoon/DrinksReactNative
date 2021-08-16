import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Charm_400Regular, Charm_700Bold } from '@expo-google-fonts/charm';

export default function Home(props){
  
  return(
    <View style={styles.container}>
    <ImageBackground style= {styles.imgfundo} resizeMode="cover" source={imagem}>
    <Text style={styles.titulo}>Prime Drinks</Text>
    <Image style={styles.img} source={require("../assets/logo.jpg")}/>
    <Text style={styles.textobaixo}>Viva e Aprecie</Text>

    <TouchableOpacity style={styles.btndrin} onPress={()=>{props.navigation.navigate('Drinks')}}>
    <Text style={styles.escolhas}>Drinks</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnvin} onPress={()=>{props.navigation.navigate('Vinhos')}}>
    <Text style={styles.escolhas}>Vinhos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnvod} onPress={()=>{props.navigation.navigate('Vodkas')}}>
    <Text style={styles.escolhas}>Vodkas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnwhy} onPress={()=>{props.navigation.navigate('Whiskys')}}>
    <Text style={styles.escolhas}>Whiskys</Text>
    </TouchableOpacity>

    </ImageBackground>
    </View>
 );
}

const imagem = {uri:'https://static.vecteezy.com/ti/vetor-gratis/p1/2238773-fundo-ondulado-em-preto-e-dourado-gr%C3%A1tis-vetor.jpg'};

const styles = StyleSheet.create({
  imgfundo:{
    flex: 1,
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    flex:1,
  },
    img:{
      borderWidth:1,
      borderColor:'#daa520',
      borderRadius:10,
      margin:5,
      width:300,
      height:200,
  },
    titulo:{
      textAlign:'center',
      width:200,
      borderWidth:1,
      borderColor:'#daa520',
      padding:5,
      color:'#FFFFFF',
      backgroundColor:'#000000',
      marginBottom:10,
      fontSize:22,
      marginTop:28,
      borderRadius:10,
      fontFamily:'Charm_700Bold',
  },
    btndrin:{
      borderWidth:2,
      borderColor:'#daa520',
      borderRadius:10,
      textAlign:'center',
      width:140,
      margin:10,
      padding:5,
      backgroundColor:'#FFFFFF',
  },
     btnvin:{
      borderWidth:2,
      borderColor:'#daa520',
      borderRadius:10,
      textAlign:'center',
      width:140,
      margin:10,
      padding:5,
      backgroundColor:'#ffffff',
  },
     btnvod:{
      borderWidth:2,
      borderColor:'#daa520',
      borderRadius:10,
      textAlign:'center',
      width:140,
      margin:10,
      padding:5,
      backgroundColor:'#ffffff',
      fontWeight:'bold',
  },
      btnwhy:{
      borderWidth:2,
      borderColor:'#daa520',
      borderRadius:10,
      textAlign:'center',
      width:140,
      margin:10,
      padding:5,
      backgroundColor:'#ffffff',
  },
    escolhas:{
      fontFamily:'Charm_700Bold',
      textAlign:'center',
      color:'#000000',
      fontSize:20,
  },
    textobaixo:{
      width:200,
      textAlign:'center',
      fontFamily:'Charm_700Bold',
      padding:5,
      color:'#FFFFFF',
      backgroundColor:'#000000',
      fontSize:22,
      marginTop:20,
      borderRadius:10,
      marginBottom:10,
      borderWidth:1,
      borderColor:'#daa520',
  },
});