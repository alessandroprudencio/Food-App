import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("screen")
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import All from './All'
import Menu from './Menu'
import Popular from './TopFive'

export default TabBar = ({ navigation }) => {
    return (
        <View style={styles.tabbar}>
            <ScrollableTabView renderTabBar={() => <DefaultTabBar style={{ borderWidth: 0 }} />} tabBarTextStyle={{ fontSize: 15, color: "black" }} tabBarUnderlineStyle={{ backgroundColor: "#ff9a47" }} initialPage={0}>
                <All navigation={navigation} tabLabel="Todos" />
                <Menu navigation={navigation} tabLabel="Menu" />
                <Popular navigation={navigation} tabLabel="Top 5" />
            </ScrollableTabView>
        </View>
    )
}

const styles = StyleSheet.create({
    tabbar: {
        flex: 1,
        marginTop: width * 0.35,
        paddingHorizontal: 20,
    },
})