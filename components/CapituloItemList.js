import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function CapituloItemList({cap}) {
    return (
        <View style={[ styles.container ]}> 
            <Text style={[ styles.title ]}>{cap.capTemporada}x{cap.capNumero}</Text>
            <Text style={[ styles.subTitle ]}>Nombre: {cap.capNombre}</Text>
            <Text style={[ styles.subTitle ]}>{cap.capDesc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 5,
    },
    title: {
        color: '#EEEEEE',
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 10,
    },
    subTitle: {
        color: '#EEEEEE',
        fontSize: 14,
        paddingLeft: 30,
    }
});
