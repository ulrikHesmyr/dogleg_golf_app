import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Imported Screens
import HomeScreen from "../screens/BottomStack/HomeScreen";


const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return(
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name={'Home'} component={HomeScreen}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigator;