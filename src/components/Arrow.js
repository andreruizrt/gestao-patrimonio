import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { colors } from '../globals';

const ARROW_COLOR_ICON = [
    {
        color: "red",
        icon: require("../../assets/icons/icon_angle_left.png")
    },
    {
        color: "green",
        icon: require("../../assets/icons/icon_angle_right.png")
    }
];

export default function Arrow({ onPress, direction }) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={[styles.menuItemContainer, { borderColor: direction == "left" ? ARROW_COLOR_ICON.at(0).color : ARROW_COLOR_ICON.at(1).color }]}>
                <Image source={direction == "left" ? ARROW_COLOR_ICON.at(0).icon : ARROW_COLOR_ICON.at(1).icon} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuItemContainer: {
        width: 80,
        height: 60,
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
