import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function GerarRelatorio() {

    return (
        <View>
            <Logo />
            <Text>Gerar Relatório</Text>
        </View>
    );
};

