import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Button, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import { Appbar, Card, Text } from "react-native-paper";
import { Items } from "../database/Database";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NumericFormat } from "react-number-format";
// import { firebase } from "../database/firebasedb";
// import { firestore } from "@react-native-firebase/firestore";
// import { firebase } from "@react-native-firebase/firestore";
// import firebase from "firebase";
// import firestore from '@react-native-firebase/firestore';
// import firestore from "@firebase/firestore";
import { collection, getcollection, getDocs, onSnapshot, doc, query } from "firebase/firestore"; 
import { db } from "../database/firebasedb";

const win = Dimensions.get("window");
// const collectionref = doc(db, "concert");
// const concertDocument = firestore().collection("concert").doc("gXrMXkWhlRwe87sZG3vy");
// const concerto = firestore().collection("concert").doc("gXrMXkWhlRwe87sZG3vy").get();
export default function TicketDetails() {  
  const navigation = useNavigation();
  const [ticket, setTicket] = useState(1);
  const [price, setPrice] = useState(2215000);
  const [servicecharge, serServicecharge] = useState(1500);
  const { name } = useState("Treasure")
  
  // const [posts_var, setPosts] = useState([]);

  // useEffect(() => {
  //   const q = query(collection(db, "concert"));
  //   onSnapshot(q, (snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   })
  // }, []);
  // const concertRef = firebase.firestore().collection("concert");

  // useEffect(() => {

  //   firestore().collection("concert").where("name", "==", name).then((snapshots) => {
  //     console.log(snapshots)
  //   })
  // }, [name])

  // firestore().collection("concert").add({
  //   date: "10 Juni 2023",
  //   name: "TXT",
  //   price: "1000000",
  // })

  // useEffect(() => {
  //   const getlalala = db
  //     .collection("concert")
  //     .onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach
  //     })
  // })
  
  // const getgatau = async() => {
  //   const querySnapshot = await getDocs(collection(db, "concert"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //   });
  // };

  // useEffect(() => {
  //   getgatau();
  // }, []);

  return (
    <SafeAreaProvider>
      <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate("DetailConcert")} />
      <Appbar.Content title="Detail Tiket" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>
      <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/hiverse-project.appspot.com/o/treasure.jpg?alt=media&token=94a65147-7a32-481b-8fa2-dcaec9e4fe7c" }}
        style={styles.coverimage} />
        <Text style={styles.title}>{"\n"}[TREASURE] 2023 TREASURE TOUR HELLO IN JAKARTA</Text>
        <Text style={styles.subtitle}>{"\n"}Informasi Tiket{"\n"}</Text>
        <View style={{width: win.width-20, height: 160, borderRadius: 15, backgroundColor: "#D9D9D9", paddingHorizontal: 20}}>
          <Text style={styles.seat}>{"\n"}PURPLE A</Text>
          <Text style={styles.seatdetails}>Pengembalian tidak tersedia, konfirmasi instan</Text>
          <Text style={styles.seatprice}>
            {"\n"}
            <NumericFormat renderText={text => <Text style={styles.seatprice}>{text}</Text>} value={price} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
          </Text>
          <View style={{alignItems: "center", flexDirection: "row"}}>
            <View style={{flex: 1}} />
            { ticket == 2 &&
            // <Button 
            //   title="-"
            //   color="#34B97F" 
            //   onPress={() => {setTicket(1), setPrice(price/2)}} /> }
            <TouchableOpacity style={styles.buttonactive}
              onPress={() => {setTicket(1), setPrice(price/2)}}>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>-</Text>
            </TouchableOpacity>}
            { ticket == 1 &&
            // <Button 
            //   title="-"
            //   color="#34B97F" 
            //   disabled /> }
            <TouchableOpacity style={styles.buttoninactive}
              disabled>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>-</Text>
            </TouchableOpacity>}
            <Text>
              {"  "}{ticket}{"  "}
            </Text>
            { ticket == 2 && 
            // <Button 
            //   title="+"
            //   color="#34B97F"  
            //   disabled /> }
            <TouchableOpacity style={styles.buttoninactive}
              disabled>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>+</Text>
            </TouchableOpacity>}
            { ticket == 1 && 
            // <Button 
            //   title="+"
            //   color="#34B97F"  
            //   onPress={() => {setTicket(2), setPrice(price*2)}} /> }
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
            {"\n"}19 Maret 2023{"\n"}
            {/* {"\n"}19 Maret 2023{"\n"} */}
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
        <View style={styles.smallcontainer}>
          <Text style={styles.total}>
            {"\n"}<NumericFormat renderText={text => <Text style={styles.total}>{text}</Text>} value={price+servicecharge} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Payment", {total: price+servicecharge})}>
            <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>BELI</Text>
          </TouchableOpacity>
        </View>

        {/* <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/01/12/9fa582e9-d297-4777-936b-9182df2b6f62-1673528853294-a46fa53e5875021ab7dc0cf2159ee80b.jpg" }} />
        <Card.Content>
          <Text style={styles.title}>{"\n"}[TREASURE] 2023 TREASURE TOUR HELLO IN JAKARTA</Text>
          <Text style={styles.subtotal}>Rp350.000</Text>
          <Text style={styles.details}>{"\n"}HYBE{"\n"}</Text>
          <Text style={styles.details}>{"\n"}HYBE{"\n"}</Text>
        </Card.Content>
        </Card> */}
      </View>
      </ScrollView>
    </SafeAreaProvider>
  )
};
  
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 10,
      alignContent: "center",
    },
    smallcontainer: {
      width: win.width-20, 
      flexDirection: "row",
    },
    card: {
      padding: 2,
      height: 400,
      width: "100%",
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