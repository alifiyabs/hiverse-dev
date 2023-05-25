import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet,View, Image, Text, TouchableOpacity } from 'react-native';
import { Appbar, ActivityIndicator } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NumericFormat } from "react-number-format";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where} from "firebase/firestore"; 
// import firestore from '@react-native-firebase/firestore';
import { db } from "../firestore/config";

const win = Dimensions.get("window");
export default function DetailConcert() {
  const navigation = useNavigation();
  const route = useRoute();
  const [concert, setConcert] = useState({});
  const [category, setCategory] = useState({});
  const [isWaiting1, setWaiting1] = useState(true); // To wait while database loads
  const [isWaiting2, setWaiting2] = useState(true); // To wait while database loads

  // Storing passed parameter from previous screen
  const [artis, setArtis] = useState(route.params?.artis);
  const [namakonser, setNamaKonser] = useState(route.params?.namakonser);
  const [harga, setHarga] = useState(route.params?.harga);
  const [kota, setKota] = useState(route.params?.kota);
  const [alamat, setAlamat] = useState(route.params?.alamat);
  const [tempat, setTempat] = useState(route.params?.tempat);
  const [tanggal, setTanggal] = useState(route.params?.tanggal);
  const [cover, setCover] = useState(route.params?.cover);
  const [seatplan, setSeatplan] = useState(route.params?.seatplan);
  const [venue, setVenue] = useState(route.params?.venue);
  const [venuevr, setVenuevr] = useState(route.params?.venuevr);

  // const artis = route.params?.artis;
  // const cover = route.params?.cover;
  // const namakonser = route.params?.namakonser;
  // const harga = route.params?.harga;
  // const kota = route.params?.kota;
  // const alamat = route.params?.alamat;
  // const tempat = route.params?.tempat;
  // const tanggal = route.params?.tanggal;

  // Using firestore to search for corresponding doc
  // useEffect(() => {
  //   const q = query(collection(db, "concerts2"), where("artis", "==", artis)); 
  //   onSnapshot(q, (snapshot) => {
  //     setConcert(snapshot.docs.map((doc) => doc.data()))
  //     setWaiting1(false)
  //   })
  // }, []);

  useEffect(() => {
    const r = query(collection(db, "category"), where("namakonser", "==", namakonser, "and", "tanggal", "==", tanggal));
    onSnapshot(r, (snapshot) => {
      setCategory(snapshot.docs.map((doc) => doc.data()))
      setWaiting2(false)
    })
  }, []);

  // console.log(concert)
  console.log(category)
  
  return (
    <SafeAreaProvider>
      <Appbar.Header style={{backgroundColor: "#74E1B2"}}>
      <Appbar.BackAction onPress={() => navigation.navigate('HomeConcert')}/>
      <Appbar.Content title="Detail Konser" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>

      {(isWaiting2) &&
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <ActivityIndicator size={win.width/5} color={"#FB648C"} />
      </View> }

      {!isWaiting2 &&
      <ScrollView>
        <View style = {styles.container}>
          <Image
          style = {styles.image} 
          source = 
          {{uri: cover}}/>
          <Text style = {styles.title}>{"\n"}[{artis}] {namakonser}</Text>
          <View style = {styles.container2}>
            <Text style = {styles.subtitle}>{"\n"}Informasi Konser</Text>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Saksikan konser {artis} berjudul {namakonser}</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Konser akan dilaksanakan pada {alamat} ({kota}) {tempat} pada {tanggal}.</Text>
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
              source = {{uri: seatplan}}
            />
            <Text style={{fontSize: 5}}>{"\n"}</Text>
            <View style = {styles.box}>
              <Text style = {styles.titlebox}>{"\n"}PURPLE A</Text>
              <Text style = {styles.subtitlebox}>
                Pengembalian tidak tersedia, konfirmasi instan
              </Text>
              <NumericFormat renderText={text => <Text style={styles.pricebox}>{text}</Text>} value={harga} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
              <View style = {styles.fixToText}>
                <TouchableOpacity style={styles.buttonactive}
                  onPress={() => navigation.navigate("TicketDetails", 
                  {kategori: category[0].kategori,
                   tanggal : tanggal,
                   artis: artis,
                   namakonser : namakonser,
                  })}>
                  <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Pilih</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{fontSize: 5}}>{"\n"}</Text>
            {/* <View style = {styles.box}>
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
            </View> */}
          </View>
          <View style = {styles.container2}>
            <Text style = {styles.subtitle}>{"\n"}Informasi Lokasi{"\n"}</Text>
            <View style = {styles.boxloc}>
              <Text style = {styles.body}>
                {alamat}
              </Text>
              <Text style = {{marginTop : 3, marginBottom : 7, fontWeight : 600}}>
                Untuk melihat venue lebih jelas, silahkan klik gambar di bawah!
              </Text>
              <TouchableOpacity
                onPress={() => {navigation.navigate("ConcertVenue", {venuevr: venuevr})}}>
              <Image
               style = {{
                height: 200, 
                borderRadius: 15, 
                overflow: "hidden",}}
               source={{uri: venue}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView> }
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
    height: 160, 
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
