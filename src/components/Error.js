import React from 'react';
import { StyleSheet, Text, View } from "react-native";

function Error({error}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 1,
    },
    text: {
        color: 'red',
        fontWeight: '600',
    }

})

export default Error;