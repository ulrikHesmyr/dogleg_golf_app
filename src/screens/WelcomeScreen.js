import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from "react-native";
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Import Components
import Heading from '../components/Heading';
import IconButton from "../components/IconButton";

function WelcomeScreen( {navigation} ) {
    return(
        <View style={styles.container}>
            <View style={{height: "70%", width: width}}>
                <Image source={require('../assets/images/background.jpg')} style={styles.image} />
            </View>
            <View style={styles.containerInfo}>
                <Heading style={styles.heading}>Welcome</Heading>
                <Text style={{fontWeight: "200"}}>The best way to improve your game and read</Text>
                <Text style={{fontWeight: "200"}}> statics. Let`s get started!</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={{width: width, alignItems: 'center'}} onPress={() => {navigation.navigate('Auth')}}>
                    <Text style={{fontSize: 22, fontWeight: "700", color: 'white'}}>Continue</Text>
                    <IconButton name={'arrow-forward-outline'} size={25} color={'white'} style={styles.arrow}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInfo: {
        height: "20%",
        width: width,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        height: "10%",
        width: width,
        backgroundColor: '#2ED199',
        borderTopLeftRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 2,
        height: height,
        width: width,
        resizeMode: 'cover',
        borderBottomLeftRadius: 100,
    },
    heading: {
        fontWeight: "700",
        paddingBottom: 30,
    },
    arrow: {
        position: 'absolute',
        top: 0,
        right: 25,
    }
})

export default WelcomeScreen