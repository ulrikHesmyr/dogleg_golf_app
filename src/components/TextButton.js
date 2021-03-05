import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";

function TextButton({title, onPress, style}) {
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding: 16,
    },
    text: {
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
    }

})

export default TextButton;