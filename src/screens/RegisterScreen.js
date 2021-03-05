import React, {useState, createRef} from 'react';
import { View, StyleSheet} from 'react-native';

// Imported Screens
import Heading from '../components/Heading';
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import Success from '../components/Success';
import IconButton from "../components/IconButton";
import Error from "../components/Error";
import AsyncStorage from "@react-native-community/async-storage";
import dismissKeyboard from "react-native-web/dist/modules/dismissKeyboard";

function RegisterScreen({ navigation }) {
    const [userUsername, setUserUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRepeat, setUserRepeat] = useState('');
    const [loading, setLoading] = useState(false);
    const [dataError, setDataError] = useState('');
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

    const emailInputRef = createRef()
    const passwordInputRef = createRef();
    const repeatInputRef = createRef()

    const handleSubmitPress = () => {
        setDataError('');
        if (!userUsername) {
            alert('Type in a username');
            return;
        }
        if(!userEmail) {
            alert('Type in a email');
            return;
        }
        if (!userPassword) {
            alert('Type in a passord');
            return;
        }
        if(!userRepeat) {
            alert('Type in a password again');
            return;
        }

        setLoading(true);

        fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            body: JSON.stringify(
                {
                    username: userUsername,
                    email: userEmail,
                    password: userPassword,
                    repeatPassword: userRepeat,
                }
            ),
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
            .then((response) => response.text())
            .then((responseData) => {
                setLoading(false);
                setDataError(responseData);
                // If server response message same as Data Matched
                if (responseData.status === 'success') {
                    AsyncStorage.setItem('user_id', responseData.data.username);
                    setIsRegistraionSuccess(true);
//                    navigation.replace('HomeStack');
                } else {
                    console.log('Somthing is wrong');
                    console.log(responseData.status)
                }
            })
            .catch((error) => {
                //Hide Loader
                setLoading(false);
                console.error(error);
            });
    };
    if (isRegistraionSuccess) {
        <Success />
    }

    return(
        <View style={styles.container}>
            <IconButton style={styles.closeIcon} name={'arrow-back-outline'} onPress={() => {navigation.pop()} } />
            <Heading style={styles.title}>Hook</Heading>
            <Input style={styles.input}
                   placeholder={'Username'}
                   onChangeText={(userUsername) => setUserUsername(userUsername) }
                   returnKeyType="next"
                   onSubmitEditing={() => {
                       emailInputRef.current &&
                       emailInputRef.current.focus()
                   }}
                   blurOnSubmit={false}
            />
            <Input style={styles.input}
                   placeholder={'Email'}
                   onChangeText={(userEmail) => setUserEmail(userEmail)}
                   underlineColorAndroid="#f000"
                   KeyBoardType="email-address"
                   ref={emailInputRef}
                   returnKeyType="next"
                   onSubmitEditing={() =>{
                       passwordInputRef.current &&
                       passwordInputRef.current.focus();
                   }}
                   blurOnSubmit={false}

            />
            <Input style={styles.input}
                   placeholder={'Password'}
                   secureTextEntry={true}
                   onChangeText={(userPassword) => setUserPassword(userPassword)}
                   underlineColorAndroid="#f000"
                   ref={passwordInputRef}
                   returnKeyType="next"
                   onSubmitEditing={() =>{
                       repeatInputRef.current &&
                       repeatInputRef.current.focus();
                   }}
                   blurOnSubmit={false}

            />
            <Input style={styles.input}
                   placeholder={'Repeat Password'}
                   secureTextEntry={true}
                   onChangeText={(userRepeat) => setUserRepeat(userRepeat)}
                   underlineColorAndroid="#f000"
                   ref={repeatInputRef}
                   returnKeyType="next"
                   onSubmitEditing={dismissKeyboard}
                   blurOnSubmit={false}
            />
            <Error error={dataError} />
            <FilledButton style={styles.button} title={'Register'} onPress={handleSubmitPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        marginBottom: 32,
    },

    input: {
        marginVertical: 15,
    },

    button: {
        marginVertical: 25,
    },

    closeIcon: {
        position: 'absolute',
        top: 70,
        left: 20,
    }
})

export default RegisterScreen;