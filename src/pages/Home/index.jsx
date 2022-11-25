import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Button,
    SafeAreaView,
    FlatList,
} from 'react-native';

import styles from './style';

const PAGES = [
    {
        name: 'Splash',
        title: 'Splash'
    },
    {
        name: 'Login',
        title: 'Login'
    },
    {
        name: 'Menu',
        title: 'Menu'
    },
    {
        name: 'RecuperarSenha',
        title: 'Recuperar Senha'
    },
    {
        name: 'CadastrarColaborador',
        title: 'Cadastrar Colaborador'
    },
    {
        name: 'CadastrarPatrimonio',
        title: 'Cadastrar Patrimônio'
    },
    {
        name: 'AtualizarPatrimonio',
        title: 'Atualizar Patrimônio'
    },
    {
        name: 'ListaPatrimonio',
        title: 'Lista Patrimônio'
    },
    {
        name: 'GerarRelatorio',
        title: 'Gerar Relatório'
    },
    {
        name: 'BancoDeDados',
        title: 'Banco De Dados'
    },
]

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{ height: "10%" }}>
                <Text style={{ top: 20, fontWeight: "bold" }}>Todas as páginas:</Text>
            </View>

            <SafeAreaView style={styles.pagesContainer}>
                <FlatList
                    data={PAGES}
                    renderItem={({ item }) => {
                        return (
                            <Button
                                onPress={() => { navigation.navigate(item.name) }}
                                title={item.title}>
                            </Button>
                        )
                    }}
                    keyExtractor={(item) => item.name}
                />
            </SafeAreaView>
        </View>
    );
};

