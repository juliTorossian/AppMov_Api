import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function ButtonClick( props ) {

    const noFile = '../assets/Imagen_no_disponible.png';

    return (
        <View style={styles.container}>
            {
                props.sourceImg !== '' ? (
                    <Image
                        style={styles.logo}
                        source={{uri: props.sourceImg}}
                    />
                ) : (
                    <Image
                        style={styles.logo}
                        source={require(noFile)}
                    />
                )
            }
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
});