// import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View, VirtualizedList } from 'react-native';
// import { Card, Searchbar, Appbar, Text } from 'react-native-paper';
// import { NumericFormat } from "react-number-format";
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { SafeAreaProvider} from 'react-native-safe-area-context';
// import React, {useState, useEffect} from 'react';
// import {collection, onSnapshot, query, where, snapshot, data, map} from "firebase/firestore"; 
// import { db } from "../firestore/config";

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
// //   const [artis, setArtis] = useState("Coldplay");
// //   const [namakonser, setNamaKonser] = useState("COLDPLAY Music of The Spheres 2023");
// //   const [kategori, setKategori] = useState("Cat 5");

//   // Using firestore to search for corresponding doc

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dataRef = db.collection('concerts2'); // Ganti 'nama_koleksi' dengan nama koleksi Anda
//         const snapshot = await dataRef.get();
//         const fetchedData = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setConcert(fetchedData);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };

//     fetchData();
//     setWaiting1(false);
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
//           {list_concert.length > 0 ? (
//             list_concert.map((item) => (
//               <><TouchableOpacity onPress={pressHandler}>
//                   <Card style={styles.cardstyle}>
//                     <Card.Cover style={styles.cardcover} source={{ uri: item.cover }} />
//                     <Card.Content>
//                       <Text style={styles.cardtitle}>{"\n"}[{item.artis}] {item.namakonser}</Text>
//                       <Text style={styles.cardsubtitle}>{"\n"}{item.kota}</Text>
//                       <NumericFormat renderText={text => <Text style={styles.cardprice}>{text}</Text>} value={item.harga} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
//                     </Card.Content>
//                   </Card>
//               </TouchableOpacity></>
//             ))
//           ) : (
//             <Text>No data available</Text>
//           )}
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
//     color : '#000000'
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