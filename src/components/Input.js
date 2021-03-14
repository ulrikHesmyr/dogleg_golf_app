import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, View, Text, Dimensions} from 'react-native';
import IconButton from "./IconButton";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Input({style, label, name, ref, ...props}) {
    return(
        <View style={styles.container}>
            <View style={styles.labelForm}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.inputContainer}>
                <IconButton name={name} style={{ marginVertical: 6 }}/>
                <TextInput {...props} ref={ref} style={[style, styles.input]}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    inputContainer: {
        flexDirection: 'row'
    },
    input: {
        padding: 10,
    },
    label: {
        marginHorizontal: -10,
        fontWeight: "300",
        },
    labelForm: {
        flexDirection: 'row',
        marginHorizontal: 10,
    }
})
export default forwardRef(Input);