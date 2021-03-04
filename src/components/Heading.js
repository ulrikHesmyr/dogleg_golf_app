import React from 'react';
import { Text, StyleSheet } from 'react-native';

function Heading({children, style, ...props}) {
    return(
        <Text{...props} style={[styles.title, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: 'black'
    }
})
export default Heading;