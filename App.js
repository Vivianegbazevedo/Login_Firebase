import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './screens/homeScreen';
import cadastroScreen from './screens/cadastroScreen';
import contatoScreen from './screens/contatoScreen';
import editarContato from './screens/editarContatoScreen';
import listaContatosScreen from './screens/listaContatosScreen';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={homeScreen} options={{ title: 'Tela Inicial'}} />
        <Stack.Screen name="Cadastro" component={cadastroScreen} options={{title: 'Usuário'}}/>
        <Stack.Screen name="Contato" component={contatoScreen} options={{title: 'Contato'}}/>
        <Stack.Screen name="EditarContato" component={editarContato} options={{ title: 'Editar'}}/>
        <Stack.Screen name="ListaContatos" component={listaContatosScreen} 
        options={({ navigation }) => {
          return {
            title: "Lista de Contatos",
            headerRight: () => (
              <Button
                type='clear'
                icon={<Icon name="add" size={25}/>}
                onPress={() => navigation.navigate('Contato')}
              />
            )
          }
        } }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

