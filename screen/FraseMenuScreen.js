import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FraseScreen from './FraseScreen';
import FrasePersonajeScreen from './FrasePersonajeScreen';

const Tab = createBottomTabNavigator();

export default function FraseMenuScreen() {
  return (
    <Tab.Navigator 
    initialRouteName="Random"
    screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Random'){
            iconName = focused ? 'ios-shuffle' : 'ios-shuffle-outline';
        }else if (route.name === 'FPersonaje'){
            iconName = focused ? 'ios-person' : 'ios-person-outline';
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
    
    <Tab.Screen name="Random" component={FraseScreen} options={{title: 'Frase Random'}} />
    <Tab.Screen name="FPersonaje" component={FrasePersonajeScreen} options={{title: 'Por Id' }} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
  },
});
