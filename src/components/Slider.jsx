import React, { Component } from 'react'
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

export default class Slider extends Component  {
    
    numItems = MENU_OPTIONS.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    render() {
        var iconArray = []
        let barArray = []
        let iconGroup = []

        MENU_OPTIONS.forEach((item, i) => {

            console.log(i)

            const thisImage = (
                <View style={styles.itemContainer}>
                    <Item
                        item={item}
                        style={styles.item}
                        onPress={() => {
                            this.props.navigation.navigate(item.page)
                        }}
                    />
                </View>
            )

            iconArray.push(thisImage)

            // const group = () => {
            //     if (i % 2 !== 0) {
            //         const anterior = i - 1

            //         return (
            //             <View style={styles.group}>
            //                 {iconArray.at(anterior)}
            //                 { i + 1 > iconArray.length ? <View style={styles.container}></View> : iconArray.at(i) }
            //             </View >
            //         )
            //     } else {
            //         return <></>
            //     }
            // }

            // iconGroup.push(group)

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
                    <View style={{ flex: 1, flexDirection: 'column'}}>
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
    container: {
    },
    barContainer: {


    },
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