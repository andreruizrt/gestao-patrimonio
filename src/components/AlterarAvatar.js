import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import { colors } from '../globals';

export default function AlterarAvatar({ item, backgroundColor = colors.backgroundColor, textColor = colors.text }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/icons/icon_camera.png")} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: colors.third,
    },
    image: {
        alignSelf: 'center',        
    }
});
