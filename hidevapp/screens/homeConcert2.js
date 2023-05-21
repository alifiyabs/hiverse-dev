// import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
// import { Card, Searchbar, Appbar, Text } from 'react-native-paper';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { SafeAreaProvider} from 'react-native-safe-area-context';
// import React, {useState, useEffect} from 'react';
// import { collection, onSnapshot, query, where } from "firebase/firestore"; 
// import { db } from "../firestore/config";
// import { FlatList } from 'react-native-gesture-handler';

// const win = Dimensions.get("window");
// export default function HomeConcert() {
//   const navigation = useNavigation();
//   const pressHandler = () => {
//     navigation.navigate('DetailConcert')
//   }
// //   const route = useRoute();
  
//   // Database Firestore Const
//   const [isWaiting1, setWaiting1] = useState(true); // To wait while database loads
//   const [list_concert, setConcert] = useState({});
//   const [artis, setArtis] = useState("Coldplay");
//   const [namakonser, setNamaKonser] = useState("COLDPLAY Music of The Spheres 2023");
//   const [kategori, setKategori] = useState("Cat 5");

//   // Using firestore to search for corresponding doc

//   useEffect(() => {
//     const dataref = query(collection(db, "concerts1"), where("artis", "==", artis)); // Should be using variable
//     onSnapshot(dataref, (snapshot) => {
//       setConcert(snapshot.docs.map((doc) => doc.data()))
//       setWaiting1(false)
//     })
//   }, []);

//   return (
//     <SafeAreaProvider>
//       <Appbar.Header>
//       <Appbar.Content style = {styles.appbar} title="Konser" titleStyle={{fontSize: 18, fontWeight: "bold"}}/>
//       </Appbar.Header>
//       <View style={styles.container2}>
//         <Searchbar style = {styles.searchbar}
//           placeholder="Cari Artis, Konser.."
//         />
//       </View>

//       {!isWaiting1 &&
//       <ScrollView>
//       <View style={styles.container}>
//         <FlatList
//             data={list_concert}
//             numColumns={1}
//             renderItem={({item}) => (
//                 <><TouchableOpacity onPress={pressHandler}>
//                     <Card style={styles.cardstyle}>
//                         <Card.Cover style={styles.cardcover} source={{ uri: item.cover }} />
//                         <Card.Content>
//                             <Text style={styles.title}>{"\n"}[{item.artis}] {item.namakonser}</Text>
//                             <Text style={styles.cardsubtitle}>Tangerang Selatan, Banten</Text>
//                             <NumericFormat renderText={text => <Text style={styles.cardprice}>{text}</Text>} value={item.harga} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
//                         </Card.Content>
//                     </Card>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Card style={styles.cardstyle}>
//                         <Card.Cover style={styles.cardcover} source={{ uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/03/14/499f912f-9469-4501-81b3-9436355cef97-1678779309256-3051d357e077bf529a764fd3720cca10.jpg' }} />
//                         <Card.Content>
//                             <Text style={styles.cardtitle}>{"\n"}[SHEILA ON 7] LIVE IN CONCERT</Text>
//                             <Text style={styles.cardsubtitle}>Jakarta Pusat, DKI Jakarta</Text>
//                             <NumericFormat renderText={text => <Text style={styles.cardprice}>{text}</Text>} value={item.harga} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
//                         </Card.Content>
//                     </Card>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Card style={styles.cardstyle}>
//                         <Card.Cover style={styles.cardcover} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/hiverse-develop.appspot.com/o/nct-dream-concert.jpeg?alt=media&token=e6a05476-23a1-4953-a38e-f4295946640b' }} />
//                         <Card.Content>
//                             <Text style={styles.cardtitle}>{"\n"}[NCT DREAM] THE DREAM SHOW 2 IN JAKARTA</Text>
//                             <Text style={styles.cardsubtitle}>Tangerang Selatan, Banten</Text>
//                             <NumericFormat renderText={text => <Text style={styles.cardprice}>{text}</Text>} value={item.harga} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
//                         </Card.Content>
//                     </Card>
//                 </TouchableOpacity></>
//             )}
//         />
//       </View>
//       </ScrollView> }
//     </SafeAreaProvider>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     padding: 10,
//     alignContent: "center",
//   },
//   container2: {
//     padding: 10,
//     alignContent: "center",
//   },
//   textsubtitle: {
//     fontSize: 20,
//     color: "black",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   searchbar : {
//     backgroundColor : 'pink',
//     color : 'white',
//     justifyContent: 'space-evenly',
//   },
//   cardstyle: {
//     marginBottom : 10,
//     padding: 2,
//     height: 310,
//     width: win.width-20,
//   },
//   cardtitle : {
//     fontSize : 15,
//     fontWeight : 'bold',
//   },
//   cardsubtitle : {
//     fontSize : 13,
//     color : '#A5A5A5',
//   },
//   cardprice : {
//     color : '#FB648C',
//     fontWeight : 'bold',
//     fontSize: 15,
//   },
//   cardcover : {
//     resizeMode : 'contain',
//   }
// })
