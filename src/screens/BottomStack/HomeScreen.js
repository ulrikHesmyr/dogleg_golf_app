import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopNav from '../../components/TopNav';


function HomeScreen({ navigation }) {
    return(
        <View>
            <TopNav style={styles.container} />
            <View style={styles.container}>
                <Text>Dette er HomeScreen</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 60,
        right: 30,
    },
})

export default HomeScreen;