import React, { useEffect, useState } from 'react'
import {
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Splash from './src/pages/Splash';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';

import CadastrarColaborador from './src/pages/CadastrarColaborador'
import CadastrarPatrimonio from './src/pages/CadastrarPatrimonio'
import AtualizarPatrimonio from './src/pages/AtualizarPatrimonio'
import ListaPatrimonio from './src/pages/ListaPatrimonio';
import RecuperarSenha from './src/pages/RecuperarSenha';
import GerarRelatorio from './src/pages/GerarRelatorio'
import BancoDeDados from './src/pages/BancoDeDados'

import { colors } from './src/globals';

import './src/config/firebase'
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);

  const [user, setUser] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber;
  }, []);

  if (!initializing) {
    return null;
  }

  if (!user) {
    return (
      <>
        <Login setUser={setUser} />
      </>
    )
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer
      >
        <Stack.Navigator>
          {/* <Stack.Screen name='Slider' component={Slider} /> */}
          <Stack.Screen
            name='Menu'
            component={Menu}
          />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} />

          <Stack.Screen
            name='CadastrarColaborador'
            component={CadastrarColaborador}
            options={{
              title: "Cadastrar colaborador",
              headerStyle: {
                backgroundColor: colors.secundary,
              }
            }} />
          <Stack.Screen
            name='CadastrarPatrimonio'
            component={CadastrarPatrimonio}
            options={{
              title: "Cadastrar patrimônio",
              headerStyle: {
                backgroundColor: colors.secundary,
              }
            }} />
          <Stack.Screen
            name='ListaPatrimonio'
            component={ListaPatrimonio}
            options={{
              title: "Listar patrimônios",
              headerStyle: {
                backgroundColor: colors.secundary,
              }
            }} />
          <Stack.Screen
            name='AtualizarPatrimonio'
            component={AtualizarPatrimonio}
            options={{
              title: "Atualizar patrimônios",
              headerStyle: {
                backgroundColor: colors.secundary,
              }
            }} />

          <Stack.Screen
            name='GerarRelatorio'
            component={GerarRelatorio}
            options={{
              title: "Gerar Relatórios",
              headerStyle: {
                backgroundColor: colors.secundary,
              }
            }} />
          <Stack.Screen
            name='BancoDeDados'
            component={BancoDeDados}
            options={{
              title: "Base de dados",
              headerStyle: {
                backgroundColor: colors.secundary,
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


const styles = {

};