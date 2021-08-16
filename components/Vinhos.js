import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';


const Separador = () => <View style ={styles.separador}/>

export default function Prata(){
  return(
    <View style={styles.container}>
    <ImageBackground style= {styles.imgfundo} resizeMode="cover" source={imagem}>
    <Text style={styles.titulo}>Prime Drinks</Text>

    <ScrollView>
    <Text style={styles.categoriav}>Scarecrow, Cabernet Sauvignon 2012</Text>
    <Image style={styles.img} source={require('../assets/vin1.jpg')}></Image>
    <Text style={styles.preco}>R$ 160,00 (taça)</Text>
    <Separador/>

    <Text style={styles.categoriav}>Toscana 2005, da Masseto </Text>
    <Image style={styles.img} source={require('../assets/vin2.jpg')}></Image>
    <Text style={styles.preco}>R$ 190,00 (taça)</Text>
    <Separador/>

     <Text style={styles.categoriav}>Unico 1995, da Vega Sicilia</Text>
    <Image style={styles.img} source={require('../assets/vin3.jpg')}></Image>
    <Text style={styles.preco}>R$ 180,00 (taça)</Text>
    <Separador/>

    
    </ScrollView>
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
    justifyContent:'center',
    alignItems:'center',
},
  titulo:{
    width:200,
    height:70,
    borderWidth:2,
    borderColor:'#daa520',
    fontFamily:'Charm_700Bold',
    color:'#FFFFff',
    backgroundColor:'#000000',
    borderRadius:10,
    padding:5,
    textAlign:'center',
    marginTop:30,
    fontSize:25,
},
  separador:{
    marginVertical:10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:"#000000",
  },
 preco:{
    borderWidth:2,
    borderColor:'#daa520',
    fontFamily:'Charm_700Bold',
    padding:5,
    fontSize:20,
    marginTop:10,
    width:200,
    textAlign:'center',
    borderRadius:10,
    color:'#ffffff',
    backgroundColor:'#000000',
    alignSelf:'center',
  },
  img:{
    alignSelf:'center',
    borderRadius:10,
    width:156,
  },
  categoriav:{
    borderWidth:2,
    borderColor:'#daa520',
    fontFamily:'Charm_700Bold',
    padding:1,
    color:'#000000',
    backgroundColor:'#ffffff',
    marginBottom:10,
    fontSize:25,
    marginTop:10,
    width:400,
    textAlign:'center',
    borderRadius:10,
  },
  });