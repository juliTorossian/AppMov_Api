import axios from 'axios';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import ButtonClick from '../components/ButtonClick';
import ImagePersonaje from '../components/ImagePersonaje';

export default function FrasePersonajeScreen() {

    const [idFrase, setIdFrase] = useState(0);
    const [frase, setFrase] = useState('');
    const [personaje, setpersonaje] = useState({nombre: '', image: ''});

    const api = () => {
        if (idFrase !== 0){
            var url = "http://julitorossian.pythonanywhere.com/frase/" + idFrase;
            axios({ 
                "method": "GET",
                "url": url
            }).then((response) => {
                // console.log(response['data'])
                setFrase(response['data'][0]['frase'])
                setpersonaje({nombre: response['data'][0]['personaje'], image: response['data'][0]['imagen']})
            }).catch((error) => {
                console.log(error);
            })    
        }else{
            console.log('id Frase erronea');
        }
    }

  return(
    <View style = {[ styles.container ]}>
        <ScrollView>
            <Text style = {[ styles.title ]}>Ingrese una id y busque la frase</Text>
            <TextInput 
                style= {[ styles.input ]}
                onChangeText={setIdFrase}
                placeholder='id Frase'
                keyboardType='numeric'
            />
            <ButtonClick text='Obtener Frase'  onPress={api}/>
            <View>
                <Text style = {[ styles.subTitle ]}>Frase:</Text>
                <Text style = {[ styles.texto ]}> "{frase}" </Text>
                <Text style = {[ styles.subTitle ]}>Personaje:</Text>
                <Text style = {[ styles.texto ]}>{personaje.nombre}</Text>
                <ImagePersonaje sourceImg={personaje.image !== 'No File' ? personaje.image : ''} />
            </View>
        </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
    flex: 1,
    paddingBottom: 10
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
  },
  texto:{
    margin: 10,
    padding: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  input:{
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  }
});