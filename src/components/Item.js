import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { colors } from '../globals';

export default function Item({ item, onPress, backgroundColor = colors.backgroundColor, textColor = colors.text }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <View style={styles.menuItemContainer}>
                <Image source={item.icon} />
            </View>
            <Text style={[styles.title, textColor]}>{item.key}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuItemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: colors.secundary,
        borderRadius: 60,
    },
    item: {
        flex: 1,
        width: 140,
    },
    title: {
        alignSelf: "center"
    }
});
