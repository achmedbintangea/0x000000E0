import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import logo from '../assets/Logo.png'
import orang from '../assets/Vector.png'

function AppInfo({ navigation }) {
  return (
    <View style={styles.main}>
      <Image source={logo} style={styles.logo}/>
      
      <Text style={styles.maker}>Pembuat Aplikasi</Text>
      <View style={styles.listprofile}>
        <View style={styles.o1}>
          <Image source={orang} style={styles.orang1}/>
          <Text style={styles.namaorang1}>Mikael Firdaus</Text>
          <Text style={styles.namadivisi1}>Backend</Text>
        </View>

        <View style={styles.o1}>
          <Image source={orang} style={styles.orang}/>
          <Text style={styles.namaorang}>Achmed Bintang</Text>
          <Text style={styles.namadivisi}>Mobile</Text>
        </View>

        <View style={styles.o1}>
          <Image source={orang} style={styles.orang}/>
          <Text style={styles.namaorang}>Hafizh Nasrullah</Text>
          <Text style={styles.namadivisi}>Mobile</Text>
        </View>

        <View style={styles.o1}>
          <Image source={orang} style={styles.orang}/>
          <Text style={styles.namaorang4}>Akmal Tezar</Text>
          <Text style={styles.namadivisi}>Mobile</Text>
        </View>

        <View style={styles.o1}>
          <Image source={orang} style={styles.orang}/>
          <Text style={styles.namaorang5}>Erwin Sanjaya</Text>
          <Text style={styles.namadivisi}>Mobile</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.textbutton}>Ke Detail Produk</Text>
      </TouchableOpacity>
      {/* <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  maker:{
    paddingRight:220,
    fontSize:14,
    color:'black',
    fontWeight:'bold'
  },
  listprofile:{
    alignContent: 'center',
    height:243,
    width:325,
    // backgroundColor:'pink',
  },
  o1:{
    flexDirection:'row',
    flexWrap: 'wrap',
    // marginHorizontal:45,
    borderLeftWidth: 0,
    marginTop:34,
  },
  orang:{
    height:24,
    width:24,
    marginRight:46,
  },
  orang1:{
    height:24,
    width:24,
    marginRight:46,
    marginTop:-14,
  },
  namaorang:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:13,
    lineHeight:19.5,
    color:'black',
    marginRight:104,
  },
  namaorang1:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:13,
    lineHeight:19.5,
    color:'black',
    marginRight:104,
    marginTop:-14,
  },
  namaorang4:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:13,
    lineHeight:19.5,
    color:'black',
    marginRight:128,
  },
  namaorang5:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:13,
    lineHeight:19.5,
    color:'black',
    marginRight:120,
  },
  namadivisi:{
    fontWeight:'400',
    fontStyle:'normal',
    fontSize:13,
    lineHeight:19.5,
    color:'#CDD2DA',
  },
  namadivisi1:{
    fontWeight:'400',
    fontStyle:'normal',
    fontSize:13,
    lineHeight:19.5,
    color:'#CDD2DA',
    marginTop:-14,
  },
  logo:{
    marginTop:-10,
    marginBottom:90,
  },
  button:{
    height:50,
    width:325,
    backgroundColor:'#03AC0E',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:60
  },
  textbutton:{
    fontWeight:'700',
    fontStyle:'normal',
    fontSize:20,
    lineHeight:30,
    color:'#FFFFFF',
  }
})
export default AppInfo;