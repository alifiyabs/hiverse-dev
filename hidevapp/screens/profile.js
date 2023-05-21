import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput, Appbar } from "react-native-paper";
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
        <Appbar.Content title="Profile" titleStyle={{fontSize:18, fontWeight: "bold"}}/>
        </Appbar.Header>
        <View style={styles.container}>
            <Button icon="account-circle" labelStyle={{fontSize:100}} textColor='#b1b1b1'/>
            <View style={styles.btnContainer}>
                <Button style={styles.button} mode="contained" onPress={handleSignOut}>Sign Out</Button>
            </View>
        </View>
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#f8f7f2'
    },
    button: {
        backgroundColor: '#FC4474'
    },
    appbar: {
        backgroundColor: '#34B97F'
    },
    btnContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        elevation: 0
    }
})