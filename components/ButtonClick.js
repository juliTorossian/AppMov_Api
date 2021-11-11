import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ButtonClick( props ) {

    return (
        <TouchableOpacity 
            style = {[ styles.container ]}
            onPress={ props.onPress }
        >
            <Text 
                style = {[ styles.button ]}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#393E46',
      alignItems: "center",
    },
    button:{
      textAlign: 'center',
      alignItems: "center",
      fontSize: 22,
      fontWeight: "bold",
      backgroundColor: '#D65A31',
      padding: 10,
      margin: 10,
      width: 200,
      borderRadius: 20,
    },
  });