import React, { useState } from 'react';

// import { Users } from '../../service/User';

import { Alert, View } from 'react-native';

import Logo from '../../common/Logo';
import Arrow from '../../components/Arrow';
import Input from '../../components/Input';

import { Colaborador } from '../../service/Api/Colaborador';


import styles from './style';

export default function CadatrarColaborador({ navigation: { navigate } }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [registro, setRegistro] = useState("");
    const [dataAdmissao, setdataAdmissao] = useState("");

    async function onSubmit() {

        try {

            if (nome.length <= 0 || email.length <= 0 || registro.length <= 0 || dataAdmissao.length <= 0) {
                const message = 'Algum dos valores não foi digitado!'
                Alert.alert("Erro!", message)
                throw message;
            }

            const colaborador = {
                nome_colaborado: nome,
                email: email,
                registro: registro,
                data_admissao: dataAdmissao
            };

            const response = await Colaborador.create(colaborador)

            if (!response) {
                throw "Response está vazio"
            }
            navigate('Menu');
        } catch (error) {
            console.log("Falha ao cadastrar colaborador [ERROR] " + error)
        }

    }


    // TODO: Criação paginação e navegação entre páginas de cadastro

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                margin: 15,
                borderRadius: 10,
                backgroundColor: "white",
                alignItems: "center"
            }}>
                <View>
                    <Input
                        label={'Nome do colaborador'}
                        width={282}
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />
                </View>
                <View>
                    <Input
                        label={'Email do colaborador:'}
                        width={282}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: "row", alignContent: "space-between" }}>
                    <Input
                        label={'Registro:'}
                        width={130}
                        value={registro}
                        onChangeText={text => setRegistro(text)}
                    />
                    <Input
                        value={dataAdmissao}
                        width={130}
                        label={'Data admissão'}
                        onChangeText={text => setdataAdmissao(text)}
                    />
                </View>

                <View style={{
                    marginHorizontal: 10,
                    marginTop: 110,
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
            </View >

            <View style={{ margin: 8, alignItems: "center" }}>
                <Logo width={146} />
            </View>

        </View>
    );
};