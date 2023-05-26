import { Dimensions, StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import { Card, Searchbar, Appbar, Text, ActivityIndicator } from 'react-native-paper';
import { NumericFormat } from "react-number-format";
import { useNavigation} from '@react-navigation/native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import React, {useState, useEffect} from 'react';
import { collection, onSnapshot, query, where} from "firebase/firestore"; 
import { db } from "../firestore/config";

const win = Dimensions.get("window");
export default function HomeConcert() {
  const navigation = useNavigation();
  
// Database Firestore Const
  const [isWaiting1, setWaiting1] = useState(true); // To wait while database loads
  const [concert, setConcert] = useState({});

  useEffect(() => {
    const dataref = query(collection(db, "concerts2"));
    onSnapshot(dataref, (snapshot) => {
      setConcert(snapshot.docs.map((doc) => doc.data()))
      setWaiting1(false);
    })
  }, []);

  return (
    <SafeAreaProvider>
      <Appbar.Header style={{backgroundColor: "#74E1B2"}}>
      <Appbar.Content style = {styles.appbar} title="Konser" titleStyle={{fontSize: 18, fontWeight: "bold"}}/>
      <Appbar.Action icon="account-circle" color='#000000' onPress={() => navigation.navigate("Profile")}/>
      </Appbar.Header>
      
      {/* Fitur search belum berfungsi */}
      <View style={styles.container2}>
        <Searchbar style = {styles.searchbar}
          placeholder="Cari Artis, Konser.."
        />
      </View>

      {(isWaiting1) &&
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <ActivityIndicator size={win.width/5} color={"#FB648C"} />
      </View> }

      {!isWaiting1 && 
      <FlatList
            data={concert}
            numColumns={1}
            renderItem={({item}) => (
                <View style={styles.container}>
                    <><TouchableOpacity onPress={() => navigation.navigate('DetailConcert', 
                    {artis: item.artis,
                     cover: item.cover,
                     namakonser : item.namakonser,
                     harga : item.harga,
                     kota: item.kota,
                     alamat: item.alamat,
                     tempat: item.tempat,
                     tanggal: item.tanggal,
                     seatplan: item.seatplan,
                     venue: item.venue,
                     venuevr: item.venuevr})}>
                        <Card style={styles.cardstyle}>
                            <Card.Cover style={styles.cardcover} source={{ uri: item.cover }} />
                            <Card.Content style = {styles.cardcontent}>
                                <Text style={styles.cardtitle}>[{item.artis}] {item.namakonser}</Text>
                                <Text style={styles.cardsubtitle}>{item.kota}</Text>
                                <NumericFormat renderText={text => <Text style={styles.cardprice}>{text}</Text>} value={item.harga} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
                            </Card.Content>
                        </Card>
                    </TouchableOpacity></>
                </View> 
            )}
        />}
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
  container2: {
    padding: 10,
    alignContent: "center",
  },
  textsubtitle: {
    fontSize: 20,
    color: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar : {
    backgroundColor : 'pink',
    color : 'white',
    justifyContent: 'space-evenly',
  },
  cardstyle: {
    marginBottom : 2,
    padding: 2,
    // height: 310, do not use this because it will ruin the screen 
    width: win.width-20,
  },
  cardcontent : {
    marginTop: 7,
  },
  cardtitle : {
    fontSize : 16,
    fontWeight : 'bold',
    color : '#000000',
    marginTop : 5,
  },
  cardsubtitle : {
    fontSize : 13,
    color : '#A5A5A5',
  },
  cardprice : {
    color : '#FB648C',
    fontWeight : 'bold',
    fontSize: 15,
  },
  cardcover : {
    resizeMode : 'contain',
  }
})