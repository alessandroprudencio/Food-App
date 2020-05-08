import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import allFoods from '../../../services/allFoods'
import Search from './Search'

export default All = ({ navigation }) => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState(allFoods)
    const [data_temp] = useState(allFoods)

    const setValueData = (data, text) => {
        setData(data)
        setSearch(text)
    }

    const returnRating = (ratings) => { let rating = []; for (let i = 0; i < ratings; i++) { rating.push(<Image key={i} resizeMode="cover" source={require('../../../../assets/star.png')} style={styles.image_rating} />) }; return rating; }

    return (
        <View style={styles.all}>
            <Search setValueData={setValueData} search={search} data_temp={data_temp} />
            <FlatList
                data={data}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <LinearGradient
                        colors={['#e46700', '#ff9b49']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.linearGradient}>
                        <View style={styles.image_container}>
                            <Image resizeMode="cover" style={styles.image} source={item.image} />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={styles.rating}>{returnRating(item.rating)}</View>
                            <View style={styles.price_container}>
                                <View style={styles.price}>
                                    <Text style={styles.text_price}>
                                        {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { ...item })} style={styles.button}>
                            <AntDesign name="arrowright" color="#ff9a47" size={15} />
                        </TouchableOpacity>
                    </LinearGradient>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    linearGradient: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        borderRadius: 10
    },
    image_container: {
        width: 100,
        height: 100
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 100
    },
    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    rating: {
        marginTop: 5,
        flexDirection: "row"
    },
    image_rating: {
        width: 15,
        height: 15,
    },
    separator: {
        height: 10
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    price_container: {
        flexDirection: "row",
        marginTop: 10
    },
    price: {
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
    },
    text_price: {
        color: "#c15801",
        fontWeight: "bold"
    }
})