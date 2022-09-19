import React, { useState, useEffect } from 'react';

import { View, Text, Button } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function RecuperarSenha({ navigation }) {

    return (
        <View>
            <Logo />
            <Text>Recuperar Senha</Text>
        </View>
    );
};

