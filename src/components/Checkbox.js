import { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../globals';

const CHECKBOX_ICON = [
    require("../../assets/icons/icon_checkbox_checked.png"),
    require("../../assets/icons/icon_checkbox_unchecked.png"),
]

export default function Checkbox({ size = 5, enabled = false }) {
    const [checked, setChecked] = useState(false);

    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={checked}>
            <Image style={{ width: size, height: size }} source={checked ? CHECKBOX_ICON[0] : CHECKBOX_ICON[1]} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    }
});
