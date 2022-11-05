import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import AlterarAvatar from './AlterarAvatar';

import { colors } from '../globals';

export default function Avatar({ item, backgroundColor = colors.backgroundColor, textColor = colors.text }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/icons/profile_picture_example.png")} />

            <AlterarAvatar />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
    },

});
