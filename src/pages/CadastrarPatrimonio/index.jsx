import React, { useEffect, useState } from 'react';

import {
    View,
    ScrollView,
    Text,
    Alert
} from 'react-native';

import Checkbox from 'expo-checkbox';
import Logo from '../../common/Logo';
import Arrow from '../../components/Arrow';
import Input from '../../components/Input';
import { Patrimonio } from '../../service/Api/Patrimonio';

import styles from './style';

export default function CadastrarPatrimonio({ navigation }) {

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
    const [nomeFornecedor, setNomeFornecedor] = useState('');
    const [cnpj_cpf, setCnpjCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [componente, setComponente] = useState('');
    const [textCheck,setTextCheck] = useState('');
    const [isChecked,setChecked] = useState(true);

    useEffect(() => {
        if(isChecked){
            setTextCheck('Ativado');
        }else{
            setTextCheck('Desativado');
        }

    }, [isChecked]);
    async function onSubmit() {

        try {

            if (nome_patrimonio.length <= 0 || numero_nota.length <= 0 || eg.length <= 0 || data_compra.length <= 0) {
                const message = 'Algum dos valores não foi digitado!'
                Alert.alert("Erro!", message)
                throw message;
            }

            const patrimonio = {
                nome_patrimonio: desc,
                numero_patrimonio: eg,
                codigo_barra: eg,
                garantia:garantia,
                data_compra:dataCompra,
                numero_nota:numNota,
                numero_serie:numSerie,
                marca:marca,
                modelo: modelo,
                valor:valor,
                nome_fornecedor:nomeFornecedor,
                CPF_CPNJ:cnpj_cpf,
                identificacao_fornecedor:null,
                telefone:null,
                celular:null,
                uso:isChecked?1:0,
                setor:setor,
                situacao:textCheck,
                observacoes:observacoes,
                componente:componente
            };

            const response = await Patrimonio.create(patrimonio)


            if (!response) {
                console.log("Não obteve resposta do servidor!");
            } else {
                Alert.alert("Sucesso!", "Patrimônio cadastrado!")
                navigation.navigate('Menu');
            }

            // const patrimonioes = response.data.json()

            console.log(response)

            // setPatrimonioes( response.data)

        } catch (error) {
            console.log("Falha ao cadastrar patrimonio [ERROR] " + error.message)
            console.log(error);
        }

    }

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

                    <View >
                        <Input
                            label={'Descrição do patrimônio'}
                            width={292}
                            value={desc}
                            onChangeText={text => setDesc(text)}
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
                            label={'Garantia'}
                            width={130}
                            value={garantia}
                            onChangeText={text => setGarantia(text)}
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
                    <View style={styles.section}>
                    <Text style={styles.paragraph}>     Situação: </Text>
                        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                        <Text style={styles.paragraph}>{textCheck}</Text>
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
                            onPress={() => console.log("Clicou no voltar")}
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

