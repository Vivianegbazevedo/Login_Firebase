import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import axios from 'axios';

export default function editarContato({ route, navigation }) {

    const [getId, setId] = useState("");
    const [getNome, setNome] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getCpf, setCpf] = useState("");
    const [getTelefone, setTelefone] = useState("");

  useEffect(() => {
    if (route.params) {
        const {id} = route.params
        const {nome} = route.params
        const {email} = route.params
        const {cpf} = route.params
        const {telefone} = route.params
      
        setId(id)
        setNome(nome)
        setEmail(email)
        setCpf(cpf)
        setTelefone(telefone)
         
    }
}, [])

  function alterarDados(){

    axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
        cpf: getCpf
        }).then(function (response) {
          navigation.navigate("ListaContatos")
          console.log(response);
        }).catch(function (error) {
          console.log(error);
    
    });
    
  }

  function excluirDados(){

    axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
    
      .then(function (response) {
        navigation.navigate("ListaContatos")
        console.log(response);
      }).catch(function (error) {
        console.log(error);
    
    });
    
  }


  return (
    <View style={styles.container}>
      <Text style={{marginRight: 240,fontWeight: 'bold', fontSize: 20,}}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNome(text)}
        value={getNome}
        placeholder="Digite seu nome"
      />

      <Text style={{marginRight: 240,fontWeight: 'bold', fontSize: 20,}}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={getEmail}
        placeholder="Digite seu email"
      />

      <Text style={{marginRight: 258,fontWeight: 'bold', fontSize: 20,}}>CPF</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCpf(text)}
        value={getCpf}
        placeholder="Digite seu cpf"
      />

      <Text style={{marginRight: 213,fontWeight: 'bold', fontSize: 20,}}>Telefone</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setTelefone(text)} 
        value={getTelefone}
        placeholder="Digite seu telefone"
      />

      <TouchableOpacity
        onPress={() => alterarDados()}    
        style={{
          width: 300,
          height: 42,
          backgroundColor: '#3498db',
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => excluirDados()}   
        style={{
          width: 300,
          height: 42,
          backgroundColor: '#d50000',
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Excluir</Text>
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
    }
});