import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Appbar, Divider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { firebase } from '../firestore/configAuth'

export default function Profile() {
    const navigation = useNavigation();
    const handleSignOut = async () => {
        try { await firebase.auth().signOut()
    } catch (e) {
        console.log("error", e)
    }
    }

    return <SafeAreaProvider>
        <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() =>  navigation.navigate('HomeConcert')}/>
        <Appbar.Content title="Profile" titleStyle={{fontSize:18, fontWeight: "bold"}}/>
        </Appbar.Header>
        <View style={styles.container}>
            <Button style={styles.iconProfile} icon="account-circle" labelStyle={{fontSize:100}} textColor='#b1b1b1'/>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Info Pribadi</Text>
                <Text style={styles.textContent}>Email</Text>
                <Divider />
                <Text style={styles.textContent}>Password</Text>
                <Divider />
                <Text style={styles.textContent}>Alamat</Text>
                <Text>{'\n'}</Text>
                <Text style={styles.textTitle}>Atur Pembayaran</Text>
                <Text style={styles.textContent}>E-wallet</Text>
            </View>
        </View>
        <View style={styles.btnContainer}>
                <Button style={styles.button} mode="contained" onPress={handleSignOut}>Sign Out</Button>
        </View>
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#f8f7f2'
    },
    button: {
        backgroundColor: '#FC4474'
    },
    appbar: {
        backgroundColor: "#74E1B2"
    },
    btnContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        elevation: 0
    },
    textContainer: {
        padding: 10,
        width: "100%",
        paddingTop: 50
    },
    textTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textContent: {
        fontSize: 16,
        padding: 10
    },
    iconProfile: {
        paddingTop: 10
    }
})