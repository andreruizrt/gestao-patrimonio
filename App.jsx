import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './src/pages/Menu';
import Login from './src/pages/Login';

import CadastrarColaborador from './src/pages/CadastrarColaborador';
import CadastrarPatrimonio from './src/pages/CadastrarPatrimonio';
import AtualizarPatrimonio from './src/pages/AtualizarPatrimonio';
import ListaPatrimonio from './src/pages/ListaPatrimonio';
import RecuperarSenha from './src/pages/RecuperarSenha';
import GerarRelatorio from './src/pages/GerarRelatorio';

import { colors } from './src/globals';

import { getAuth } from "firebase/auth";
import firebaseApp from './src/config/firebase';
import BaseDeDados from './src/pages/BaseDeDados';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);

  const [user, setUser] = useState([]);

  function onAuthStateChanged(user) {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    async () => {
      const auth = getAuth(firebaseApp);
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      console.log(subscriber)
      setUser(subscriber);
    }
  }, [user]);

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
              yheaderStyle: {
                backgroundColor: colors.header,
              }
            }} />
          <Stack.Screen
            name='CadastrarPatrimonio'
            component={CadastrarPatrimonio}
            options={{
              title: "Cadastrar patrimônio",
              headerStyle: {
                backgroundColor: colors.header,
              }
            }} />
          <Stack.Screen
            name='ListaPatrimonio'
            component={ListaPatrimonio}
            options={{
              title: "Atualizar patrimônios",
              headerStyle: {
                backgroundColor: colors.header,
              }
            }} />
          <Stack.Screen
            name='AtualizarPatrimonio'
            component={AtualizarPatrimonio}
            options={{
              title: "Atualizar patrimônios",
              headerStyle: {
                backgroundColor: colors.header,
              }
            }} />

          <Stack.Screen
            name='GerarRelatorio'
            component={GerarRelatorio}
            options={{
              title: "Gerar Relatórios",
              headerStyle: {
                backgroundColor: colors.header,
              }
            }} />
          <Stack.Screen
            name='BaseDeDados'
            component={BaseDeDados}
            options={{
              title: "Base de dados",
              headerStyle: {
                backgroundColor: colors.header,
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}