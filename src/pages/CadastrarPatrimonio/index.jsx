import React, { useEffect, useState } from 'react';

import {
    View,
    ScrollView,
    Text,
    Alert,
    ActivityIndicator
} from 'react-native';

import Checkbox from 'expo-checkbox';
import Logo from '../../common/Logo';
import Arrow from '../../components/Arrow';
import Input from '../../components/Input';
import { Patrimonio } from '../../service/Api/Patrimonio';

import styles from './style';
import { colors, metrics } from '../../globals';

export default function CadastrarPatrimonio({ navigation, route }) {

    const [loading, setLoading] = useState(true);
    const [dados, setDados] = useState([]);

    const [id, setId] = useState('');
    const [eg, setEg] = useState('');
    const [desc, setDesc] = useState('');
    const [dataCompra, setDataCompra] = useState('');
    const [validade, setValidade] = useState('');
    const [valor, setValor] = useState('');
    const [numNota, setNumNota] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [nomeFornecedor, setNomeFornecedor] = useState('');
    const [cnpj_cpf, setCnpjCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [componente, setComponente] = useState('');
    const [textCheck, setTextCheck] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [uso, setUso] = useState(true);
    const [insert, setInsert] = useState(true);

    useEffect(() => {

        if (route.params?.postId !== undefined) {
            setId(route.params.postId);
        } else {
            setLoading(false)
        }

    }, []);

    useEffect(() => {

        if (id !== undefined) {
            setInsert(false);

            async function fetchMyAPI() {
                const response = await Patrimonio.unique(id);
                setDados(response.data)
                setLoading(false)
            }
            fetchMyAPI();

        } else {
            setInsert(true);
        }

    }, [id]);

    useEffect(() => {

        if (Array.isArray(dados)) {

            for (var i; i < dados.length; i++) {
                if (dados[i] === id) {
                    setEg(dados[i].numero_patrimonio);
                    setDesc(dados[i].nome_patrimonio)
                    setDataCompra(() => {
                        var dateFormat = new Date(dados[i].data_compra);
                        return dateFormat.toISOString;
                    })
                    setValidade(dados[i].garantia + "");
                    setValor(dados[i].valor)
                    setNumNota(dados[i].numero_nota)
                    setMarca(dados[i].marca)
                    setNumSerie(dados[i].numero_serie)
                    setModelo(dados[i].modelo)
                    setCnpjCpf(dados[i].Fornecedor?.CPF_CPNJ)
                    setNomeFornecedor(dados[i].Fornecedor?.nome_fornecedor)
                    setChecked(dados[i].Situacao?.uso === 1 ? true : false)
                    setSetor(dados[i].Situacao?.setor)
                    setObservacoes(dados[i].Situacao?.observacoes)
                    setComponente(dados[i].Situacao?.componente)
                    break;
                }

            }

        } else {
            setEg(dados.numero_patrimonio);
            setDesc(dados.nome_patrimonio)
            setDataCompra(() => {
                var dateFormat = new Date(dados.data_compra);
                return dateFormat.toDateString();
            })
            setValidade(dados.garantia + "");
            setValor(dados.valor + "")
            setNumNota(dados.numero_nota)
            setMarca(dados.marca)
            setNumSerie(dados.numero_serie)
            setModelo(dados.modelo)
            setCnpjCpf(dados.Fornecedor?.CPF_CPNJ)
            setNomeFornecedor(dados.Fornecedor?.nome_fornecedor)
            setChecked(dados.Situacao?.uso === 1 ? true : false)
            setSetor(dados.Situacao?.setor)
            setObservacoes(dados.Situacao?.observacoes)
            setComponente(dados.Situacao?.componente)
        }

    }, [dados]);

    useEffect(() => {
        setTextCheck(isChecked ? 'Ativado' : 'Desativado');
        setUso(isChecked ? 1 : 0);

    }, [isChecked]);

    useEffect(() => {
        setUso(isChecked ? 1 : 0);

    }, [textCheck]);


    async function enviarResposta(response) {
        if (!response) {
            Alert.alert('Erro', "Não obteve resposta do servidor!")
        } else {
            Alert.alert("Sucesso!", insert ? "Patrimônio cadastrado!" : "Patrimônio atualizado!")
            navigation.navigate('Menu');
        }

    }
    async function onSubmit() {

        try {

            const patrimonio = {
                nome_patrimonio: desc,
                numero_patrimonio: eg,
                codigo_barra: eg,
                garantia: validade,
                data_compra: dataCompra,
                numero_nota: numNota,
                numero_serie: numSerie,
                marca: marca,
                modelo: modelo,
                valor: valor,
                nome_fornecedor: nomeFornecedor,
                CPF_CPNJ: cnpj_cpf,
                identificacao_fornecedor: null,
                telefone: null,
                celular: null,
                uso: uso,
                setor: setor,
                situacao: textCheck,
                observacoes: observacoes,
                componente: componente
            };

            if (insert) {
                const response = await Patrimonio.create(patrimonio)
                enviarResposta(response)
            } else {
                const response = await Patrimonio.update(patrimonio, id)
                enviarResposta(response)
            }

        } catch (error) {
            console.log("Falha ao cadastrar patrimonio [ERROR] " + error.error)
            Alert.alert(error.error)
        }

    }


    return loading ?
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size='large' color={colors.secundary} />
        </View>
        :
        (
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
                                label={'Descrição do patrimônio'}
                                width={150}
                                value={desc}
                                onChangeText={text => setDesc(text)}
                            />
                            <Input
                                label={'EG Patrimônio'}
                                width={110}
                                value={eg}
                                onChangeText={text => setEg(text)}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
                            <Input
                                label={'Data de compra'}
                                width={130}
                                value={dataCompra}
                                onChangeText={text => setDataCompra(text)}
                            />
                            <Input
                                label={'Nª da Nota'}
                                width={130}
                                value={numNota}
                                onChangeText={text => setNumNota(text)}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
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
                        <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
                            <Input
                                label={'Valor'}
                                width={130}
                                value={valor}
                                onChangeText={text => setValor(text)}
                            />
                            <Input
                                label={'Garantia'}
                                width={130}
                                value={validade}
                                onChangeText={text => setValidade(text)}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
                            <Input
                                label={'Modelo'}
                                width={130}
                                value={modelo}
                                onChangeText={text => setModelo(text)}
                            />
                            <Input
                                label={'Setor'}
                                width={130}
                                value={setor}
                                onChangeText={text => setSetor(text)}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
                            <Input
                                label={'CNPJ ou CPF'}
                                width={130}
                                value={cnpj_cpf}
                                onChangeText={text => setCnpjCpf(text)}
                            />
                            <Input
                                label={'Fornecedor'}
                                width={130}
                                value={nomeFornecedor}
                                onChangeText={text => setNomeFornecedor(text)}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
                            <Input
                                label={'Observações'}
                                width={160}
                                value={observacoes}
                                onChangeText={text => setObservacoes(text)}
                            />
                            <Input
                                label={'Componentes'}
                                width={100}
                                value={componente}
                                onChangeText={text => setComponente(text)}
                            />
                        </View>
                        <View style={{ flex: 1, margin: 20, flexDirection: "row", alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>Situação:</Text>
                            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                            <Text>{textCheck}</Text>
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
                                direction={"left"}
                                onPress={() => navigation.goBack()}
                            />
                            <Arrow
                                direction={"right"}
                                onPress={() => onSubmit()}
                            />
                        </View>

                    </ScrollView>
                </View >

                <View style={{ margin: 8, alignItems: "center" }}>
                    <Logo width={146} />
                </View>
            </View >
        );
};

