import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function AnalyzeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Dette er AnalyzeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AnalyzeScreen;