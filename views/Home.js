import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import logo from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import imageHome from '../assets/jewel4.jpg'
import imageHome2 from '../assets/jewel0.jpg'

export default function Home(props) {
    const { navigation } = props
    return (
        <ScrollView>
        <View style={styles.containerHome}>
            <StatusBar />
            <Image source={logo} style={styles.logo}></Image>
            
            <View>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Produtos")}>
                    <Text style={styles.textoBotao}>Clique aqui e confira nossos Produtos!</Text>
                </TouchableOpacity>

            </View>

            <View>
                <ImageBackground source={imageHome} style={styles.image}>
                </ImageBackground>
            </View>

            <View style={styles.container1}>
                <Text style={styles.textoIntro}>Joias com design único, para clientes únicos. Feitas artesanalmente sob demanda.</Text>
            </View>

            <View>
                <ImageBackground source={imageHome2} style={styles.image}>
                </ImageBackground>
            </View>

            <View style={styles.container2}>
                <Text style={styles.textoIntro2}>As nossas jóias são tão especiais quanto nossos clientes, por isso sempre as
                    confeccionamos com muito cuidado, utilizando as melhores materias primas disponíveis no mercado, desenhadas por nossos
                    excepcionais designer e feitas pelas mãos dos mais talentosos ourives.
                   </Text>
            </View>

            <View style={styles.footer}>
                <Image source={logo2} style={styles.logo2}></Image>
            </View>
      

            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerHome: {
        backgroundColor: '#f7d0bc',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    botao: {
        backgroundColor: "#474641",
        width: 500,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
    textoHome: {
        margin: 20,
        fontSize: 20,
    },
    logo: {
        width: 180,
        height: 150,
        marginTop: 20,
        marginBottom: 10
    },
    image: {
        width: 500,
        height: 200
    },
    container1: {
        backgroundColor: '#fff',
        padding: 40,
    },
    textoIntro: {
        fontFamily: 'serif',
        fontSize: 17,
        textAlign: 'center'
    },
    textoBotao: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'serif',
    
    },
    container2: {
        backgroundColor: '#fff',
        padding: 20,
    },
    textoIntro2: {
        fontFamily: 'serif',
        fontSize: 15,
        textAlign: 'center'
    },
    footer: {
        backgroundColor: '#303030',
        padding: 30,
        width: 500
    },
    logo2: {
        width: 130,
        height: 50,
        marginLeft: 50
    }
})