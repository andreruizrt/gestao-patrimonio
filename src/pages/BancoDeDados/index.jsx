
import React from 'react';
import { View, Text } from 'react-native';

import Logo from '../../common/Logo';
import Card from '../../components/Card';

import styles from './style';

export default function BancoDeDados({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <Card />
            <View style={{ margin: 8, alignItems: "center" }}>
                <Logo width={146} />
            </View>
        </View>
    );
};

