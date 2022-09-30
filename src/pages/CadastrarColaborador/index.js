import React, { useState } from 'react';

import { View } from 'react-native';

import Logo from '../../common/Logo';
import Arrow from '../../components/Arrow';
import Input from '../../components/Input';

import styles from './style';

export default function CadatrarColaborador() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [registro, setRegistro] = useState("");
    const [dataAdmissao, setdataAdmissao] = useState("");

    // function onSubmit(userId, nome, email, registro, data_admissao) {
    //     const database = getDatabase();
    //     set(ref(database, 'usuario/' + userId), {
    //         nome_usuario: nome,
    //         email_usuario: email,
    //         registro_usuario: registro,
    //         dt_admissao_usuario: data_admissao
    //     });
    // }

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
                        onPress={() => console.log("Clicou no voltar")}
                        direction={"left"}
                    />
                    <Arrow
                        onPress={() => console.log("Clicou no voltar")}
                        direction={"right"}
                    />
                </View>
            </View >
            
            <View style={{ margin: 8, alignItems: "center" }}>
                <Logo width={146} />
            </View>

        </View>
    );
};