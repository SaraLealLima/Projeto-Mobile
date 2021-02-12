import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const Input = ({ type, placeholder, ...props }) => {
    return (
        <View style={styles.containerInput} >
            <TextInput style={styles.input} keyboardType='default' placeholder={placeholder} />
            <TextInput style={styles.input} keyboardType='default' placeholder={placeholder} secureTextEntry={true} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    containerInput: {
        flex: 2,
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 16,
        backgroundColor: '#f7d0bc',
    },
    input: {
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 80,
        marginTop: 10
    }
})