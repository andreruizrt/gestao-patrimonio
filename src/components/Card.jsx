import { validateYupSchema } from 'formik';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { colors, metrics } from '../globals';
import Checkbox from './Checkbox';

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
            <View style={{ position: 'relative', left: -95 }}>
                <Text style={{ fontSize: 13, color: 'grey' }}>Número de série</Text>
                <Text style={{ fontSize: 13, color: 'grey' }}>{numero_serie}</Text>
            </View>
            <View style={{ padding: 8, flexDirection: 'row' }}>
                <Text style={{ color: 'grey', marginRight: 250 }}>Marca</Text>
                <Text>{marca}</Text>
            </View>
            <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'grey', marginRight: 150 }}>Situação</Text>
                <View style={[styles.iconSituacao, {
                    backgroundColor: situacao ? colors.success : colors.error,
                    color: situacao  ? colors.success : colors.error
                }]}>
                    <Text>{situacao ? "Ativo" : "Desativado"}</Text>
                </View>
            </View>
            <View style={{ padding: 2, flexDirection: 'row' }}>
                <Text style={{ color: 'grey', marginRight: 80 }}>Nome do patrimônio</Text>
                <Text>{nome_patrimonio}</Text>
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
                <Header
                    selected={false}
                />
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
    iconSituacao: {
        width: 80,
        padding: 8,
        borderRadius: 15,
        paddingHorizontal: 25,
    },
});
