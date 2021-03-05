import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

// Imported Screens
import HomeScreen from "../screens/BottomStack/HomeScreen";
import SettingsScreen from "../screens/BottomStack/SettingsScreen";
import ScoreScreen from "../screens/BottomStack/ScoreScreen";


const TabStack = createBottomTabNavigator();

function TabStackNavigator() {
    return(
        <TabStack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home'){
                        iconName = focused ? 'home' : 'home';
                    }else if(route.name == 'Score'){
                        iconName = focused ? 'ios-list' : 'ios-list';
                    }else if(route.name === 'Settings'){
                        iconName = focused ? 'settings' : 'settings';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activateTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <TabStack.Screen name='Home' component={HomeScreen} />
            <TabStack.Screen name='Score' component={ScoreScreen} />
            <TabStack.Screen name='Settings' component={SettingsScreen} />
        </TabStack.Navigator>
    )
}

export default TabStackNavigator;