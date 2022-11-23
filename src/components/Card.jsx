import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Checkbox from './Checkbox';

import { colors, metrics } from '../globals';

const Header = (selected = false) => (
    <View style={styles.headerContainer}>
        <Text style={{ paddingRight: 100, fontWeight: 'bold' }}>Descrição do patrimônio</Text>
        <>
            <Checkbox size={20} selected={selected} />
        </>
    </View>
)

const Body = (values) => {
    const { numero_serie, marca, Situacao, nome_patrimonio } = values.values.item;
    const situacao = Situacao.situacao === 'Ativado'

    return (
        <>
            <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'grey', fontSize: 13, marginRight: 100 }}>Número de série</Text>
                <View style={styles.rightTextContainer}>
                    <Text style={{ fontSize: 13, color: 'grey' }}>{numero_serie}</Text>
                </View>
            </View>
            <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'grey', marginRight: 150 }}>Marca</Text>
                <View style={styles.rightTextContainer}>
                    <Text>{marca}</Text>
                </View>
            </View>
            <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'grey', marginRight: 150 }}>Situação</Text>
                <View style={[styles.rightTextContainer, {
                    backgroundColor: situacao ? colors.success : colors.error,
                    color: situacao ? colors.success : colors.error,
                    borderRadius: 15,
                }]}>
                    <Text>{situacao ? "Ativo" : "Desativado"}</Text>
                </View>
            </View>
            <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'grey', marginRight: 80 }}>Nome do patrimônio</Text>
                <View style={styles.rightTextContainer}>
                    <Text>{nome_patrimonio}</Text>
                </View>
            </View>
        </>
    )
}

const Footer = () => (
    <View>

    </View>
)

export default function Card(values) {

    return (
        <View style={{
            margin: 15,
            borderRadius: 10,
            backgroundColor: colors.background,
            alignItems: "center"
        }}>
            <View style={styles.cardContainer}>
                <Body
                    values={values}
                />
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
    rightTextContainer: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 8,
    },
});
