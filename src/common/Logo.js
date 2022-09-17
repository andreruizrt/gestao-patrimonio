import { StyleSheet, Image } from 'react-native';

export default function Logo() {
    return <Image style={styles.logo} source={require('../../assets/logo/logo-utfpr.png')}/>;
}

const styles = StyleSheet.create({
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 100,
    }
});