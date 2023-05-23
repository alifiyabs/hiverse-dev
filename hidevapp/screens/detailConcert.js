import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet,View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import firestore from '@react-native-firebase/firestore';
// import { db } from "../firestore/config";

const win = Dimensions.get("window");
export default function DetailConcert() {
  const navigation = useNavigation();
  const route = useRoute();

  // Storing passed parameter from previous screen
  const [artis, setArtis] = useState(route.params?.artis);
  const [namakonser, setNamaKonser] = useState(route.params?.namakonser);
  const [category, setCategory] = useState({});
  const [tanggal, setTanggal] = useState({})

  // Using firestore to search for corresponding doc
  useEffect(() => {
    const q = query(collection(db, "concerts2"), where("artis", "==", artis)); 
    onSnapshot(q, (snapshot) => {
      setConcert(snapshot.docs.map((doc) => doc.data()))
      setWaiting1(false)
    })
  }, []);

  useEffect(() => {
    const r = query(collection(db, "category"), where("namakonser", "==", namakonser, "and", "tanggal", "==", tanggal, "and", "kategori", "==", category));
    onSnapshot(r, (snapshot) => {
      setCategory(snapshot.docs.map((doc) => doc.data()))
      setWaiting2(false)
    })
  }, []);
  
  return (
    <SafeAreaProvider>
      <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('HomeConcert')}/>
      <Appbar.Content title="Detail Konser" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>
      <FlatList
            data={namakonser}
            numColumns={1}
            renderItem={({item}) => (
              <View style = {styles.container}>
              <Image
              style = {styles.image} 
              source = {{uri: concerts2[0].cover}}/>
              <Text style = {styles.title}>[{item.artis}] {item.namakonser} </Text>
              <View style = {styles.container2}>
                <Text style = {styles.subtitle}>{"\n"}Informasi Konser</Text>
                <View style={{flexDirection: 'row', marginRight: 5,}}>
                  <Text>{'\u2022'} </Text>
                  <Text style={styles.body}>Saksikan konser {item.artis} berjudul {item.namakonser}</Text>
                </View>
                <View style={{flexDirection: 'row', marginRight: 5,}}>
                  <Text>{'\u2022'} </Text>
                  <Text style={styles.body}>Konser akan dilaksanakan pada {item.alamat} Hall 5-6 pada {item.tanggal}.</Text>
                </View>
              </View>
              <View style = {styles.container2}>
                <Text style = {styles.subtitle}>{"\n"}Informasi Pembelian</Text>
                <View style={{flexDirection: 'row', marginRight: 5,}}>
                  <Text>{'\u2022'} </Text>
                  <Text style={styles.body}>Untuk tiket kategori seated, nomor kursi akan diberikan secara otomatis oleh sistem.</Text>
                </View>
                <View style={{flexDirection: 'row', marginRight: 5,}}>
                  <Text>{'\u2022'} </Text>
                  <Text style={styles.body}>Seluruh penonton wajib telah melaksanakan vaksinasi lengkap.</Text>
                </View>
                <View style={{flexDirection: 'row', marginRight: 5,}}>
                  <Text>{'\u2022'} </Text>
                  <Text style={styles.body}>Seluruh penonton harus membawa bukti sertifikat vaksinasi Covid-19.</Text>
                </View>
                <View style={{flexDirection: 'row', marginRight: 5,}}>
                  <Text>{'\u2022'} </Text>
                  <Text style={styles.body}>Anda harus menyelesaikan pembayaran dalam waktu 30 menit sebelum masa berlaku e-ticket habis.</Text>
                </View>
              </View>
              <View style = {styles.container2}>
                <Text style = {styles.subtitle}>{"\n"}Informasi Tiket{"\n"}</Text>
                <Image
                  style = {styles.image} 
                  source = {{uri: concerts2[0].seatplan}}
                />
                <Text style={{fontSize: 5}}>{"\n"}</Text>
                <View style = {styles.box}>
                  <Text style = {styles.titlebox}>{item.category}</Text>
                  <Text style = {styles.subtitlebox}>
                    Pengembalian tidak tersedia, konfirmasi instan
                  </Text>
                  <Text style = {styles.pricebox}>{item.price}</Text>
                  <View style = {styles.fixToText}>
                    <TouchableOpacity style={styles.buttonactive}
                      onPress={() => navigation.navigate("TicketDetails")}>
                      <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Pilih</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{fontSize: 5}}>{"\n"}</Text>
                <View style = {styles.box}>
                  <Text style = {styles.titlebox}>{"\n"}PURPLE B</Text>
                  <Text style = {styles.subtitlebox}>
                    Pengembalian tidak tersedia, konfirmasi instan
                  </Text>
                  <Text style = {styles.pricebox}>{"\n"}Rp2.215.000</Text>
                  <View style = {styles.fixToText}>
                    <TouchableOpacity style={styles.buttonactive}
                      onPress={() => navigation.navigate("TicketDetails")}>
                      <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Pilih</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style = {styles.container2}>
                <Text style = {styles.subtitle}>{"\n"}Informasi Lokasi{"\n"}</Text>
                <View style = {styles.boxloc}>
                  <Text style = {styles.body}>
                    Indonesia Convention Exhibition (ICE) Jalan BSD Grand Boulevard, Pagedangan, Tangerang, Banten
                  </Text>
                  <Text style = {{marginTop : 3, marginBottom : 7, fontWeight : 600}}>
                    Untuk melihat venue lebih jelas, silahkan klik gambar di bawah!
                  </Text>
                  <TouchableOpacity
                    onPress={() => {navigation.navigate("ConcertVenue")}}>
                  <Image
                   style = {{
                    height: 200, 
                    borderRadius: 15, 
                    overflow: "hidden",}}
                   source={{uri: 'https://firebasestorage.googleapis.com/v0/b/hiverse-develop.appspot.com/o/ice-bsd-concert.jpeg?alt=media&token=84e111bf-edc5-4aab-a6f1-5b50456d6887'}} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    width: win.width-20,
  },
  container3: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    width: win.width-20,
    justifyContent: "center"
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
    width: win.width-20, 
    height: 180, 
    borderRadius: 15, 
    backgroundColor: "#D9D9D9", 
    paddingHorizontal: 20,
  },
  titlebox : {
    fontSize : 17,
    fontWeight : 'bold',
  },
  subtitlebox : {
    fontSize : 13,
  },
  pricebox : {
    fontSize : 17,
    fontWeight : 'bold',
    color : "#FB648C",
  },
  title : {
    fontSize : 18,
    fontWeight : 'bold',
  },
  subtitle : {
    fontSize : 17,
    color : '#34B97F',
    fontWeight : 'bold',
  },
  body : {
    fontSize : 15,
    marginBottom : 5
  },
  image : {
    width: win.width-20, 
    height: 200, 
    borderRadius: 15, 
    overflow: "hidden",
    // resizeMode : "contain"
  },
  fixToText : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 7,
  },
  boxloc : {
    width: win.width-20, 
    height: 350, 
    borderRadius: 15, 
    backgroundColor: "#D9D9D9", 
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  boxloctext : {
    fontSize : 15,
    flex: 1,
  },
  buttonactive: {
    alignItems: "center", 
    backgroundColor: "#34B97F", 
    padding: 10,
    borderRadius: 25,
    padding: 10,
    width: 150,
  },
  buttoninactive: {
    alignItems: "center", 
    backgroundColor: "#B1B1B1", 
    padding: 10,
    borderRadius: 25,
    padding: 10,
    width: 150,
  },
})
