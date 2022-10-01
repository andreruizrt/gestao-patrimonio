import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import Slider from '../../components/Slider';
import Logo from '../../common/Logo';

import styles from '../Menu/style';

export default function Menu({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                {/* <HamburgerMenu /> */}
                {/* <MenuLateral /> */}
                {/* <Avatar /> */}
                {/* <AlterarAvatar /> */}
                {/* <Text>Olá, {user.name}</Text> */}
                <Text>Olá, Marlon</Text>
                <Text>O que gostaria de fazer hoje?</Text>
            </View>

            <View>
                <Slider />
            </View>

            <View>
                <Logo width={146} />
            </View>

        </View>
    );
};

