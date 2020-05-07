import React from 'react'
import { Text, View, Image, StyleSheet, FlatList } from 'react-native'
import popularFoods from '../../services/popularFoods'

export default Popular = () => {

    const returnRating = (ratings) => { let rating = []; for (let i = 0; i < ratings; i++) { rating.push(<Image key={i} resizeMode="cover" source={require('../../../assets/star2.png')} style={styles.image_rating} />) }; return rating; }

    return (
        <View style={styles.popular}>
            <FlatList
                data={popularFoods}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => (
                    <View style={styles.separator}>

                    </View>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.rating}>{returnRating(item.rating)}</View>
                        <Text style={styles.comment}>"{item.comment}"</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    popular: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    item: {
        flex: 1,
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 100
    },
    name: {
        color: "green",
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
        marginTop: 5,
        fontSize: 13.1
    },
    separator: {
        height: 30
    }
})