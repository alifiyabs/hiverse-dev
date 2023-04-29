import * as React from 'react';
import {ScrollView, StyleSheet,View, Image, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider} from 'react-native-safe-area-context';

export default function HomeConcert() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaProvider>
      <Appbar.Header>
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
          <Text style = {styles.subtitle}>Informasi Konser</Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#FFFFFF',
    position : 'relative',
    paddingTop : 5
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
  cardstyle: {
    marginBottom : 10,
  },
  title : {
    fontFamily : 'Roboto',
    fontSize : 18,
    fontWeight : 'bold',
    marginTop : 10,
    marginLeft : 5
  },
  subtitle : {
    fontFamily : 'Roboto',
    fontSize : 19,
    color : '#34B97F',
    fontWeight : 'bold',
    marginTop : 20,
    marginLeft : 5
  },
  body : {
    color : '#000000',
    fontFamily : 'Roboto',
    fontWeight : '400'
  },
  cardcover : {
    resizeMode : 'contain',
  },
  image : {
    height : 200,
    resizeMode : 'contain',
    marginLeft : 5,
    marginRight : 5,
    borderRadius : 10
  }
})