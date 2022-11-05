import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Arrow from './Arrow';

import { colors, metrics } from '../globals';
import Checkbox from './Checkbox';

const Header = () => (
    <View>
        <View style={{ alignItems: "center" }}>
            <Text>x de y</Text>
        </View>
        <View>
            <Checkbox size={20} />
        </View>
    </View>
)

const Body = () => (
    <>
        <View>
            <Text>Descrição do Pratrimônio</Text>
            <Checkbox size={20} />
        </View>
        <View>
            <Text>Número de série</Text>
        </View>
        <View>
            <Text>EG</Text>
            <Text>1</Text>
        </View>
        <View>
            <Text>Situação</Text>
            <View>
                <Text>Ativo</Text>
            </View>
        </View>
        <View>
            <Text>Responsável</Text>
            <Text>Nome do Responsável</Text>            
        </View>
    </>
)

const Footer = () => (
    <View>

    </View>
)

export default function Card() {

    return (
        <View style={{
            flex: 1,
            margin: 15,
            borderRadius: 10,
            backgroundColor: colors.backgroundColor,
            alignItems: "center"
        }}>
            <View>
                <Header />
                <Body />
            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        height: metrics.navBarHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        padding: 10,
        borderBottomColor: "grey",
        borderBottomWidth: 1
    },
    bodyItensContainer: {
        flex: 1,
        flexDirection: "row",
    },
    cardContainer: {
        margin: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
});
