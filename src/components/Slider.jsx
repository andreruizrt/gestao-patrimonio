import React, { Component } from 'react'
import { Animated, View, StyleSheet, ScrollView } from 'react-native'

import Item from './Item';

import { metrics } from '../globals'

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
        page: "ListaPatrimonio"
    },
    {
        key: "Gerar Relatório",
        icon: require("../../assets/icons/icon_relatorio.png"),
        page: "GerarRelatorio"
    },
    {
        key: "Base de dados",
        icon: require("../../assets/icons/icon_database.png"),
        page: "BaseDeDados"
    },
]

export default class Slider extends Component {

    numItems = MENU_OPTIONS.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    render() {
        var iconArray = []
        let barArray = []

        const { navigation } = this.props;


        MENU_OPTIONS.forEach((item, i) => {

            const thisImage = (
                <View style={styles.itemContainer}>
                    <Item
                        item={item}
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate(item.page)
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
                    style={[styles.track, { width: this.itemWidth, marginLeft: i === 0 ? 0 : BAR_SPACE }]}
                >
                    <Animated.View
                        style={[
                            styles.bar, {
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
            <>
                <ScrollView
                    styles={styles.list}
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
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={styles.group}>
                            {iconArray[0]}
                            {iconArray[1]}
                        </View>
                        <View style={styles.group}>
                            {iconArray[2]}
                            {iconArray[3]}
                        </View>
                    </View>
                    <View style={styles.group}>
                        {iconArray[4]}
                        <View style={styles.itemListavel}></View>
                    </View>
                </ScrollView>
                <View
                    style={styles.barContainer}
                >
                    {barArray}
                </View>
            </>

        )
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 20,
        width: metrics.screenWidth / 2 - 10,
        height: metrics.screenHeight / 4 - 15
    },
    itemListavel: {
        width: metrics.screenWidth,
        height: metrics.screenHeight - 365
    },
    track: {

    },
    bar: {

    },
    item: {
        height: 30,
    },
    list: {
        height: 310,
    },
    group: {
        flex: 1,
        flexDirection: 'row'
    }
})