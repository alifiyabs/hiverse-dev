import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput, Appbar } from "react-native-paper";
import auth from 'firebase/compat/auth';
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
        // validasi dulu
        // 1. apakah email nya bener bisa pakai validitor js
        // 2. apakah passwor dan repeat passwordnya sama
        try {

            await auth().createUserWithEmailAndPassword(email, password)
        } catch (e) {
            console.log("error", e)
        }

    }
    return <SafeAreaProvider>
        <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() =>  navigation.navigate('Login')}/>
        <Appbar.Content title="Daftar" titleStyle={{fontSize:18, fontWeight: "bold"}}/>
        </Appbar.Header>
        <View style={styles.container}>
        <Text style={styles.title}>Masukkan Identitas Akun Anda!</Text>
        <Text style={styles.subtitile}>Silahkan masukan informasi yang akan Anda gunakan untuk masuk ke akun Anda.</Text>
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
            <Checkbox style={styles.checkbox}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => 
                {setChecked(!checked);
                }}
                placeholder="Membuat akun berarti Anda menyetujui Kebijakan Privasi dan Ketentuan Layanan yang berlaku."
            />
            <View style={styles.btnContainer}>
                <Button style={styles.button} mode="contained" onPress={handleRegister}>Daftar</Button>
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
        backgroundColor: '#FC4474'
    },
    appbar: {
        backgroundColor: '#FC4474'
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
