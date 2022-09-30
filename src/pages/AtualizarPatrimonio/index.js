import React, { useState } from 'react';

import { View, Text, Button} from 'react-native';

import Logo from '../../common/Logo';
import { TextInput } from 'react-native-paper';

export default function AtualizarPatrimonio() {
    const [id,setId] = useState('');
    const [eg,setEg] = useState('');
    const [desc,setDesc] = useState('');
    const [dataCompra,setDataCompra] = useState('');
    const [garantia,setGarantia] = useState('');
    const [valor,setValor] = useState('');
    const [numNota, setNumNota] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    return (
        <View>
            <Logo />
            <Text>Atualizar Património</Text>
            <View >
                <TextInput
                    label={'Id:'}
                    value={id}
                    disabled={true}
                    onChangeText={text => setId(text)}
                />
                <TextInput
                    label={'EG Património:'}
                    value={eg}
                    onChangeText={text => setEg(text)}
                />               
            </View>

            <View >
                <TextInput
                    label={'Descrição do patrimônio:'}
                    value={desc}
                    onChangeText={text => setDesc(text)}
                />              
            </View>

            <View>
                <TextInput
                    label={'Data de compra:'}
                    value={dataCompra}
                    onChangeText={text => setDataCompra(text)}
                />
                <TextInput
                    label={'Garantia:'}
                    value={garantia}
                    onChangeText={text => setGarantia(text)}
                />               
            </View>

            <View >
                <TextInput
                    label={'Valor:'}
                    value={valor}
                    onChangeText={text => setValor(text)}
                />
                <TextInput
                    label={'Nª da Nota:'}
                    value={numNota}
                    onChangeText={text => setNumNota(text)}
                />               
            </View>
            <View >
                <TextInput
                        label={'Marca:'}
                        value={marca}
                        onChangeText={text => setMarca(text)}
                    />
                <TextInput
                    label={'Nª de Serie:'}
                    value={numSerie}
                    onChangeText={text => setNumSerie(text)}
                />           
            </View>
            <View >
                <TextInput
                        label={'Modelo:'}
                        value={modelo}
                        onChangeText={text => setModelo(text)}
                    />        
            </View>
            <Button onPress={() => console.log("clicou")} title={"Continuar"}>
            </Button>

        </View >
    );
};

