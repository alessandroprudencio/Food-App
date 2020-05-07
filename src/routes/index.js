import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/Home'
import Details from '../screens/Details'

const MainNavigator = createStackNavigator({
    Home,
    Details
}, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(MainNavigator)