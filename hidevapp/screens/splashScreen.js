import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native'
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Hiverse_Logo } from "../assets";

export default function SplashScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout( () => {
            navigation.replace("OnBoarding");
        }, 3000)
    }, [navigation])
    
    return <SafeAreaProvider>
        <View style={styles.container}>
            <Image source={Hiverse_Logo} style={styles.logo}/>
        </View>
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFFFFF'
    },
    logo: {
        width: 150,
        height: 200
    }
})