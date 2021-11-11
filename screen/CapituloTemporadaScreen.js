import axios from 'axios';
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import ButtonClick from '../components/ButtonClick';
import CapituloItemList from '../components/CapituloItemList';

const CAP_LIST = [
  {
    capTemporada: 1,
    capNumero: 1,
    capNombre: 'Cap1',
    capDesc: 'primer Capitulo'
  },
  {
    capTemporada: 1,
    capNumero: 2,
    capNombre: 'Cap2',
    capDesc: 'segundo Capitulo'
  },
  {
    capTemporada: 1,
    capNumero: 3,
    capNombre: 'Cap3',
    capDesc: 'tercer Capitulo'
  },
  {
    capTemporada: 1,
    capNumero: 4,
    capNombre: 'Cap4',
    capDesc: 'cuarto Capitulo'
  },
  {
    capTemporada: 1,
    capNumero: 5,
    capNombre: 'Cap5',
    capDesc: 'quinto Capitulo'
  },
  {
    capTemporada: 1,
    capNumero: 6,
    capNombre: 'Cap6',
    capDesc: 'sexto Capitulo'
  }
]

export default function CapituloTemporadaScreen() {

    const [idTemp, setIdtemp] = useState(0);
    const [capitulo, setCapitulo] = useState({ nombre: '', desc: '', temp: 0, cap: 0});
    const [capitulos, setCapitulos] = useState(CAP_LIST)

    

    const api = () => {
        if (idTemp !== 0 && idTemp < 8){
            var url = "http://julitorossian.pythonanywhere.com/capitulos/temporada/" + idTemp;
            axios({ 
                "method": "GET",
                "url": url
            }).then((response) => {
              // console.log(response['data'])
              setCapitulos(null);
              setCapitulo({nombre: response['data'][0]['capNombre'], desc: response['data'][0]['capDesc'], temp: response['data'][0]['capTemporada'], cap: response['data'][0]['capNumero']})
              setCapitulos(response['data']);
            }).catch((error) => {
                console.log(error);
            })    
        }else{
            console.log('id Temporada erronea');
        }
    }

  return(
    <View style = {[ styles.container ]}>
      <Text style = {[ styles.title ]}>Ingrese una Temporada</Text>
      <TextInput 
        style= {[ styles.input ]}
        onChangeText={setIdtemp}
        placeholder='nro Temporada < 8'
        keyboardType='numeric'
      />
      <ButtonClick text='Obtener Capitulos'  onPress={api}/>
      <View>
        <FlatList
          style={[styles.list]}
          data={capitulos}
          renderItem={({item}) => <CapituloItemList cap={item}/>}
          keyExtractor={item=>item.capNumero}
        />
      </View>
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
  },
  list:{
  }
});