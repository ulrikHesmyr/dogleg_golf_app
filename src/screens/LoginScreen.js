import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
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
    const [dataError, setDataError] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setDataError('');
        if (!userUsername) {
            alert('Type in a username');
            return;
        }
        if (!userPassword) {
            alert('Type in a passord');
            return;
        }
        setLoading(true);

        fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(
                {
                    username: userUsername,
                    password: userPassword,
                }
            ),
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }).then(response => {


            // Se heeeeeeeer

            // Appen logger inn selv om den ikke er auth
            // Det må fikses


            // Tester Kode
            if(!response.status === 'success'){
                console.log('Ingen success')
            }else {
                console.log(response.status)
            }
            return response.json().then(responseData => {
                setLoading(false);
                setDataError(responseData.error); // Finn ut en måte og bare hente error

                // If server response message same as Data Matched
                if (!response.status === 'success') {
                    console.log('Check your username or password')
                } else {
                    console.log(response.json._id, 'Test her')
                    //AsyncStorage.setItem('user_id', responseData); // Finn ut en måte og bare hente token
                    console.log(responseData);
                    navigation.replace('TabStack');
                }
            })
                .catch((error) => {
                    //Hide Loader
                    setLoading(false);
                    console.error(error);
                });
        })
    };
    return(
        <View style={styles.container}>
            <Loader loading={loading} />
            <Heading style={styles.title}>Hook</Heading>
            <Input style={styles.input}
                   placeholder={'Username'}
                   onChangeText={(userUsername) => setUserUsername(userUsername)}
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
            <Error error={dataError} />
            <FilledButton title={'Login'} style={styles.loginButton} onPress={() => {handleSubmitPress()}} />
            <TextButton title={'Har du ikke bruker? Registrer deg her'} onPress={() => {navigation.navigate('Register')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
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

