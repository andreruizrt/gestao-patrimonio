import React, { Component, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  async onLogin () {
    {/* TODO: chamar navigation aqui, para executar o login */ }
    const { username, password } = this.state;
    const { setUser } = this.props;
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.log('ERRO');
      console.error(errorMessage);
    });
    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.loginAndIconContainer}>
          <View style={styles.iconAndText}>
            <Text style={styles.loginText} >Login</Text>
            <Image source={require('../../../assets/icons/User.png')} />
          </View>
        </View>

        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <View style={styles.loginContainer}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Insira seu email institucional'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Insira sua senha'}
            secureTextEntry={true}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.onLogin.bind(this)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* TODO: chamar navigation aqui, para ir para página de recuperar senha */}
        <TouchableOpacity style={styles.recuperarSenha}>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>

      </View>
    );
  }
}