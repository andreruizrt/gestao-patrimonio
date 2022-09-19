import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function Splash({ navigation }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate("Home") }}
            >
                <Logo />
            </TouchableOpacity>
        </View>
    );
}


