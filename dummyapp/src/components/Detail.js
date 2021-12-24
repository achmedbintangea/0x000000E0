import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import produk from '../assets/produk.png'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function Detail({ navigation }) {
  return (
    <View style={styles.main}>
      <View style ={styles.gambar}>
          <Image source={produk}/>
      </View>

      <View style ={styles.detail}>
        <Text style={styles.namaproduk}>Headphone Gaming A3 Gaming Headset Gaming Headphone Game Headset Mic Headset Gamers Headset PC Headphone HP</Text>
        <Text style={styles.deksripsi}>Description</Text>
        <Text style={styles.detailproduk}>Headphone murah dengan kualitas suara yang mantap ! . Model minimalis, simple tapi sudah dilengkapi dengan built in microphone dan volume control.</Text>
        <Text style={styles.harga}>Rp.35.000</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.textbutton}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1, 
    alignItems: 'center', 
    // justifyContent: 'center' 
  },
  gambar:{
    // backgroundColor: 'pink',
    height: height/-50,
    width:width/-2,
  },
  detail:{
    backgroundColor: '#FFFFFF',
    height: height/-100,
    width:width/-2,
    marginTop:16,
    borderRadius:30,
  },
  namaproduk:{
    fontSize:12,
    fontStyle:'normal',
    lineHeight:18,
    fontWeight:'500',
    color:'black',
    marginTop:30,
    marginLeft:25,
    marginRight:25,
  },
  deksripsi:{
    marginTop:12,
    marginLeft:25,
    fontWeight:'600',
    fontSize:12,
    lineHeight:18,
    fontStyle:'normal',
    color:'black',
  },
  detailproduk:{
    fontSize:12,
    fontStyle:'normal',
    lineHeight:18,
    fontWeight:'200',
    color:'black',
    marginLeft:25,
    marginRight:25,
  },
  harga:{
    marginTop:30,
    marginLeft:25,
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:24,
    lineHeight:28.8,
    color:'#03AC0E'
  },
  button:{
    height:50,
    width:325,
    backgroundColor:'#03AC0E',
    justifyContent:'center',
    alignItems:'center',
    marginTop:35,
    marginLeft:45,
    borderRadius:10,
    marginBottom:50,
  },
  textbutton:{
    fontWeight:'700',
    fontStyle:'normal',
    fontSize:20,
    lineHeight:30,
    color:'#FFFFFF',
    
  }
})
export default Detail;