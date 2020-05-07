import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../../components/home/Header'
import TabBar from '../../components/home/tabBar/TabBar'

export default Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <TabBar navigation={navigation} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5
    }
})