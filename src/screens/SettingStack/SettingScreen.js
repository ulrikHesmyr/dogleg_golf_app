import React from 'react';
import {View, StyleSheet} from "react-native";

// Import Components
import SettingRow from "../../components/SettingRow";

// Import Screens

function SettingScreen({navigation}) {
    return(
        <View style={styles.container}>
            <SettingRow title={'Logout'} style={styles.rowButton} onPress={() => {navigation.navigate('AuthStack')}} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowButton: {
        padding: 20,
    }

})

export default SettingScreen