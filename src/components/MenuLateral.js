import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import Icon from './Icon';

const ITENS_MENU_LATERAL = [
    {
        key: "Cadastro de servidor",
        icon: require("../../assets/icons/icon_user_plus.png"),
        page: "CadastrarColaborador",
        submenu: [
            {
                key: "Cadastro de servidor",
                icon: require("../../assets/icons/icon_user_plus.png"),
                page: "CadastrarColaborador"
            },
            {
                key: "Cadastrar de patrimônio",
                icon: require("../../assets/icons/icon_carrinho.png"),
                page: "CadastrarPatrimonio"
            },
            {
                key: "Atualizar patrimônio",
                icon: require("../../assets/icons/icon_flecha.png"),
                page: "AtualizarPatrimonio"
            },
            {
                key: "Gerar Relatório",
                icon: require("../../assets/icons/icon_relatorio.png"),
                page: "GerarRelatorio"
            }
        ]
    }
]

const ITENS_MENU_LATERAL_2 = [
    {
        key: "Tutorial",
        icon: require("../../assets/icons/icon_tutorial.png"),
        page: "CadastrarColaborador"
    },
    {
        key: "Sobre",
        icon: require("../../assets/icons/icon_alerta.png"),
        page: "CadastrarPatrimonio"
    },
]

const ITEM_SAIR = [
    {
        key: "Sair da conta",
        icon: require("../../assets/icons/icon_sair.png"),
        page: "Logout"
    }
]

export default function MenuLateral() {

    return (
        <View>
            <View>
                <Text>Marlon Marco</Text>
                <Text>marlonmarco@utfpr.edu.br</Text>
            </View>

            <View>
                <FlatList
                    data={ITENS_MENU_LATERAL}
                    renderItem={({ item }) => {
                        return (
                            <Icon item={item} />
                        )
                    }}
                    keyExtractor={(item) => item.key}
                />
            </View>

            <View>
                <FlatList
                    data={ITENS_MENU_LATERAL_2}
                    renderItem={({ item }) => {
                        return (
                            <Icon item={item} />
                        )
                    }}
                    keyExtractor={(item) => item.key}
                />
            </View>

            <View>
                <Icon item={ITEM_SAIR} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        height: 76,
        display: "flex",
        position: "relative",
        backgroundColor: "white"
    },
    label: {
        height: 14,
        position: "relative",
        top: 6,
        left: 8,
        color: "#242220"
    },
    input: {
        height: 52,
        padding: 10,
        backgroundColor: "#F5EFEB",
        borderRadius: 12,
        zIndex: -1
    }
});

