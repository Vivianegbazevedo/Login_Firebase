import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import axios from 'axios';
import {ListItem, Avatar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function listarContatos({ navigation }) {

  const [getData, setData] = useState([]);

    useEffect(()=>{
        
        async function resgatarDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
              );
              setData(result.data);
        }
        resgatarDados();
    })

  return (
    <View>
      <ScrollView>
  {
    getData.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() => navigation.navigate('EditarContato',{nome:l.nome,
        telefone:l.telefone,
        cpf:l.cpf,
        id:l.id,
        email:l.email
        })}>
        <Avatar source={{uri: 'https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png'}} />
        <ListItem.Content>
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
      </ScrollView>
    </View>
  )

}