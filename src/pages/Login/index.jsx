import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Logo from '../../common/Logo';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import styles from './style';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  async onLogin() {
    const { username, password } = this.state;
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

      })
      .catch((error) => {
        Alert.alert("FALHA", "Falha ao logar com o email!");
        console.log("Login >> Erro ao logar firebase [ERROR_CODE]", error.code, "[MESSAGE]", error.message);
      });
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

      </View >
    );
  }
}