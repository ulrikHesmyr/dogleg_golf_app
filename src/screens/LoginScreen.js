import React from 'react';
import { View, StyleSheet} from 'react-native';
import {useState, createRef} from "react";

// Imported Components
import Heading from '../components/Heading';
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import TextButton from "../components/TextButton";
import Error from '../components/Error';
import Loader from '../components/Loader';

//
import AsyncStorage from '@react-native-community/async-storage';


function LoginScreen({ navigation }) {
    const [userUsername, setUserUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userUsername) {
            alert('Username');
            return;
        }
        if (!userPassword) {
            alert('Passord');
            return;
        }
        setLoading(true);
        let dataToSend = {username: userUsername, password: userPassword};
        let formBody = [];
        for (let key in dataToSend) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }

        formBody = formBody.join('&');

        fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            body: formBody,
            headers: {
                'Content-Type':
                    'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Hide Loader
                setLoading(false);
                console.log(responseJson);
                // If server response message same as Data Matched
                if (responseJson.status === 'success') {
                    AsyncStorage.setItem('user_id', responseJson.data.username);
                    console.log(responseJson.data.username);
                    navigation.replace('HomeStackNavigator');
                } else {
                    setErrortext(responseJson.msg);
                    console.log('Please check your username or password');
                }
            })
            .catch((error) => {
                //Hide Loader
                setLoading(false);
                console.error(error);
            });
    };
    return(
        <View style={styles.container}>
            <Loader loading={loading} />

            <Error error={errortext} />
            <Heading style={styles.title}>Hook</Heading>
            <Input style={styles.input}
                   placeholder={'Username'}
                   onChangeText={(UserUsername) => setUserUsername(UserUsername)}
                   returnKeyType="next"
                   onSubmitEditing={() =>
                       passwordInputRef.current &&
                       passwordInputRef.current.focus()
                   }
                   underlineColorAndroid="#f000"
                   blurOnSubmit={false}
            />
            <Input style={styles.input}
                   placeholder={'Password'}
                   secureTextEntry={true}
                   onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                   keyboardType="default"
                   ref={passwordInputRef}
                   blurOnSubmit={false}
                   underlineColorAndroid="#f000"
                   returnKeyType="next"
            />
            <FilledButton title={'Login'} style={styles.loginButton} onPress={() => {handleSubmitPress}} />
            <TextButton title={'Har du ikke bruker? Registrer deg her'} onPress={() => {navigation.navigate('Register')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 150,
    },

    title: {
        marginBottom: 32,
    },

    input: {
        marginVertical: 20,
    },

    loginButton: {
        marginVertical: 32,
    },
})

export default LoginScreen;

