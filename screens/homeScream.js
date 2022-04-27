import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function HomeScreen({ navigation }) {

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

  function loginFirebase() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("conectado")
        const user = userCredential.user;
        navigation.navigate("ListaContatos")
        
        // ...
      })
      .catch((error) => {
        console.log("não conectado")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    return (
        <View style={styles.container}>
    
          <Image
            source={require('../assets/logo_usuario3.png')}
            style={{width: 150, height: 150, borderRadius: 100}}
          />
          <StatusBar style="auto" />
    
          <Text style={{marginRight: 240,fontWeight: 'bold',fontSize: 20}}>Login</Text>
          <TextInput
            style={styles.input} 
            placeholder="Digite seu email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
    
          <Text style={{marginRight: 240,fontWeight: 'bold',fontSize: 20}}>Senha</Text>
          <TextInput
            style={styles.input} 
            secureTextEntry={true} 
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={senha => setSenha(senha)}
          />
    
          <TouchableOpacity title='Login' 
            onPress={() => {loginFirebase()}}
            style={styles.botao}
          >
            <Text style={styles.texto_botao}>Login</Text>
          </TouchableOpacity>
            <StatusBar style="auto" />
           
          <TouchableOpacity  onPress={() => navigation.navigate('Cadastro')}
            
            style={styles.botao_Cadastro}
          >
            <Text style={styles.texto_botao}>Cadastre-se</Text>
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
        color: "#1E90FF",
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao_Cadastro: {
        width: 300,
        height: 42,
        backgroundColor: '#d50000',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto_botao: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#fff'
    }
});