import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Imported Screens
import TextButton from "../../components/TextButton";

function SettingsScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Dette er SettingsScreen</Text>
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

export default SettingsScreen;