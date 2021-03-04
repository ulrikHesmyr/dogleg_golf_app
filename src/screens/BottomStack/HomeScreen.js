import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Imported Screens
import TextButton from "../../components/TextButton";

function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Dette er HomeScreen</Text>
            <TextButton title={'Back'} onPress={() => {navigation.navigate('Login')}} />
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

export default HomeScreen;