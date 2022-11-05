import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { colors } from '../globals';

export default function Arrow({ onPress, direction }) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={[styles.menuItemContainer, { borderColor: direction == "left" ? "red" : "green" }]}>
                <Image source={direction == "left" ?  require("../../assets/icons/icon_angle_left.png") : require("../../assets/icons/icon_angle_right.png")} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuItemContainer: {
        width: 80,
        height: 60,
        backgroundColor: colors.backgroundColor,
        marginHorizontal: 5,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
    },
    item: {
        flex: 1,
        height: 100
    }
});
