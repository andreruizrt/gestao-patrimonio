import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

import Logo from '../../common/Logo';

import styles from '../Menu/style';

const MENU_OPTIONS = [
    {
        key: "Cadastrar Colaborador",
        icon: require("../../../assets/icons/icon_user_plus.png"),
        page: "CadastrarColaborador"
    },
    {
        key: "Cadastrar Patrimônio",
        icon: require("../../../assets/icons/icon_carrinho.png"),
        page: "CadastrarPatrimonio"
    },
    {
        key: "Atualizar Patrimônio",
        icon: require("../../../assets/icons/icon_flecha.png"),
        page: "AtualizarPatrimonio"
    },
    {
        key: "Gerar Relatório",
        icon: require("../../../assets/icons/icon_relatorio.png"),
        page: "GerarRelatorio"
    },
    {
        key: "Banco de dados",
        icon: require("../../../assets/icons/icon_database.png"),
        page: "BancoDeDados"
    },
]


const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <View style={styles.menuItemContainer}>
            <Image source={item.icon} />
        </View>
        <Text style={[styles.title, textColor]}>{item.key}</Text>
    </TouchableOpacity>
);


export default function Menu({ navigation }) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.key === selectedId ? "#CCC" : "#FFF";
        const color = item.key === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.key)
                    navigation.navigate(item.page)
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <View style={styles.container}>

            <View style={{ flex: 1 }}>
                {/* <HamburgerMenu /> */}
                {/* <MenuLateral /> */}
                {/* <Avatar /> */}
                {/* <AlterarAvatar /> */}
                {/* <Text>Olá, {user.name}</Text> */}
                <Text>Olá, Marlon</Text>
                <Text>O que gostaria de fazer hoje?</Text>
            </View>


            <SafeAreaView style={styles.menuItens}>
                <FlatList
                    data={MENU_OPTIONS}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                    extraData={selectedId}
                />
            </SafeAreaView>


            <View style={{ flex: 3 }}>
                <Logo />
            </View>

        </View>
    );
};

