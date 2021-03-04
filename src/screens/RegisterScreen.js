import React from 'react';
import { View, StyleSheet} from 'react-native';

// Imported Screens
import Heading from '../components/Heading';
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import TextButton from "../components/TextButton";
import IconButton from "../components/IconButton";
import Error from "../components/Error";

function RegisterScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <IconButton style={styles.closeIcon} name={'arrow-back-outline'} onPress={() => {navigation.pop()} } />
            <Heading style={styles.title}>Hook</Heading>
            <Error error={''} />
            <Input style={styles.input} placeholder={'Username'}/>
            <Input style={styles.input} placeholder={'Email'}/>
            <Input style={styles.input} placeholder={'Password'} secureTextEntry/>
            <Input style={styles.input} placeholder={'Repeat Password'} secureTextEntry/>
            <FilledButton style={styles.button} title={'Login'} onPress={() => {navigation.navigate('Home')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        marginBottom: 32,
    },

    input: {
        marginVertical: 15,
    },

    button: {
        marginVertical: 25,
    },

    closeIcon: {
        position: 'absolute',
        top: 70,
        left: 20,
    }
})

export default RegisterScreen;