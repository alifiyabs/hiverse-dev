import * as React from 'react';
import {ScrollView, StyleSheet,View, Image, Text, Button} from 'react-native';
import {Appbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';

export default function HomeConcert() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('HomeConcert')}/>
        <Appbar.Content title="Detail Konser" />
      </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        <View style = {styles.container}>
          <Image
          style = {styles.image} 
          source = 
          {{uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/01/12/9fa582e9-d297-4777-936b-9182df2b6f62-1673528853294-a46fa53e5875021ab7dc0cf2159ee80b.jpg'
          
          }}
          />
          <Text style = {styles.title}>2023 TREASURE TOUR [HELLO] IN JAKARTA</Text>
          <View style = {styles.container}>
            <Text style = {styles.subtitle}>Informasi Konser</Text>
            <Text style = {styles.body}>
              - Saksikan konser TREASURE berjudul titled 2023 TREASURE TOUR [HELLO] IN JAKARTA.
            </Text>
            <Text style = {styles.body}>
              - Konser akan dilaksanakan pada Indonesia Convention Exhibition (ICE) BSD City (Kab. Tangerang) Hall 5-6 pada 18 Maret 2023.
            </Text>
          </View>
          <View style = {styles.container}>
            <Text style = {styles.subtitle}>Informasi Pembelian</Text>
            <Text style = {styles.body}>
              - Untuk tiket kategori seated, nomor kursi akan diberikan secara otomatis oleh sistem.
            </Text>
            <Text style = {styles.body}>
              - Seluruh penonton wajib telah melaksanakan vaksinasi lengkap.
            </Text>
            <Text style = {styles.body}>
              - Seluruh penonton harus membawa bukti sertifikat vaksinasi Covid-19.
            </Text>
            <Text style = {styles.body}>
              - Anda harus menyelesaikan pembayaran dalam waktu 30 menit sebelum masa berlaku e-ticket habis.
            </Text>
          </View>
          <View style = {styles.container}>
            <Text style = {styles.subtitle}>Informasi Tiket</Text>
            <Image
              style = {styles.image} 
              source = 
              {{uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/01/12/16b7cc32-2dfd-4377-9cae-192714370be5-1673528860776-5aa08aa6a6b59b6321d4c3987fee2c8f.jpg'
          
              }}
            />
            <View style = {styles.box}>
              <Text style = {styles.titlebox}>PURPLE A</Text>
              <Text style = {styles.subtitlebox}>
                Pengembalian tidak tersedia, konfirmasi instan
              </Text>
              <Text style = {styles.pricebox}>Rp2.215.000</Text>
              <View style = {styles.fixToText}>
                <Button title='VR Venue' color = '#34B97F'/>
                <Button title='Pilih' color = '#34B97F'/>
              </View>
            </View>
            <View style = {styles.box}>
              <Text style = {styles.titlebox}>PURPLE B</Text>
              <Text style = {styles.subtitlebox}>
                Pengembalian tidak tersedia, konfirmasi instan
              </Text>
              <Text style = {styles.pricebox}>Rp2.215.000</Text>
              <View style = {styles.fixToText}>
                <Button title='VR Venue' color = '#34B97F'/>
                <Button title='Pilih' color = '#34B97F'/>
              </View>
            </View>
            <Text style = {styles.subtitle}>Informasi Lokasi</Text>
            <View style = {styles.boxloc}>
              <Text style = {styles.boxloctext}>
                Indonesia Convention Exhibition (ICE) Jalan BSD Grand Boulevard, Pagedangan, Tangerang, Banten
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#FFFFFF',
  },
  textsubtitle: {
    fontSize: 20,
    color: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar : {
    backgroundColor: '#FFFFFF',
    color: 'white',
    marginBottom : 5,
  },
  searchbar : {
    backgroundColor : 'pink',
    color : 'white',
    justifyContent: 'space-evenly',
    marginBottom : 10,
  },
  box: {
    margin: 7,
    backgroundColor : "#D9D9D9",
    height : 140,
    borderRadius : 10
  },
  titlebox : {
    fontFamily : 'Roboto',
    fontSize : 15,
    fontWeight : 'bold',
    letterSpacing : 1.5,
    marginTop: 15,
    marginLeft : 15
  },
  subtitlebox : {
    fontFamily : 'Roboto',
    fontWeight : 500,
    fontSize : 10,
    marginTop : 5,
    marginLeft : 15
  },
  pricebox : {
    fontFamily : 'Roboto',
    fontSize : 15,
    fontWeight : 'bold',
    color : "#FC4474",
    letterSpacing : 1,
    marginTop: 5,
    marginLeft : 15
  },
  title : {
    fontFamily : 'Roboto',
    fontSize : 18,
    fontWeight : 'bold',
    marginTop : 5,
    marginLeft : 10
  },
  subtitle : {
    fontFamily : 'Roboto',
    fontSize : 19,
    color : '#34B97F',
    fontWeight : 'bold',
    marginTop : 20,
    marginLeft : 10
  },
  body : {
    color : '#000000',
    fontFamily : 'Roboto',
    fontWeight : 500,
    fontSize : 14,
    marginTop : 5,
    marginLeft : 10
  },
  image : {
    height : 170,
    resizeMode : 'contain',
    margin : 5,
    borderRadius : 10
  },
  fixToText : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 7,
  },
  boxloc : {
    margin: 7,
    backgroundColor : "#D9D9D9",
    height : 90,
    borderRadius : 10
  },
  boxloctext : {
    color : '#000000',
    fontFamily : 'Roboto',
    fontWeight : 500,
    fontSize : 15,
    margin: 10,
    letterSpacing : 1
  }
})