import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet,View, Image, Text, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import firestore from '@react-native-firebase/firestore';

const win = Dimensions.get("window");

export default function ConcertVenue() {
  const navigation = useNavigation();
  const route = useRoute();
  const [venuevr, setVenuevr] = useState(route.params?.venuevr);
  
  return (
    <SafeAreaProvider>
      <Appbar.Header style={{backgroundColor: "#74E1B2"}}>
      <Appbar.BackAction onPress={() => navigation.navigate('DetailConcert', {venuevr: venuevr})}/>
      <Appbar.Content title="Venue" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.title}>{"\n"}Please Rotate your Handphone</Text>
          <Image
          style = {styles.image} 
          source = 
          {{uri: venuevr}}/>
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
