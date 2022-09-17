import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Logo from '../../common/Logo';

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Logo />
            </View>
        );
    }
}

