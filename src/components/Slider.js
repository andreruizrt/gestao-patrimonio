import React from 'react';
import { View, Text, Image } from 'react-native';

import { colors } from '../globals';

export default function Slider() {
    return (
        <View style={styles.container}>
            {/* <Icone></Icone> */}
           <Text>descrição componente</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        border: {
            color: "yellow"
        }
    }
});
