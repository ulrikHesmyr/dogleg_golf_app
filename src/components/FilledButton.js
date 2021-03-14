import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";

function FilledButton({ style, title, onPress}) {
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
        height: 60,
        borderRadius: 40,
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }

})

export default FilledButton;