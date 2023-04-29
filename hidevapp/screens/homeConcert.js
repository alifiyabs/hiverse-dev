import * as React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Searchbar, Appbar, Text} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function HomeConcert() {
  const navigation = useNavigation();
  const _goBack = () => console.log('Went back');
  const pressHandler = () => {
    navigation.navigate('DetailConcert')
  }

  return (
    <SafeAreaProvider style = {styles.container}>
      <Appbar.Header style = {styles.appbar}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content style = {styles.appbar} title="Konser" />
        </Appbar.Header>
      <Searchbar style = {styles.searchbar}
        placeholder="Cari Artis, Konser.."
      />
      <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={pressHandler}>
        <Card style = {styles.cardstyle}>
          <Card.Cover style = {styles.cardcover} source={{ uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/01/12/9fa582e9-d297-4777-936b-9182df2b6f62-1673528853294-a46fa53e5875021ab7dc0cf2159ee80b.jpg' }} />
          <Card.Content>
            <Text style = {styles.cardtitle}>2023 TREASURE TOUR [HELLO] IN JAKARTA</Text>
            <Text style = {styles.cardsubtitle}>Tangerang Selatan, Banten</Text>
            <Text style = {styles.cardprice}>Rp2.215.000</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card style = {styles.cardstyle}>
          <Card.Cover style = {styles.cardcover} source={{ uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/03/14/499f912f-9469-4501-81b3-9436355cef97-1678779309256-3051d357e077bf529a764fd3720cca10.jpg' }} />
          <Card.Content>
            <Text style = {styles.cardtitle}>SHEILA ON 7 LIVE IN CONCERT</Text>
            <Text style = {styles.cardsubtitle}>Jakarta Pusat, DKI Jakarta</Text>
            <Text style = {styles.cardprice}>Rp350.000</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card style = {styles.cardstyle}>
          <Card.Cover style = {styles.cardcover} source={{ uri: 'https://dyandraglobal.com/wp-content/uploads/2023/01/NCT-Dream-Tour-The-Dream-Show-2_home-page-web-OK.jpg' }} />
          <Card.Content>
            <Text style = {styles.cardtitle}>NCT DREAM TOUR THE DREAM SHOW 2 IN JAKARTA</Text>
            <Text style = {styles.cardsubtitle}>Tangerang Selatan, Banten</Text>
            <Text style = {styles.cardprice}>Rp2.215.000</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  cardtitle : {
    fontSize : 18,
    fontWeight : 'bold',
  },
  cardsubtitle : {
    fontSize : 13,
    color : '#A5A5A5',
  },
  cardprice : {
    color : '#FB648C',
    fontWeight : 'bold'
  },
  cardcover : {
    resizeMode : 'contain',
  }
})