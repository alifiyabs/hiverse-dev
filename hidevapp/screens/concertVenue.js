import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet,View, Image, Text, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import firestore from '@react-native-firebase/firestore';

const win = Dimensions.get("window");

export default function ConcertVenue() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaProvider>
      <Appbar.Header style={{backgroundColor: "#74E1B2"}}>
      <Appbar.BackAction onPress={() => navigation.navigate('DetailConcert')}/>
      <Appbar.Content title="Venue" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.title}>{"\n"}Please Rotate your Handphone</Text>
          <Image
          style = {styles.image} 
          source = 
          {{uri: 'https://firebasestorage.googleapis.com/v0/b/hiverse-develop.appspot.com/o/66D9E289-6C23-48C1-8BBB-E7218040B2FF_1_201_a.jpeg?alt=media&token=945a57fa-bcd0-4bb7-8b84-a64774112548'
          }}/>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    alignContent: "center",
  },
  appbar : {
    backgroundColor: '#FFFFFF',
    color: 'white',
    marginBottom : 5,
  },
  subtitlebox : {
    fontSize : 13
  },
  title : {
    fontSize : 18,
    fontWeight : 'bold',
    textAlign : 'center',
    marginLeft : 40,
    marginBottom : 5
  },
  image : {
    width: win.width-20, 
    height: 650, 
    borderRadius: 15, 
    overflow: "hidden",
  },
})
