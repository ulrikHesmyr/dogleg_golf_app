// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Imported Screens
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import HomeStackNavigator from './src/navigators/HomeStackNavigator';
import TabStackNavigator from "./src/navigators/TabStackNavigator";
import lightTheme from "./src/themes/light";
import darkTheme from "./src/themes/dark";
import {AuthContext} from "./src/contexts/AuthContext";

const RootStack = createStackNavigator();

function App() {

    const auth = React.useMemo(() => ({
        login: () => {
            console.log('login');
            },

        logout: () => {
            console.log('logout');
            },

        register: () => {
            console.log('register');
            },
    }),
        []
    );

    return(
        <AuthContext.Provider value={auth}>
            <NavigationContainer theme={lightTheme}>
                <RootStack.Navigator screenOptions={{
                    headerShown: false,
                }} >
                    <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
                    <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator}/>
                    <RootStack.Screen name={'TabStack'} component={TabStackNavigator} />
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default App;