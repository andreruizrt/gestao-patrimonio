import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function BancoDeDados({ navigation }) {

    return (
        <View>
            <Logo />
            <Text>Banco De Dados</Text>
        </View>
    );
};

