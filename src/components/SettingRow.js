import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";

function SettingRow({ style, title, onPress}) {
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderColor: 'black',
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }

})

export default SettingRow;