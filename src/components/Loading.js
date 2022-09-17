import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Logo from '../common/Logo';
import { colors } from '../globals';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Logo />
            <StatusBar style="auto" />
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
