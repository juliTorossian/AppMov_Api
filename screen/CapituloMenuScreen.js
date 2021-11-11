import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CapituloRandomScreen from './CapituloRandomScreen';
import CapituloTemporadaScreen from './CapituloTemporadaScreen';

const Tab = createBottomTabNavigator();

export default function CapituloMenuScreen() {
  return (
    <Tab.Navigator 
    initialRouteName="Random"
    screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Random'){
            iconName = focused ? 'ios-shuffle' : 'ios-shuffle-outline';
        }else if (route.name === 'CTemporada'){
            iconName = focused ? 'ios-albums' : 'ios-albums-outline';
        }

        return <Ionicons name = {iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#D65A31',
        tabBarInactiveTintColor: 'gray',
    })

    }
    tabBarOptions={{
        activeBackgroundColor: "#222831",
        inactiveBackgroundColor: "#393E46"
    }}
    >
    
    <Tab.Screen name="Random" component={CapituloRandomScreen} options={{title: 'Capitulo Random'}} />
    <Tab.Screen name="CTemporada" component={CapituloTemporadaScreen} options={{title: 'Por Temporada' }} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
  },
});
