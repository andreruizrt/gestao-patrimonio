import React, { Component, useState } from 'react'
import { Animated, View, StyleSheet, ScrollView, FlatList } from 'react-native'

import Item from './Item';

import { colors, metrics } from '../globals'

const deviceWidth = metrics.screenWidth;
const FIXED_BAR_WIDTH = 120
const BAR_SPACE = 10

const MENU_OPTIONS = [
    {
        key: "Cadastrar Colaborador",
        icon: require("../../assets/icons/icon_user_plus.png"),
        page: "CadastrarColaborador"
    },
    {
        key: "Cadastrar Patrimônio",
        icon: require("../../assets/icons/icon_carrinho.png"),
        page: "CadastrarPatrimonio"
    },
    {
        key: "Atualizar Patrimônio",
        icon: require("../../assets/icons/icon_flecha.png"),
        page: "AtualizarPatrimonio"
    },
    {
        key: "Gerar Relatório",
        icon: require("../../assets/icons/icon_relatorio.png"),
        page: "GerarRelatorio"
    },
    {
        key: "Banco de dados",
        icon: require("../../assets/icons/icon_database.png"),
        page: "BancoDeDados"
    },
]

export default class Slider extends Component {

    numItems = MENU_OPTIONS.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    render() {

        let iconArray = []
        let barArray = []

        MENU_OPTIONS.forEach((item, i) => {

            console.log(item, i)

            const thisImage = (
                <View style={styles.itemContainer}>
                    <Item
                        item={item}
                        onPress={() => {
                            // setSelectedId(item.key)
                            // navigation.navigate(item.page)
                            console.log(item.page)
                        }}
                    />
                </View>
            )

            iconArray.push(thisImage)

            const scrollBarVal = this.animVal.interpolate({
                inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
                outputRange: [-this.itemWidth, this.itemWidth],
                extrapolate: 'clamp',
            })

            const thisBar = (
                <View
                    key={`bar${i}`}
                    style={[
                        styles.track,
                        {
                            width: this.itemWidth,
                            marginLeft: i === 0 ? 0 : BAR_SPACE,
                        },
                    ]}
                >
                    <Animated.View
                        style={[
                            styles.bar,
                            {
                                width: this.itemWidth,
                                transform: [
                                    { translateX: scrollBarVal },
                                ],
                            },
                        ]}
                    />
                </View>
            )

            barArray.push(thisBar)
        })

        return (
            <View
                style={styles.container}
                flex={1}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10}
                    pagingEnabled
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                        )
                    }
                >
                    {iconArray}
                </ScrollView>
                <View
                    style={styles.barContainer}
                >
                    {barArray}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    barContainer: {
        position: 'absolute',
        zIndex: 2,
        bottom: 40,
        flexDirection: 'row',
    },
    itemContainer: {
        flex: 1,
        flexWrap: 'wrap',
        width: metrics.screenWidth / 2,
        height: 160
    },
    track: {
        backgroundColor: colors.background,
        overflow: 'hidden',
        height: 20,
        borderRadius: 10,
    },
    bar: {
        backgroundColor: colors.secundary,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    item: {
        alignItems: "center",
        backgroundColor: colors.backgroundColor,
        flexGrow: 1,
        margin: 4,
        padding: 20
    }
})