// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Imported Screens
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import HomeStackNavigator from './src/navigators/HomeStackNavigator';
import lightTheme from "./src/themes/light";
import darkTheme from "./src/themes/dark";

const RootStack = createStackNavigator();

function App() {
    return(
        <NavigationContainer theme={lightTheme}>
            <RootStack.Navigator screenOptions={{
                headerShown: false,
            }} >
                <RootStack.Screen name={'RootStack'} component={AuthStackNavigator}/>
                <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default App;