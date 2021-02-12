import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import logo from './../assets/logo1.png'

const Header = () => {
    return (
        <View style={styles.containerHeader}>
            <Image source={logo} style={styles.logo}></Image>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        backgroundColor: '#f7d0bc',
        width: 500,
        height: 250,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 150,
        marginTop: 40
    }
})
