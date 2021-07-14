import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, MyListStack, ExploreStack, SimulCastStack, ProfileStack } from './Stack'
import Icon from 'react-native-vector-icons/FontAwesome5';

const tab = createBottomTabNavigator()

const Tab = () => {

    return (
        <tab.Navigator
            tabBarOptions={{
                scrollEnabled: true,
                showIcon: true,
                activeTintColor: '#FF5C00',
                inactiveTintColor: 'white',
                labelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
                style: {
                    backgroundColor: '#213945',
                    height: "7%"
                },

            }}
        >
            <tab.Screen
                name="Home" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='home'
                            color={focused ? '#FF5C00' : 'white'}
                            size={20}
                        />
                    ),
                }}

            />
            <tab.Screen name="My list" component={MyListStack}
                options={{
                    tabBarLabel: 'Mis listas',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='bookmark'
                            color={focused ? '#FF5C00' : 'white'}
                            size={20}
                        />
                    ),
                }}
            />
            <tab.Screen name="Explore" component={ExploreStack}
                options={{
                    tabBarLabel: 'Explorar',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='border-all'
                            color={focused ? '#FF5C00' : 'white'}
                            size={20}
                        />
                    ),
                }}
            />
            <tab.Screen name="SimulCast" component={SimulCastStack}
                options={{
                    tabBarLabel: 'Simulcasts',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='meteor'
                            color={focused ? '#FF5C00' : 'white'}
                            size={20}
                        />
                    ),
                }}
            />
            <tab.Screen name="Profile" component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='user-alt'
                            color={focused ? '#FF5C00' : 'white'}
                            size={20}
                        />
                    ),
                }}
            />
        </tab.Navigator>
    )
}

export default Tab