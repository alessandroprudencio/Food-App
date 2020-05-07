import React from 'react'
import { StyleSheet, Text, Image, View, ImageBackground, Dimensions, StatusBar } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

const { height } = Dimensions.get('screen')

export default Details = ({ navigation }) => {

    function returnIngredients(array) {
        // return array.map((item) => item = item).join(',').substring(0, (array.lenght - 1).concat(' e ' + 'ovos')
    }

    return (
        <View style={styles.details}>
            <StatusBar barStyle="light-content" />
            <ImageBackground resizeMode="stretch" style={styles.image_background} source={require('../../../assets/header_detail.png')}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={navigation.state.params.image} />
                </View>
                <View style={styles.back}>
                    <Ionicons name="ios-arrow-round-back" size={35} color="white" onPress={() => navigation.goBack()} />
                </View>
            </ImageBackground>
            <View style={styles.footer}>
                <View style={styles.status}>
                    <Text style={styles.available}>DISPONÍVEL</Text>
                </View>
                <Text style={styles.text_price}>{navigation.state.params.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                <Text style={styles.text_name}>{navigation.state.params.name.toUpperCase()}</Text>
                <Text style={styles.text_ingredients}>Ingredientes: {returnIngredients(navigation.state.params.ingredients)}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    details: {
        flex: 1,
    },
    image_background: {
        flex: 1,
        alignItems: "center",
    },
    footer: {
        flex: 1,
        paddingHorizontal: 40
    },
    image_container: {
        height: height * 0.5 * 0.5,
        width: height * 0.5 * 0.5,
        marginTop: height * 0.5 * 0.5 / 3,
    },
    image: {
        width: "100%",
        height: "100%",
        borderWidth: 3,
        borderColor: "white",
        borderRadius: height * 0.5 * 0.5 / 2
    },
    back: {
        position: "absolute",
        left: 0,
        marginTop: 30,
        marginLeft: 15
    },
    status: {
        maxWidth: 120,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 3,
        borderColor: 'green'
    },
    available: {
        color: "green"
    },
    text_price: {
        color: "green",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 20
    },
    text_name: {
        color: "#3e3c3e",
        fontWeight: "bold",
        fontSize: 40,
        marginTop: 5
    },
    text_ingredients: {
        color: 'gray',
        marginTop: 10
    }
})