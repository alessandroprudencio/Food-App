import React from 'react'
import { TextInput, View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default Search = ({ data_temp, search, setValueData }) => {

    const searchText = (text) => setValueData(data_temp.filter(item => item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())), text)

    return (
        <View style={styles.section}>
            <TextInput value={search} onChangeText={(text) => searchText(text)} placeholder="Buscar..." style={styles.search} />
            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Ionicons onPress={() => searchText('')} name="ios-close" color="gray" size={23} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: "#edeaea",
        marginBottom: 10
    },
    search: {
        flex: 1,
        marginLeft: 10
    }
})