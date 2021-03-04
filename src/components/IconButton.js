import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function IconButton({ name, style, onPress}) {
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name={name} size={25}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default IconButton;