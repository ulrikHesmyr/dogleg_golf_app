import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Imported Screens
import HomeScreen from "../screens/BottomStack/HomeScreen";
import SettingsScreen from "../screens/BottomStack/SettingsScreen";

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return(
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name={'Home'} component={HomeScreen}/>
            <HomeStack.Screen name={'Settings'} component={SettingsScreen}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigator;