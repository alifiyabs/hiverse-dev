import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, Appbar } from "react-native-paper";
import { firebase } from '../firestore/configAuth'
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Registration() {

    const navigation = useNavigation()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const handleChange = setField => text => {
        setField(text);
    }

    const handleRegister = async () => {
        try {

            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (e) {
            console.log("error", e)
        }

    }
    return <SafeAreaProvider>
        <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() =>  navigation.navigate('Login')}/>
        <Appbar.Content title="Daftar" titleStyle={{fontSize:18, fontWeight: "bold"}}/>
        </Appbar.Header>
        <Text style={styles.title}>Masukkan Identitas {'\n'}Akun Anda! </Text>
        <Text style={styles.subtitile}>Silahkan masukan informasi yang akan Anda {'\n'}gunakan untuk masuk ke akun Anda.</Text>
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <TextInput style={styles.inputEmail}
                value={email}
                mode="flat"
                placeholder="Email"
                onChangeText={handleChange(setEmail)}
                autoFocus
            />
            <TextInput style={styles.inputPass}
                value={password}
                mode="flat"
                placeholder="Kata Sandi"
                onChangeText={handleChange(setPassword)}
                secureTextEntry
            />
            <TextInput style={styles.inputPassRep}
                value={repeatPassword}
                mode="flat"
                onChangeText={handleChange(setRepeatPassword)}
                placeholder="Ulangi Kata Sandi"
                secureTextEntry
            />
            <Text style={styles.consent}>
            Membuat akun berarti Anda menyetujui <Text style={{color:"#FC4474"}}>Kebijakan Privasi</Text> dan <Text style={{color:"#FC4474"}}>Ketentuan Layanan</Text> yang berlaku.
            </Text>
        </View>
        <Button style={styles.button} mode="contained" onPress={handleRegister}>Daftar</Button>
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
        marginTop: 20,
        top: 15
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
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    inputPassRep: {
        top: 25,
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: '#FC4474',
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        elevation: 0
    },
    appbar: {
        backgroundColor: '#FC4474'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 20,
        backgroundColor: '#f8f7f2',
        marginTop: 5
    },
    subtitile: {
        fontSize: 14,
        color: '#A5A5A5',
        marginLeft: 20,
        backgroundColor: '#f8f7f2'
    },
    consent: {
        color: '#A5A5A5',
        marginLeft: 5,
        marginTop: 40
    }
})