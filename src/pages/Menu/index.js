import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function Menu() {
    return (
        <View>
            {/* <HamburgerMenu /> */}
            {/* <MenuLateral /> */}
            {/* <Avatar /> */}
            {/* <AlterarAvatar /> */}
            {/* <Text>Olá, {user.name}</Text> */}
            <Text>Olá, <b>Marlon</b></Text>
            {/* Lista de Opções */}
            <Logo />
        </View>
    ); 
};

