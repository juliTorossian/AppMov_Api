import axios from 'axios';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ButtonClick from '../components/ButtonClick';

export default function FraseScreen() {

  const [capitulo, setCapitulo] = useState({ nombre: '', desc: '', temp: 0, cap: 0});

  const api = () => {
    axios({
      "method": "GET",
      "url": "http://julitorossian.pythonanywhere.com/capitulo/random"
    }).then((response) => {
      setCapitulo({nombre: response['data'][0]['capNombre'], desc: response['data'][0]['capDesc'], temp: response['data'][0]['capTemporada'], cap: response['data'][0]['capNumero']})
    }).catch((error) => {
      console.log(error);
    })
  }

  return(
    <View style = {[ styles.container ]}>
      <Text style = {[ styles.title ]}>Click debajo para obtener un caputulo</Text>
      <TouchableOpacity onPress={api}>
        <ButtonClick text='Obtener Capitulo' onPress={api} />
      </TouchableOpacity>
      <View>
        <Text style = {[ styles.subTitle ]}>Numero:</Text>
        <Text style = {[ styles.texto ]}>{capitulo.temp}x{capitulo.cap}</Text>
        <Text style = {[ styles.subTitle ]}>Nombre:</Text>
        <Text style = {[ styles.texto ]}>{capitulo.nombre}</Text>
        <Text style = {[ styles.subTitle ]}>Descripcion:</Text>
        <Text style = {[ styles.texto ]}>{capitulo.desc}</Text>
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
  texto:{
    margin: 10,
    padding: 10,
    fontSize: 16,
    fontStyle: 'italic',
  }
});