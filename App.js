import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screen/HomeScreen';
import FraseMenuScreen from './screen/FraseMenuScreen';
import CapituloMenuScreen from './screen/CapituloMenuScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style = {[ styles.container ]}>
      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Frase" component={FraseMenuScreen} />
        <Drawer.Screen name="Capitulo" component={CapituloMenuScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
  },
});
