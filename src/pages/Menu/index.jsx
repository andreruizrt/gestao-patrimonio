import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import Logo from '../../common/Logo';

import Avatar from '../../components/Avatar';
import Slider from '../../components/Slider';
import HorizontalSlider from '../../components/HorizontalSlider';

import styles from './style';

export default function Menu({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                {/* <HamburgerMenu /> */}
                {/* <MenuLateral /> */}

                <Avatar />
            </View>
            <View style={{ marginTop: 50, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center' }}>Olá, Marlon</Text>
                <Text>O que gostaria de fazer hoje?</Text>
            </View>

            <Slider />
            
            <View>
                <Logo width={146} />
            </View>
        </View>
    );
};

