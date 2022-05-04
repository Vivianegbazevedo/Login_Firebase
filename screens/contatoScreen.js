import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function contatoScreen({ route, navigation }) {

    const [getNome, setNome] = useState("");
    const [getCpf, setCpf] = useState("");
    const [getTelefone, setTelefone] = useState("");

    async function inserirDados(){
      console.log("dados")
         await axios.post('http://professornilson.com/testeservico/clientes', {
           nome: getNome,
           telefone: getTelefone,
           cpf: getCpf
           
          
          }).then(function (response) {
               setNome('');
               setCpf('');
               setTelefone(''); 
               showMessage({
                   message: "Registro Cadastrado com sucesso",
                   type: "success",
                  }); 
                   navigation.navigate("ListaContatos")
                   console.log(response);
          }).catch(function (error) {
                showMessage({
                   message: "Algum erro aconteceu!",
                   type: "info",
                });
            console.log(error);
      
      });
      
    } 
    

  return (
    <View style={styles.container}>
      <Text style={{marginRight: 240,fontWeight: 'bold', fontSize: 20,}}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNome(text)}
        placeholder="Digite seu nome"
      />

      <Text style={{marginRight: 258,fontWeight: 'bold', fontSize: 20,}}>CPF</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCpf(text)}
        placeholder="Digite seu cpf"
      />
      <Text style={{marginRight: 213,fontWeight: 'bold', fontSize: 20,}}>Telefone</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={text => setTelefone(text)} 
        placeholder="Digite seu telefone"
      />

      <TouchableOpacity    
        style={styles.botao}
        onPress={() => inserirDados()}
      >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3e5f5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
});