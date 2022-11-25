import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import Logo from '../../common/Logo';

import Avatar from '../../components/Avatar';
import Slider from '../../components/Slider';

import styles from './style';

export default function Menu({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                {/* <HamburgerMenu /> */}
                {/* <MenuLateral /> */}

                <Avatar />
            </View>

            <Slider navigation={navigation} />

            <View style={{ alignSelf: 'center' }}>
                <Logo width={146} />
            </View>
        </View>
    );
};

