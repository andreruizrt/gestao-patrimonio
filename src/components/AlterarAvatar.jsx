import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { colors } from '../globals';

export default function AlterarAvatar() {
    return (
        <TouchableOpacity>
            <View style={[styles.container, { position: 'relative', top: -20, left: -10}]}>
                <Image style={styles.image} source={require("../../assets/icons/icon_camera.png")} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        padding: 6,
        borderRadius: 20,
        backgroundColor: colors.third,
    },
    image: {
        alignSelf: 'center'
    }
});
