import React from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import popularFoods from '../../../services/topFive'

export default Popular = ({ navigation }) => {

    const returnRating = (ratings) => { let rating = []; for (let i = 0; i < ratings; i++) { rating.push(<Image key={i} resizeMode="cover" source={require('../../../../assets/star2.png')} style={styles.image_rating} />) }; return rating; }

    return (
        <FlatList
            data={popularFoods}
            contentContainerStyle={styles.list}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', { ...item })}>
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.rating}>{returnRating(item.rating)}</View>
                        <Text style={styles.comment}>"{item.comment}"</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        alignItems: "center",
        marginTop: 10,

    },
    item: {
        flex: 1,
        maxWidth: Dimensions.get('window').width / 2,
        paddingHorizontal: 15,
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: "#ccc",
        borderRadius: 100
    },
    name: {
        color: "black",
        fontWeight: "bold",
    },
    rating: {
        marginTop: 5,
        flexDirection: "row"
    },
    image_rating: {
        width: 15,
        height: 15,
    },
    comment: {
        fontStyle: "italic",
        textAlign: "left",
        marginTop: 5,
        fontSize: 13.1
    },
    separator: {
        height: 30
    }
})