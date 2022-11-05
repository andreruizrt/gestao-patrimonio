import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Button,
    SafeAreaView,
    FlatList,
    Alert
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
        name: 'GerarRelatorio',
        title: 'Gerar Relatório'
    },
    {
        name: 'BancoDeDados',
        title: 'Banco De Dados'
    },
]

const axios = require('axios').default;

export default function Home({ navigation }) {
    const [ users, setUsers ] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:5102/users/1').then((response) => {
            if (response) {
                setUsers(response)
            } else {
                Alert.alert('Erro ao comunicar com servidor')
            }
        }).catch((error) => {
            console.log(error)
            Alert.alert("Ocorreu um erro")
        })
    })

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

