import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import logo from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import alianca1 from '../assets/alianca1.png'
import alianca2 from '../assets/alianca2.png'
import anel1 from '../assets/anel1.png'
import anel2 from '../assets/anel2.jpg'
import anel3 from '../assets/anel3.png'
import brinco3 from '../assets/brinco3.jpeg'
import colar2 from '../assets/colar2.png'
import pulseira2 from '../assets/pulseira2.png'
import pulseira3 from '../assets/pulseira3.png'

export default function Sobre(props) {
    const { navigation } = props
    return(
        <ScrollView>
            <View style={styles.containerProdutos}>

                <View style={styles.containerHeader}>
                    <StatusBar />
                    <Image source={logo} style={styles.logo}></Image>
                </View>

                <Text style={styles.texto1}> 
                    Nossos Produtos
                </Text>
                
                <View style={styles.containerProds}>
                    <View style={styles.boxProduto}>
                       <Image source={alianca1} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Aliança em Ouro Cravejada</Text>
                       <Text style={styles.textoProduto}>R$ 2.500,00</Text>
                    </View>
                    <View style={styles.boxProduto}>
                       <Image source={alianca2} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Aliança em Ouro Rose</Text>
                       <Text style={styles.textoProduto}>R$ 2.200,00</Text>
                    </View>
                    <View style={styles.boxProduto}>
                       <Image source={anel1} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Anel em Prata Cravejado</Text>
                       <Text style={styles.textoProduto}>R$ 1.200,00</Text>
                    </View>
                    <View style={styles.boxProduto}>
                       <Image source={anel2} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Anel em Prata Realeza</Text>
                       <Text style={styles.textoProduto}>R$ 1.500,00</Text>
                    </View>
                    <View style={styles.boxProduto}>
                       <Image source={anel3} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Anel em Prata Esmeralda</Text>
                       <Text style={styles.textoProduto}>R$ 1.800,00</Text>
                    </View>
                    <View style={styles.boxProduto}>
                       <Image source={brinco3} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Brinco em Prata Cascata</Text>
                       <Text style={styles.textoProduto}>R$ 900,00</Text>
                    </View>
                    <View style={styles.boxProduto}>
                       <Image source={colar2} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Colar em Prata Girassol</Text>
                       <Text style={styles.textoProduto}>R$ 900,00</Text>
                    </View>
                    <View style={styles.boxProduto}>
                       <Image source={pulseira2} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Pulseira Ouro Branco e Rubi</Text>
                       <Text style={styles.textoProduto}>R$ 1.500,00</Text>
                    </View> 
                    <View style={styles.boxProduto}>
                       <Image source={pulseira3} style={styles.produto} ></Image> 
                       <Text style={styles.textoProduto}>Pulseira em Ouro Folhas</Text>
                       <Text style={styles.textoProduto}>R$ 1.100,00</Text>
                    </View> 
                </View>

                <View style={styles.footer}>
                    <Image source={logo2} style={styles.logo2}></Image>
                </View>

            </View>  
        </ScrollView>
         
       
    )
}

const styles = StyleSheet.create({
    containerProdutos: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerHeader: {
        backgroundColor: '#f7d0bc',
        width: 500,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 180,
        height: 150,
        marginTop: 20,
        marginBottom: 10
    },
    botao: {
        backgroundColor: "#fff",
        width: 60,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    texto1: {
        margin: 40,
        marginBottom: 40,
        fontSize: 22,
        fontFamily: 'serif'
    },
    produto: {
        width: 200,
        height: 200
    },
    containerProds: {
        width: 500,
        alignItems: "center",
        justifyContent: "center",
    },
    boxProduto: {
        borderWidth: 1,
        padding: 30,
        borderColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 20
    },
    textoProduto: {
        textAlign: 'center',
        fontFamily: 'serif',
        fontSize: 15
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