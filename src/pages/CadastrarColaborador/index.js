import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function CadatrarColaborador() {

    return (
        <View>
            <Logo />
            <Text>Cadatrar Colaborador</Text>

            <TextInput
                label={'Nome do colaborador:'}
                placeholder={'Digite o nome do colaborador'}
                onChangeText={text => setNome(text)}
            />

            <TextInput
                label={'Email do colaborador:'}
                placeholder={'Digite seu email'}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label={'Registro:'}
                placeholder={'Digite seu registro'}
                onChangeText={text => setRegistro(text)}
            />

            <TextInput
                label={'Data de admissão:'}
                placeholder={'Digite sua data de admissão'}
                onChangeText={text => setdataAdmissao(text)}
            />

            <Button onPress={() => console.log("clicou")} title={"Continuar"}>
            </Button>

        </View >
    );
};

