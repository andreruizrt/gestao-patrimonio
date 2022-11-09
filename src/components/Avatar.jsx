import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import AlterarAvatar from './AlterarAvatar';

import { colors } from '../globals';

export default function Avatar() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/icons/profile_picture_example.png")} />
            <AlterarAvatar  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
    },
    image: {
        borderRadius: 6
    }

});
