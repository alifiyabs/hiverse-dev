import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, TextInput, Appbar } from "react-native-paper"
import { firebase } from '../firestore/configAuth'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = setField => text => {
        setField(text);
    }
    const handleLogin = async () => {
        // validasi dulu
        // 1. apakah email nya bener bisa pakai validitor js
        // 2. apakah passwor dan repeat passwordnya sama
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            console.log("error", e)
        }

    }
    return <SafeAreaProvider>
        <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Masuk atau Daftar" titleStyle={{fontSize:18, fontWeight: "bold"}}/>
        </Appbar.Header>
        <View style={styles.container}>
        <Text style={styles.title}>Selamat Datang di 
        Hi<Text style={{color:"#34B97F"}}>Verse</Text>!
        </Text>
        <Text style={styles.subtitile}>Silahkan masuk ke akun anda atau buat akun baru untuk menikmati seluruh fitur kami.</Text>
        <View style={styles.formContainer}>
            <TextInput style={styles.inputEmail}
                mode="flat"
                placeholder="Email"
                value={email}
                onChangeText={handleChange(setEmail)}
                autoFocus
            />
            <TextInput style={styles.inputPass}
                mode="flat"
                placeholder="Password"
                value={password}
                onChangeText={handleChange(setPassword)}
                secureTextEntry
            />
            <View style={styles.btnContainer}>
                <Button onPress={() => navigation.navigate("Registration")}>
                    <Text>Belum punya akun? </Text>
                    <Text style={styles.daftar}>Daftar</Text>
                </Button>
                <Button style={styles.button} mode="contained" onPress={handleLogin}>Masuk</Button>
            </View>
        </View>
    </View>
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#f8f7f2'
    },
    formContainer: {
        width: "100%",
        padding: 20,
        marginTop: 8,
    },
    btnContainer: {
        marginTop: 20
    },
    daftar: {
        alignSelf: "center",
        marginVertical: 4,
        color: '#34b97f'
    },
    inputEmail: {
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    inputPass: {
        top: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f2f2f2'
    },
    button: {
        backgroundColor: '#34b97f'
    },
    appbar: {
        backgroundColor: '#34B97F'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    subtitile: {
        fontSize: 14,
        color: '#A5A5A5'
    }
})
