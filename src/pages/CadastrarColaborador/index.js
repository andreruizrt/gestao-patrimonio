import React, { useState, useEffect } from 'react';

import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Logo from '../../common/Logo';
import Arrow from '../../components/Arrow';

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
        <View>
            <Logo />
            <Text>Cadatrar Colaborador</Text>

            {/* Página 1 */}
            <TextInput
                style={styles.textInput}
                label={'Nome do colaborador'}
                value={nome}
                onChangeText={text => setNome(text)}
            />

            <TextInput
                label={'Email do colaborador:'}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label={'Registro:'}
                value={registro}
                onChangeText={text => setRegistro(text)}
            />

            <TextInput
                style={styles.textInput}
                value={dataAdmissao}
                label={'Data admissão'}
                onChangeText={text => setdataAdmissao(text)}
            />

            <View style={{ flex: 1, alignItems:"center", flexDirection: "row", justifyContent: "space-between" }}>
                <Arrow
                    onPress={() => console.log("testando flechas")}
                    direction={"left"}
                />
                <Arrow
                    onPress={() => console.log("testando flechas")}
                    direction={"right"}
                />
            </View>

            {/* Página 2 */}
            <TextInput
                style={styles.textInput}
                label={'ID'}
                editable={false}
                onChangeText={text => setNome(text)}
            />

            <TextInput
                label={'EG patrimônio'}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label={'Descrição do patrimônio'}
                onChangeText={text => setRegistro(text)}
            />

            <TextInput
                label={'Marca'}
                onChangeText={text => setdataAdmissao(text)}
            />

            <TextInput
                label={'Modelo'}
                onChangeText={text => setdataAdmissao(text)}
            />

            <TextInput
                label={'N° de série'}
                onChangeText={text => setdataAdmissao(text)}
            />

            <TextInput
                label={'setor'}
                onChangeText={text => setdataAdmissao(text)}
            />

            <TextInput
                label={'Observação'}
                onChangeText={text => setdataAdmissao(text)}
            />

            <Button onPress={() => console.log("clicou")} title={"Continuar"}>
            </Button>

        </View >
    );
};