import { collection, updateDoc, getDocs, onSnapshot, doc, query, addDoc, where} from "firebase/firestore";
import React, {useEffect, useState} from "react"; 
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { database } from "../firestore/config";

export default function FetchData () {

    const [posts_var, setPosts] = useState([]);

    // treasureref = doc(database, "concerts", "l6soiC4bhfFyRIv79R6M");

    // docRef = addDoc(collection(database, "concerts"), {
    //     date: "10 Juni 2023",
    //     name: "TXT",
    //     price: "2000000",
    // })

    // useEffect(() => {
    //     // updateDoc(treasureref, {
    //     //     date: "20 Maret 2023",
    //     //     name: "Treasure",
    //     //     price: "2215000",
    //     // })

    //     addDoc(collection(database, "concerts"), {
    //         date: "10 Juli 2023",
    //         name: "Itzy",
    //         price: "1000000",
    //     })
        
    // }, []);
        
    useEffect(() => {
        const q = query(collection(database, "concerts"), where ("name", "==", "Treasure"));
        onSnapshot(q, (snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()))
        })
      }, []);

    return (
        <View style={{flex:1, marginTop:100}}>
            <FlatList 
                style={{height: "100%"}}
                data={posts_var}
                numColumns={1}
                renderItem={({item}) => (
                    <Pressable style={styles.container}>
                        <View style = {styles.innerContainer}>
                            <Text style={styles.itemHeading}>{item.date}</Text>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
                        
                    </Pressable>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10,
    },
    innerContainer:{
        alignItems: "center",
        flexDirection: "column",
    },
    itemHeading:{
        fontWeight: "bold",
    },
    itemText: {
        fontWeight: "300"
    }
})