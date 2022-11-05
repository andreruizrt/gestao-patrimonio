import React, { Component } from 'react'
import { Animated, View, StyleSheet, ScrollView, FlatList } from 'react-native'

import Item from './Item'

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


const ItemListavel = ({ item }) => (
    <View style={styles.itemContainer}>
        <Item
            item={item}
            style={styles.item}
            onPress={() => {
                // setSelectedId(item.key)
                // navigation.navigate(item.page)
                console.log(item.page)
            }}
        />
    </View>
);

export default class HorizontalSlider extends Component {

    numItems = MENU_OPTIONS.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    render() {

        const renderItemListavel = ({ item }) => (
            <ItemListavel item={item} />
        );

        let barArray = []

        MENU_OPTIONS.forEach((item, i) => {

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
            <View
                style={styles.container}
            >
                <ScrollView
                    collapsable={false}
                    style={styles.list}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10}
                    pagingEnabled
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                        )
                    }
                >
                    <FlatList
                        style={styles.list}
                        data={MENU_OPTIONS}
                        numColumns={2}
                        renderItem={renderItemListavel}
                        keyExtractor={item => item.key}
                    />
                    {/* {iconArray} */}
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
        height: 310,

        borderColor: 'gray',
        borderWidth: 2,
    },
    barContainer: {
        width: 60,
        borderRadius: 10,

    },
    itemContainer: {
        paddingHorizontal: 20,
        width: metrics.screenWidth / 2 - 10,
        height: metrics.screenHeight / 4 - 15
    },
    track: {

    },
    bar: {

    },
    item: {
        marginVertical: 100,
    },
    list: {
        maxHeight: 310,
    }
})