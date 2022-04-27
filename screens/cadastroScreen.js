import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from 'react-native';

export default function CadastroScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyApfuJ5DykCrYnnNPiAqTOtG8yRHYYQcnw",
    authDomain: "ifpe-63392.firebaseapp.com",
    projectId: "ifpe-63392",
    storageBucket: "ifpe-63392.appspot.com",
    messagingSenderId: "733562546648",
    appId: "1:733562546648:web:266ed353409712a7e7aaad"
  };

  function cadastrarUsuarioFirebase() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home")
        console.log("Usuário criado com sucesso")
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Falha ao criar usuário")
        console.log(errorMessage)
        // ..
      });
  }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
      <Text style={{marginRight: 240,fontWeight: 'bold', fontSize: 20,}}>Email</Text>
      <TextInput
        style={styles.input} 
        placeholder="Digite seu email"
        value={email}
        onChangeText={email => setEmail(email)}
      />

      <Text style={{marginRight: 240,fontWeight: 'bold', fontSize: 20,}}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={senha => setSenha(senha)}
      />

      <TouchableOpacity 
        onPress={() => {cadastrarUsuarioFirebase()}}   
        style={styles.botao}
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