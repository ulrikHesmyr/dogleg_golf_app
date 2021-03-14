import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import IconButton from "./IconButton";
import Heading from "./Heading";

function TopNav({title, style, children, navigation, ...props}) {
    const data = (response) => {
        id = "response._id"
    }
    return(
        <View style={styles.navcontainer}>
            <IconButton style={styles.rightIcon} color={"white"} name={'person-circle-outline'} onPress={() => console.log("hello")} />
            <View style={styles.titleHead}>
                <Heading style={styles.title}>Home</Heading>
            </View>
            <IconButton style={styles.leftIcon} color={'white'} name={'settings-outline'} onPress={() => {navigation.navigate('SettingStack')} } />
        </View>
    )
}

const styles = StyleSheet.create({
    navcontainer: {
        backgroundColor: '#0099ff',
        borderRadius: 30,
        height: 150,
    },
    titleHead: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    leftIcon: {
        position: 'absolute',
        top: 60,
        right: 30,
    },
    rightIcon: {
        position: 'absolute',
        top: 60,
        left: 30,
    },
})

export default TopNav;