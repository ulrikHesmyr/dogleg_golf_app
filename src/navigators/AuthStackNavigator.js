import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Imported Screens
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/BottomStack/HomeScreen";


const AuthStack = createStackNavigator();

function AuthStackNavigator() {
    return(
        <AuthStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <AuthStack.Screen name={'Login'} component={LoginScreen}/>
            <AuthStack.Screen name={'Register'} component={RegisterScreen}/>
            <AuthStack.Screen name={'Home'} component={HomeScreen}/>
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator;