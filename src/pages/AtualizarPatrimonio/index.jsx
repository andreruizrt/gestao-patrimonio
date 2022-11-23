import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';

import Logo from '../../common/Logo';

import Arrow from '../../components/Arrow';

import styles from './style';

import { Formik } from 'formik';
import * as Yup from "yup";

const valorMinimoPreencher = 1
const naoPreenchidoMensagem = "Valor do campo não preenchido";

const validationSchema = Yup.object().shape({
    id: Yup.string()
        .label("id")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    eg: Yup.string()
        .label("eg")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    desc: Yup.string()
        .label("desc")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    dataCompra: Yup.string()
        .label("dataCompra")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    garantia: Yup.string()
        .label("garantia")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    valor: Yup.string()
        .label("valor")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    numNota: Yup.string()
        .label("numNota")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    numSerie: Yup.string()
        .label("numSerie")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    marca: Yup.string()
        .label("marca")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
    modelo: Yup.string()
        .label("modelo")
        .required()
        .min(valorMinimoPreencher, naoPreenchidoMensagem),
})

const initalValuesAtualizarPatrimonio = {
    id: "",
    eg: "",
    desc: "",
    dataCompra: "",
    garantia: "",
    valor: "",
    numNota: "",
    numSerie: "",
    marca: "",
    modelo: ""
}

const MensagemErro = ({ erro }) => {
    <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{erro}</Text>
    </View>
};

export default function AtualizarPatrimonio({ route }) {
    const [id, setId] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        setId(route.params.postId)
    }, [])

    useEffect(() => {
        async function findUnique() {
            console.log("AtualizaPatrimonio [ID]", id);
            const response = await Patrimonio.unique(id);
            console.log("AtualizaPatrimonio [RESPONSE]", response);
            setData(response);
        }

    }, [id])

    useEffect(() => {
        console.log("AtualizaPatrimonio [DATA]", data);

    }, [data])

    function onAtualizarPatrimonioHandler(values) {
        // TODO: Criar método de envio das informações
    }

    return (
        <>
            <View style={styles.cardContainer}>
                <ScrollView
                    style={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Formik
                        initialValues={initalValuesAtualizarPatrimonio}
                        onSubmit={(values, actions) => {
                            onLoginHandler(values, actions);
                        }}
                        validationSchema={validationSchema}
                    >
                        {({
                            handleChange,
                            values,
                            errors,
                            touched,
                            handleSubmit,
                            handleBlur,
                        }) => (
                            <View style={{ width: 300 }}>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.eg}
                                        placeholder="EG"
                                        onChangeText={handleChange("eg")}
                                        autoCapitalize="none"
                                        keyboardType="numeric"
                                        onBlur={handleBlur("eg")}
                                    />
                                    <MensagemErro erro={touched.eg && errors.eg} />

                                    <TextInput
                                        style={[styles.input, styles.inputRight]}
                                        numberOfLines={1}
                                        value={values.desc}
                                        placeholder="Descrição"
                                        onChangeText={handleChange("desc")}
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        onBlur={handleBlur("desc")}
                                    />
                                    <MensagemErro erro={touched.desc && errors.desc} />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.dataCompra}
                                        placeholder="Data da compra"
                                        onChangeText={handleChange("dataCompra")}
                                        autoCapitalize="none"
                                        keyboardType='default'
                                        onBlur={handleBlur("dataCompra")}
                                    />
                                    <MensagemErro erro={touched.dataCompra && errors.dataCompra} />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.garantia}
                                        placeholder="Garantia"
                                        onChangeText={handleChange("garantia")}
                                        autoCapitalize="none"
                                        keyboardType='default'
                                        onBlur={handleBlur("garantia")}
                                    />
                                    <MensagemErro erro={touched.garantia && errors.garantia} />

                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.valor}
                                        placeholder="Valor"
                                        onChangeText={handleChange("valor")}
                                        autoCapitalize="none"
                                        keyboardType='default'
                                        onBlur={handleBlur("valor")}
                                    />
                                    <MensagemErro erro={touched.valor && errors.valor} />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.numNota}
                                        placeholder="Número da nota"
                                        onChangeText={handleChange("numNota")}
                                        autoCapitalize="none"
                                        keyboardType="numeric"
                                        onBlur={handleBlur("numNota")}
                                    />
                                    <MensagemErro erro={touched.numNota && errors.numNota} />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.numSerie}
                                        placeholder="Número de série"
                                        onChangeText={handleChange("numSerie")}
                                        autoCapitalize="none"
                                        keyboardType='default'
                                        onBlur={handleBlur("numSerie")}
                                    />
                                    <MensagemErro erro={touched.numSerie && errors.numSerie} />

                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.marca}
                                        placeholder="Marca"
                                        onChangeText={handleChange("marca")}
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        onBlur={handleBlur("marca")}
                                    />
                                    <MensagemErro erro={touched.marca && errors.marca} />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        numberOfLines={1}
                                        value={values.modelo}
                                        placeholder="Modelo"
                                        onChangeText={handleChange("modelo")}
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        onBlur={handleBlur("modelo")}
                                    />
                                    <MensagemErro erro={touched.modelo && errors.modelo} />
                                </View>

                                <View style={styles.navContainer}>
                                    <Arrow
                                        onPress={handleSubmit}
                                        direction={"right"}
                                    />
                                    <Arrow
                                        onPress={() => console.log("Clicou no voltar")}
                                        direction={"left"}
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View >

            <View style={{ margin: 8, alignItems: "center" }}>
                <Logo width={146} />
            </View>
        </>
    );
};

