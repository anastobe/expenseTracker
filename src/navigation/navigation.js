import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home.screen'
import Icon from 'react-native-vector-icons/Ionicons'
import ChartScreen from '../screens/Home/ChartScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-home'} size={25} color={color} />
//           }
//         }}
//       />
     
//     </Tab.Navigator>
//   )
// }

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="ChartScreen"
          options={{ headerShown: false }}
          component={ChartScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />


        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
