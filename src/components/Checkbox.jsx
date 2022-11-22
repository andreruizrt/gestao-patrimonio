import { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../globals';

export default function Checkbox({ size = 5, selected = false }) {
    const [checked, setChecked] = useState(selected);

    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={() => setChecked(!checked)}>
            <Image style={{ width: size, height: size }} source={checked ? require("../../assets/icons/icon_checkbox_checked.png")
                : require("../../assets/icons/icon_checkbox_unchecked.png")} />
        </TouchableOpacity>
    );
}