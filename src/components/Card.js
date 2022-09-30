import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Arrow from './Arrow';

import { colors } from '../globals';
import Checkbox from './Checkbox';

const Header = () => (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 5, padding: 10 }}>
        <View style={{ alignItems: "center" }}>
            <Text>1 de 1</Text>
        </View>
        <View>
            <Checkbox size={20}/>
        </View>
    </View>
)

export default function Card({ Componente }) {
    const [section, setSection] = useState(true);
    const [ qtdPatrimonio, setQtdPatrimonio ] = useState(0);

    return (
        <View style={{
            flex: 1,
            margin: 15,
            borderRadius: 10,
            backgroundColor: "white",
            alignItems: "center"
        }}>
            <View>
                <Header />

            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
});
