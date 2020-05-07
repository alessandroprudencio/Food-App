import React from 'react'
import { Text, View, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native'
const { width, height } = Dimensions.get("screen")

export default Header = () => {
    return (
        <View style={styles.header}>
            <ImageBackground source={require('../../../assets/header.png')} resizeMode="contain" style={styles.imageBackground}>
                <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/logo.png')}></Image>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        position:"absolute"
    },
    imageBackground: {
        width: width * 0.4,
        height: width * 0.4,
        alignItems: "center"
    },
    logo: {
        marginTop: 1,
        width: width * 0.39,
        height: height * 0.1
    }
})