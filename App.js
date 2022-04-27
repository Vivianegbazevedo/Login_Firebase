import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScream'
import CadastroScreen from './screens/cadastroScreen';
import CadastroContatoScreen from './screens/cadastroContatoScreen';
import EditarContato from './screens/editarContatoScreen';
import ListaContatosScreen from './screens/listaContatosScreen';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Inicial'}} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{title: 'Usuário'}}/>
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} options={{title: 'Contato'}}/>
        <Stack.Screen name="EditarContato" component={EditarContato} options={{ title: 'Contato'}}/>
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} 
        options={({ navigation }) => {
          return {
            title: "Lista de Contatos",
            headerRight: () => (
              <Button
                type='clear'
                icon={<Icon name="add" size={25}/>}
                onPress={() => navigation.navigate('CadastroContato')}
              />
            )
          }
        } }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

