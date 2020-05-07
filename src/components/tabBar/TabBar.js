import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("screen")
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import All from '../tabBar/All'
import Menu from '../tabBar/Menu'
import Popular from '../tabBar/Popular'

export default TabBar = ({ navigation }) => {
    return (
        <View style={styles.tabbar}>
            <ScrollableTabView renderTabBar={() => <DefaultTabBar style={{ borderWidth: 0 }} />} tabBarTextStyle={{ fontSize: 15 }} tabBarUnderlineStyle={{ backgroundColor: "#09244A" }} initialPage={0}>
                <All navigation={navigation} tabLabel="Todos" />
                <Menu navigation={navigation} tabLabel="Menu" />
                <Popular tabLabel="Melhores" />
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