import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen(){
  return (
    <View style = {[ styles.container ]}>
      <Text style = {[ styles.title ]}>
        Aplicacion de los Simposon
      </Text>
      <Text style = {[ styles.subTitle ]}>
        En esta aplicacion encontraras dos funciones principales
      </Text>
      <Text style = {[ styles.subTitle ]}>
        Frases, Una forma de obtener una frase iconica de la serie.
      </Text>
      <Text style = {[ styles.subTitle ]}>
        Capitulos, Si no sabes que capitulo de la serie ver, podes usar esta app para que te recomiende un capitulo random (hasta la temp nro 7).
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#393E46',
      flex: 1,
      alignItems: "center",
    },
    title: {
      color: '#EEEEEE',
      fontSize: 19,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop: 10,
      padding: 15,
    },
    subTitle: {
      color: '#EEEEEE',
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 4,
      marginLeft: 10,
      padding: 5,
    }
  });