import axios from 'axios';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ButtonClick from '../components/ButtonClick';
import ImagePersonaje from '../components/ImagePersonaje';

export default function FraseScreen() {

  const [frase, setFrase] = useState('');
  const [personaje, setpersonaje] = useState({nombre: '', image: ''});

  const api = () => {
    axios({
      "method": "GET",
    //   "url": "http://192.168.0.172:3000/frase"
      "url": "http://julitorossian.pythonanywhere.com/frase"
    }).then((response) => {
      setFrase(response['data'][0]['frase'])
      setpersonaje({nombre: response['data'][0]['personaje'], image: response['data'][0]['imagen']})
    }).catch((error) => {
      console.log(error);
    })
  }

  return(
    <View style = {[ styles.container ]}>
      <Text style = {[ styles.title ]}>Click debajo para obtener una frase</Text>
        <ButtonClick text='Obtener Frase'  onPress={api}/>
      <View>
        <Text style = {[ styles.subTitle ]}>Frase:</Text>
        <Text style = {[ styles.texto ]}> "{frase}" </Text>
        <Text style = {[ styles.subTitle ]}>Personaje:</Text>
        <Text style = {[ styles.texto ]}>{personaje.nombre}</Text>
        <ImagePersonaje sourceImg={personaje.image !== 'No File' ? personaje.image : ''} />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
    flex: 1,
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
  }
});