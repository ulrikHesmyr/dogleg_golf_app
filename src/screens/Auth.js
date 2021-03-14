import React, { useState, useRef } from "react";
import {StyleSheet, ImageBackground, Text, View, Dimensions, Image, TouchableOpacity,} from "react-native";
import Modal from 'react-native-modal';

// For Background
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

// Import Components
import FilledButton from "../components/FilledButton";
import Input from "../components/Input";
import Loader from "../components/Loader";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import Error from "../components/Error";

function Auth({navigation}) {

    // Modal Constants
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    const showRegister = () => setRegisterVisible(true)
    const hideRegister = () => setRegisterVisible(false)
    const showLogin = () => setLoginVisible(true)
    const hideLogin = () => setLoginVisible(false)

    // Global
    const [loading, setLoading] = useState(false);
    const [dataError, setDataError] = useState('');

    const trueLoading = () => setLoading(true)
    const falseLoading = () => setLoading(false)



    // Register API Constants

    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerRepeat, setRegisterRepeat] = useState('');

    const emailRegisterRef = useRef(null);
    const passwordRegisterRef = useRef(null);
    const repeatRegisterRef = useRef(null);

    const handleRegisterPress = () => {
        setDataError('');
        if (!registerUsername) {
            alert('Type in a username');
            return;
        }
        if(!registerEmail) {
            alert('Type in a email');
            return;
        }
        if (!registerPassword) {
            alert('Type in a passord');
            return;
        }
        if(!registerRepeat) {
            alert('Type in a password again');
            return;
        }

        trueLoading()
        axios
            .post('http://localhost:3000/api/user/register', {
                username: registerUsername,
                email: registerEmail,
                password: registerPassword,
                repeatPassword: registerRepeat,
            })
            .then(function (response) {
                // handle success
                const storage = AsyncStorage.setItem('user_id', response.data._id);
                hideRegister()
                navigation.navigate('TabStack')
                console.log(storage)
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                // handle error
                setDataError(error.message);
                console.log(error)
            }).then(falseLoading);
    }


    // ------------------------------------------------------------------------------------ //

    // Login API Constants

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const passwordLoginRef = useRef(null)

    const handleLoginPress = () => {
        setDataError('');
        if (!loginUsername) {
            alert('Type in a username');
            return;
        }
        if (!loginPassword) {
            alert('Type in a passord');
            return;
        }

        trueLoading()

        // Den funker, men får ikke resonsen jeg vil ha som error og _id eller username
        axios
            .post('http://localhost:3000/api/user/login', {
                username: loginUsername,
                password: loginPassword,
            })
            .then(function (response) {
                // handle success
                AsyncStorage.setItem('user_id', response.data._id);
                hideLogin()
                navigation.navigate('TabStack')
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                setDataError('Username or password is wrong');
                console.log('error = ',error)
            }).then(falseLoading);
    }

    return (
        <>
            <Loader loading={loading} />
            <ImageBackground source={require("../assets/images/welcome.jpg")} style={styles.backgroundImage}>
                    <Modal
                        animationType={'slide'}
                        visible={registerVisible}
                        onDismiss={hideRegister}
                        onRequestClose={hideRegister}
                        onBackdropPress={hideRegister}
                        style={[styles.modalContainer, {top: (height/2) - 200}]}
                    >
                        <View style={styles.headingContainer}>
                            <View style={styles.heading}>
                                <Text style={styles.headingText}>New{"\n"}Account</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/images/welcome.jpg')} style={styles.image}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.inputButton}
                                name={'person-outline'}
                                label={'Username'}
                                placeholder={'Username'}
                                underlineColorAndroid="#f000"
                                onChangeText={(registerUsername) => setRegisterUsername(registerUsername) }
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    emailRegisterRef.current &&
                                    emailRegisterRef.current.focus()
                                }}
                                blurOnSubmit={false}

                            />
                            <Input
                                style={styles.inputButton}
                                name={'mail-outline'}
                                label={'Email'}
                                placeholder={'Email'}
                                underlineColorAndroid="#f000"
                                onChangeText={(registerEmail) => setRegisterEmail(registerEmail)}
                                KeyBoardType="email-address"
                                ref={emailRegisterRef}
                                returnKeyType="next"
                                onSubmitEditing={() =>{
                                    passwordRegisterRef.current &&
                                    passwordRegisterRef.current.focus();
                                }}
                                blurOnSubmit={false}

                            />
                            <Input
                                style={styles.inputButton}
                                name={'key-outline'}
                                label={'Password'}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                onChangeText={(registerPassword) => setRegisterPassword(registerPassword)}
                                underlineColorAndroid="#f000"
                                ref={passwordRegisterRef}
                                returnKeyType="next"
                                onSubmitEditing={() =>{
                                    repeatRegisterRef.current &&
                                    repeatRegisterRef.current.focus();
                                }}
                                blurOnSubmit={false}

                            />
                            <Input
                                style={styles.inputButton}
                                name={'key-outline'}
                                label={'Repeat Password'}
                                placeholder={'Repeat Password'}
                                secureTextEntry={true}
                                onChangeText={(registerRepeat) => setRegisterRepeat(registerRepeat)}
                                underlineColorAndroid="#f000"
                                ref={repeatRegisterRef}
                                returnKeyType="next"
                                onSubmitEditing={'hei'}
                                blurOnSubmit={false}

                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <FilledButton style={[styles.Button, {backgroundColor: '#2ED199'}]} title={'Register'} onPress={handleRegisterPress} />
                        </View>
                    </Modal>


                {/* ---------------------------------------------------------------------------------------------------------------------- */}

                {/* This is the login modal */}

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={loginVisible}
                    onDismiss={hideLogin}
                    onRequestClose={hideLogin}
                    onBackdropPress={hideLogin}
                    deviceWidth={width}
                    deviceHeight={height}
                    style={[styles.modalContainer, {top: (height/2) - 100}]}
                >
                    <View style={styles.headingContainer}>
                        <View style={styles.heading}>
                            <Text style={styles.headingText}>Welcome{"\n"}Back</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/images/profilesander.jpg')} style={styles.image}/>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                            style={styles.inputButton}
                            name={'person-outline'}
                            label={'Username'}
                            placeholder={'Username'}
                            onChangeText={(loginUsername) => setLoginUsername(loginUsername)}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordLoginRef.current &&
                                passwordLoginRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                        <Input
                            style={styles.inputButton}
                            name={'key-outline'}
                            label={'Password'}
                            placeholder={'Password'}
                            onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
                            secureTextEntry={true}
                            keyboardType="default"
                            ref={passwordLoginRef}
                            blurOnSubmit={false}
                            underlineColorAndroid="#f000"
                            returnKeyType="next"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Error error={dataError} />
                        <FilledButton style={[styles.Button, {backgroundColor: "#2ED199"}]} title={'Login'} onPress={handleLoginPress} />
                    </View>
                </Modal>
                <View style={styles.container}>
                    <Text style={styles.logo}>Dogleg</Text>
                    <FilledButton title={'Login'} style={{marginVertical: 15, backgroundColor: '#2ED199'}} onPress={() => showLogin()}/>
                    <FilledButton title={'SignUp'} style={{marginVertical: 15, backgroundColor: '#2ED199'}} onPress={() => showRegister()}/>
                </View>
            </ImageBackground>
        </>
            );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: height,
        width: width,
    },
    image: {
        borderRadius: height / 2,
        borderColor: 'black',
        height: 90,
        width: 90,
    },
    imageContainer: {
        height: 100,
        width: width/2,
        paddingHorizontal: 40,
    },
    headingContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    heading: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width/2,
    },
    headingText: {
        fontWeight: "600",
        fontSize: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 40,
        marginVertical: 50,
    },
    modalContainer: {
        flex: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: (height/2) + 200,
        borderRadius: 30,
        position: 'absolute',
        paddingVertical: 40,
        margin: 0,
        maxWidth: width,
        bottom: 0,
        right: 0,
        left: 0,
    },
    inputContainer: {
        width: width,
        paddingHorizontal: 30,
    },
    buttonContainer: {
        width: width,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputButton: {
        width: width - 150,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    logo: {
        flex: 1,
        fontWeight: "700",
        fontSize: 60,
        color: 'rgba(60,67,52,0.44)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
})

export default Auth;