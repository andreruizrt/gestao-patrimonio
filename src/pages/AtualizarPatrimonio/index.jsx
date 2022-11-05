import React, { useState } from 'react';

import { View, Text, Button, ScrollView } from 'react-native';

import Logo from '../../common/Logo';

import Input from '../../components/Input';
import Arrow from '../../components/Arrow';

import styles from './style'

export default function AtualizarPatrimonio() {
    const [id, setId] = useState('');
    const [eg, setEg] = useState('');
    const [desc, setDesc] = useState('');
    const [dataCompra, setDataCompra] = useState('');
    const [garantia, setGarantia] = useState('');
    const [valor, setValor] = useState('');
    const [numNota, setNumNota] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                margin: 15,
                borderRadius: 10,
                backgroundColor: "white",
                alignItems: "center"
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
                        <Input
                            label={'ID'}
                            width={130}
                            value={id}
                            disabled={true}
                            onChangeText={text => setId(text)}
                        />
                        <Input
                            label={'EG Patrimônio'}
                            width={130}
                            value={eg}
                            onChangeText={text => setEg(text)}
                        />
                    </View>

                    <View>
                        <Input
                            label={'Descrição do patrimônio'}
                            width={282}
                            value={desc}
                            onChangeText={text => setDesc(text)}
                        />
                    </View>

                    <View style={{ flex: 3, flexDirection: "row", alignContent: "space-between" }}>
                        <Input
                            label={'Data de compra'}
                            width={130}
                            value={dataCompra}
                            onChangeText={text => setDataCompra(text)}
                        />
                        <Input
                            label={'Garantia'}
                            width={130}
                            value={garantia}
                            onChangeText={text => setGarantia(text)}
                        />
                    </View>

                    <View style={{ flex: 2, flexDirection: "row", alignContent: "space-between" }}>
                        <Input
                            label={'Valor'}
                            width={130}
                            value={valor}
                            onChangeText={text => setValor(text)}
                        />
                        <Input
                            label={'Nª da Nota'}
                            width={130}
                            value={numNota}
                            onChangeText={text => setNumNota(text)}
                        />
                    </View>
                    <View style={{ flex: 2, flexDirection: "row", alignContent: "space-between" }}>
                        <Input
                            label={'Marca'}
                            width={130}
                            value={marca}
                            onChangeText={text => setMarca(text)}
                        />
                        <Input
                            label={'Nª de Serie'}
                            width={130}
                            value={numSerie}
                            onChangeText={text => setNumSerie(text)}
                        />
                    </View>
                    <View >
                        <Input
                            label={'Modelo'}
                            width={282}
                            value={modelo}
                            onChangeText={text => setModelo(text)}
                        />
                    </View>

                    <View style={{
                        marginHorizontal: 10,
                        paddingTop: 30,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTopWidth: 1,
                        borderColor: "#F5EFEB",
                        backgroundColor: "white"
                    }}>
                        <Arrow
                            onPress={() => console.log("Clicou no voltar")}
                            direction={"left"}
                        />
                        <Arrow
                            onPress={() => console.log("Clicou no voltar")}
                            direction={"right"}
                        />
                    </View>
                </ScrollView>
            </View >
            <View style={{ margin: 8, alignItems: "center" }}>
                <Logo width={146} />
            </View>
        </View>
    );
};

