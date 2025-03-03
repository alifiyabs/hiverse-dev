import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import { Appbar, Text, ActivityIndicator } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NumericFormat } from "react-number-format";
// import { LinearGradient } from "expo-linear-gradient";
import { collection, onSnapshot, query, where } from "firebase/firestore"; 
import { db } from "../firestore/config";

// Get window size for ease
const win = Dimensions.get("window");

export default function TicketDetails() {  
  // Declare navigations
  const navigation = useNavigation();
  const route = useRoute();

  // Variables used by default
  const [ticket, setTicket] = useState(1);  // By default ticket is 1
  const [servicecharge, setServicecharge] = useState(1500); // Fixed service charge

  // Variables used dinamically using firestore
  const [isWaiting1, setWaiting1] = useState(true); // To wait while database loads
  const [isWaiting2, setWaiting2] = useState(true); // To wait while database loads
  const [concert, setConcert] = useState({});
  const [category, setCategory] = useState({});

  // Storing passed parameter from previous screen
  const [tanggal, setTanggal] = useState(route.params?.tanggal);
  const [artis, setArtis] = useState(route.params?.artis);
  const [namakonser, setNamaKonser] = useState(route.params?.namakonser);
  const [kategori, setKategori] = useState(route.params?.kategori); 
  const [price, setPrice] = useState(route.params?.price); 

  // Mengubah string menjadi Integer
  const harga = parseInt(price);

  // Using firestore to search for corresponding doc
  useEffect(() => {
    const q = query(collection(db, "concerts2"), where("artis", "==", artis)); 
    onSnapshot(q, (snapshot) => {
      setConcert(snapshot.docs.map((doc) => doc.data()))
      setWaiting1(false)
    })
  }, []);

  useEffect(() => {
    const r = query(collection(db, "category2"), where("namakonser", "==", namakonser, "and", "tanggal", "==", tanggal, "and", "kategori", "==", kategori)); // Should be using variable
    onSnapshot(r, (snapshot) => {
      setCategory(snapshot.docs.map((doc) => doc.data()))
      setWaiting2(false)
    })
  }, []);


  // console.log(concert)

  // Comments on this line onwards are the to be used code
  return (
    <SafeAreaProvider>
      <Appbar.Header style={{backgroundColor: "#74E1B2"}}>
        <Appbar.BackAction onPress={() => navigation.navigate("DetailConcert", 
                          {kategori: category[0].kategori,
                           tanggal : tanggal,
                           artis: artis,
                           namakonser : namakonser})} />
        <Appbar.Content title="Detail Tiket" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>

      {(isWaiting1 || isWaiting2) &&
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <ActivityIndicator size={win.width/5} color={"#FB648C"} />
      </View> }

      {!isWaiting1 && !isWaiting2 &&
      <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: concert[0].cover}}
        style={styles.coverimage} />
        <Text style={styles.title}>{"\n"}[{artis}] {namakonser}</Text>
        <Text style={styles.subtitle}>{"\n"}Informasi Tiket{"\n"}</Text>
        
        <View style={styles.box}>
          <Text style={styles.seat}>{"\n"}{kategori}</Text>
          <Text style={styles.seatdetails}>Pengembalian tidak tersedia, konfirmasi instan</Text>
          <Text style={styles.seatprice}>
            {"\n"}
            <NumericFormat renderText={text => <Text style={styles.seatprice}>{text}</Text>} value={price} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
          </Text>
          <View style={{alignItems: "center", flexDirection: "row"}}>
            <View style={{flex: 1}} />
            { ticket == 2 &&
            <TouchableOpacity style={styles.buttonactive}
              onPress={() => {setTicket(1), setPrice(price/2)}}>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>-</Text>
            </TouchableOpacity>}
            { ticket == 1 &&
            <TouchableOpacity style={styles.buttoninactive}
              disabled>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>-</Text>
            </TouchableOpacity>}
            <Text>
              {"  "}{ticket}{"  "}
            </Text>
            { (ticket == 2 || category[0].kuota < 2 ) &&
            <TouchableOpacity style={styles.buttoninactive}
              disabled>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>+</Text>
            </TouchableOpacity>}
            { ticket == 1 && category[0].kuota > 1 &&
            <TouchableOpacity style={styles.buttonactive}
              onPress={() => {setTicket(2), setPrice(price*2)}}>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>+</Text>
            </TouchableOpacity>}
            <View style={{flex: 1}} />
          </View>
        </View>

        <View style={styles.smallcontainer}>
          <Text style={styles.left}>
            {"\n"}Tanggal
          </Text>
          <Text style={styles.right}>
            {"\n"}{concert[0].tanggal}{"\n"}
          </Text>
        </View>

        <View style={styles.horizontalline} />
        <View style={styles.smallcontainer}>
          <Text style={styles.left}>
            {"\n"}Biaya Tiket
          </Text>
          <Text style={styles.right}>
            {"\n"}
            <NumericFormat renderText={text => <Text style={styles.right}>{text}</Text>} value={price} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
          </Text>
        </View>

        <View style={styles.smallcontainer}>
          <Text style={styles.left}>
            {"\n"}Biaya Layanan
          </Text>
          <Text style={styles.right}>
            {"\n"}
            <NumericFormat renderText={text => <Text style={styles.right}>{text}</Text>} value={servicecharge} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
            {"\n"}
          </Text>
        </View>

        <View style={styles.horizontalline} />
        <View style={styles.smallcontainer}>
          <Text>
            {"\n"}Total Pembayaran
          </Text>
        </View>

        <View style={styles.smallcontainer2}>
          <Text style={styles.total}>
            {"\n"}<NumericFormat renderText={text => <Text style={styles.total}>{text}</Text>} value={harga+servicecharge} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("TicketPurchase", 
            {total: harga+servicecharge, 
              ticket: ticket,
              artis: concert[0].artis,
              tanggal: concert[0].tanggal, 
              namakonser: concert[0].namakonser,
              kategori: category[0].kategori,
              kuota: category[0].kuota})}>
            <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>BELI</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView> }
    </SafeAreaProvider>
  )
};
  
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 10,
      alignContent: "center",
      backgroundColor: "#ffffff",
    },
    smallcontainer: {
      width: win.width-20, 
      flexDirection: "row",
    },
    smallcontainer2: {
      width: win.width-20, 
      flexDirection: "row",
      paddingBottom: 20,
      backgroundColor: "#ffffff",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#34B97F",
    },
    box: {
      width: win.width-20, 
      height: 160, 
      borderRadius: 15, 
      // backgroundColor: "#ffffff", 
      backgroundColor: "#D9D9D9", 
      paddingHorizontal: 20
    },
    seat: {
      fontSize: 17,
      fontWeight: "bold",
    },
    seatdetails: {
      fontSize: 13,
    },
    seatprice: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#FB648C",
    },
    subtotal: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#FB648C",
    },
    total: {
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "left",
      flex: 1,
    },
    left: {
      fontSize: 15,
      textAlign: "left",
      flex: 1,
    },
    right: {
      fontSize: 15,
      textAlign: "right",
      flex: 1,
    },
    horizontalline: {
      width: win.width-20, 
      borderBottomColor: "#B1B1B1", 
      borderBottomWidth: 1,
    },
    coverimage: {
      width: win.width-20, 
      height: 200, 
      borderRadius: 15, 
      overflow: "hidden",
    },
    button: {
      flex: 1, 
      alignItems: "center", 
      backgroundColor: "#34B97F", 
      padding: 10,
      borderRadius: 25,
      width: 50,
    },
    buttonactive: {
      alignItems: "center", 
      backgroundColor: "#34B97F", 
      padding: 10,
      borderRadius: 20,
      width: 40,
      height: 40,
    },
    buttoninactive: {
      alignItems: "center", 
      backgroundColor: "#B1B1B1", 
      padding: 10,
      borderRadius: 20,
      width: 40,
      height: 40,
    },
  })