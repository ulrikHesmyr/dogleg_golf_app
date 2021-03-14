import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
// Imported Screens
import WelcomeScreen from "../screens/WelcomeScreen";
import Auth from "../screens/Auth";


const AuthStack = createStackNavigator();

// First Launch
// SET HAS LAUNCHED FOR WELCOME SCREEN

function AuthStackNavigator() {
    return(
        <AuthStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <AuthStack.Screen name={'Welcome'} component={WelcomeScreen}/>
            <AuthStack.Screen name={'Auth'} component={Auth} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator;