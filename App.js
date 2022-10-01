import React, { useEffect, useState } from 'react'
import {
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Menu from './src/pages/Menu';

import CadastrarColaborador from './src/pages/CadastrarColaborador'
import CadastrarPatrimonio from './src/pages/CadastrarPatrimonio'
import AtualizarPatrimonio from './src/pages/AtualizarPatrimonio'
import GerarRelatorio from './src/pages/GerarRelatorio'
import BancoDeDados from './src/pages/BancoDeDados'
import RecuperarSenha from './src/pages/RecuperarSenha';
import Splash from './src/pages/Splash';
import './src/config/firebase'
import Slider from './src/components/Slider';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/globals';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);

  // function onAuthStateChanged(user) {
  //   setUser(user);

  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // }

  // useEffect(() => {
  //   // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   // return subscriber;
  // }, []);

  // if (initializing) {
  //   return null;
  // }

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
            name='Home'
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: colors.header
              }
            }}
          />
          <Stack.Screen name='Menu' component={Menu} />
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} />
          <Stack.Screen name='CadastrarColaborador' component={CadastrarColaborador} />
          <Stack.Screen name='CadastrarPatrimonio' component={CadastrarPatrimonio} />
          <Stack.Screen name='AtualizarPatrimonio' component={AtualizarPatrimonio} />
          <Stack.Screen name='GerarRelatorio' component={GerarRelatorio} />
          <Stack.Screen name='BancoDeDados' component={BancoDeDados} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}