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
        paddingVertical: 28,
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
    }

})

export default Error;