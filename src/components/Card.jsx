import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Arrow from './Arrow';

import { colors, metrics } from '../globals';
import Checkbox from './Checkbox';

// const Header = () => (
//     <View>
//         <View style={{ alignItems: "center" }}>
//             <Text>x de y</Text>
//         </View>
//         <View>
//             <Checkbox size={20} />
//         </View>
//     </View>
// )



const Header = () => (
    <View style={styles.headerContainer}>
        <Text style={{ paddingRight: 100, fontWeight: 'bold' }}>Descrição do patrimônio</Text>
        <>
            <Checkbox size={20} />
        </>
    </View>
)

const Body = () => (
    <>
        <View style={{ position: 'relative', left: -95 }}>
            <Text style={{ fontSize: 13, color: 'grey'}}>Número de série</Text>
        </View>
        <View style={{ padding: 8, flexDirection: 'row' }}>
            <Text style={{ color: 'grey', marginRight: 250 }}>EG</Text>
            <Text>1</Text>
        </View>
        <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'grey', marginRight: 150 }}>Situação</Text>
            <View style={{
                width: 80,
                padding: 8,
                borderRadius: 15,
                paddingHorizontal: 25,
                backgroundColor: 'green',
                color: 'green'
            }}>
                <Text>Ativo</Text>
            </View>
        </View>
        <View style={{ padding: 2, flexDirection: 'row' }}>
            <Text style={{ color: 'grey', marginRight: 80 }}>Responsável</Text>
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
            margin: 15,
            borderRadius: 10,
            backgroundColor: colors.backgroundColor,
            alignItems: "center"
        }}>
            <View style={styles.cardContainer}>
                <Header />
                <Body />
            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    headerContainer: {
        margin: 5,
        width: 280,
        height: metrics.navBarHeight - 35,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 1
    },
    bodyItensContainer: {
        flex: 1,
        flexDirection: "row",
    },
});
