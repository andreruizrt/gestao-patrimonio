
import React, { useEffect, useState } from 'react';

import {
    View,
    SafeAreaView,
    FlatList,
    ActivityIndicator
} from 'react-native';

import { Patrimonio } from '../../service/Api/Patrimonio';

import Logo from '../../common/Logo';
import Card from '../../components/Card';

import { colors } from '../../globals';
import styles from './style';

export default function BaseDeDados() {
    const [patrimonios, setPatrimonios] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const response = await Patrimonio.index();
            setPatrimonios(response.data);

            setLoading(false)
        }
        fetchData();

    }, [patrimonios])

    return loading ?
        <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color={colors.secundary} />
        </View>
        :
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <FlatList data={patrimonios} renderItem={Card} keyExtractor={item => item.id} />
            </SafeAreaView>

            <View style={styles.logoContainer}>
                <Logo width={146} />
            </View>
        </View>

};

