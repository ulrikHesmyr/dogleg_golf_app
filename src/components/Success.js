import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";

function Success({ navigation }) {
    return(
        <View
            style={{
                flex: 1,
                backgroundColor: '#307ecc',
                justifyContent: 'center',
            }}>
            <Image
                source={'img'}
                style={{
                    height: 150,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                }}
            />
            <Text style={styles.successTextStyle}>
                Registration Successful
            </Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.pop()}>
                <Text style={styles.buttonTextStyle}>Login Now</Text>
            </TouchableOpacity>
        </View>
    )}

const styles = StyleSheet.create({
    successTextStyle: {
        color: 'red',
    },

    buttonStyle: {
        color: 'black',
    },

    buttonTextStyle: {
        color: 'white'
    }
})

export default Success;
