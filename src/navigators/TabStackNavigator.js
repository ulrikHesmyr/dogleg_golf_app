import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

// Imported Screens
import HomeScreen from "../screens/BottomStack/HomeScreen";
import PlayScreen from "../screens/BottomStack/PlayScreen";
import AnalyzeScreen from "../screens/BottomStack/AnalyzeScreen";
//import ProfileScreen from "../screens/BottomStack/ProfileScreen";


const TabStack = createBottomTabNavigator();

function TabStackNavigator() {
    return(
        <TabStack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Home'){
                        iconName = focused ? 'home-outline' : 'home-outline';
                    }else if(route.name === 'Play'){
                        iconName = focused ? 'golf-outline' : 'golf-outline';
                    }else if(route.name === 'Analyze'){
                        iconName = focused ? 'analytics-outline' : 'analytics-outline';
                    }

                    {/*else if(route.name === 'Profile') {
                        iconName = focused ? 'account-circle' : 'account-circle';}*/}

                    // Return the icon in navbar
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activateTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <TabStack.Screen name='Home' component={HomeScreen} />
            <TabStack.Screen name='Play' component={PlayScreen} />
            <TabStack.Screen name='Analyze' component={AnalyzeScreen} />
            {/*<TabStack.Screen name='Profile' component={ProfileScreen} />*/}
        </TabStack.Navigator>
    )
}

export default TabStackNavigator;