import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import { colors, metrics } from '../globals';

export default function Input({ value, width = 100, label = "", onChangeText }) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={[styles.input, {width: width }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        height: 76,
        display: "flex",
        position: "relative",
        backgroundColor: colors.background
    },
    label: {
        height: 20,
        position: "relative",
        top: 6,
        left: 8,
        color: "#242220"
    },
    input: {
        height: metrics.inputHeight,
        padding: metrics.inputPadding,
        backgroundColor: colors.inputBackground,
        borderRadius: 12,
        zIndex: -1
    }
});

