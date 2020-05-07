import React from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import foodMenu from '../../services/foodMenu'

export default Menu = ({ navigation }) => {
    return (
        <View style={styles.menu}>
            <FlatList
                data={foodMenu}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={[styles.category, { color: item.color }]}>{item.category}</Text>
                        <View style={[styles.item, { backgroundColor: item.color }]}>
                            <FlatList
                                data={item.foods}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View style={styles.separator} />}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                                        <View style={styles.item_category}>
                                            <Image resizeMode="cover" source={item.image} style={styles.image} />
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    category: {
        fontSize: 18,
        fontWeight: "bold",
    },
    item: {
        marginTop: 10,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    item_category: {
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
    separator: {
        width: 10,
        height: 20
    }
})