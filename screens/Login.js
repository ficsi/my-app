import {StyleSheet, Text, View, TouchableOpacity, Alert, TextInput} from 'react-native';
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig";

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLog = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                navigation.navigate('Home')
            })
            .catch(err => {
                Alert.alert(err.message)
            })
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter email'
                       autoCapitalize='none'
                       keyboardType='email-address'
                       textContentType='emailAddress'
                       autoFocus={true}
                       value={email}
                       style={styles.input} onChangeText={(text) => setEmail(text)}/>
            <TextInput placeholder='Enter password'
                       autoCapitalize='none'
                       autoCorrect={false}
                       secureTextEntry={true}
                       textContentType='password'
                       value={password}
                       style={styles.input} onChangeText={(pass) => setPassword(pass)}/>
            <TextInput/>
            <TouchableOpacity style={styles.button}
                              onPress={handleLog}
            >
                <Text style={styles.text}>Log in with {email}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: '60%',
        backgroundColor: 'white'
    },
    button: {
        height: 50,
        borderWidth: 2,
        backgroundColor: 'red',
        width: '60%',
        borderRadius: 10,
        alignSelf: "center",
        justifyContent: "center"
    },
    input: {
        backgroundColor: '#f1f1f1',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        margin: 10,
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center"
    }
})
