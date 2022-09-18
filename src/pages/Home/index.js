import React, { useState, useEffect } from 'react';

import { View, Text, Button } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function Home({ navigation }) {

    return (
        <View>
            <Logo />
            <Text>HomeScreen</Text>
            <Button onPress={() => { navigation.navigate("Login") }} title="Login">
            </Button>
            <Button onPress={() => { navigation.navigate("Menu") }} title="Menu">
            </Button>
        </View>
    );
};

