import { StyleSheet, Image } from 'react-native';

export default function Logo({ width = 220 }) {
    return <Image style={[styles.logo, { width: width, height: (width - 20) / 2 }]}  source={require('../../assets/logo/logo-utfpr.png')}/>;
}

const styles = StyleSheet.create({
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
});