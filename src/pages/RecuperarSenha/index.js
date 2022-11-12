import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function RecuperarSenha({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            
            <View>
                <Text>Enviaremos um email com a recuperação da senha</Text>
            </View>
            <View style={{ margin: 8, alignItems: "center" }}>
                <Logo width={146} />
            </View>
        </View>
    );
};

