import { View, StyleSheet } from 'react-native';

import Logo from '../common/Logo';
import { colors } from '../globals';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    }
});
