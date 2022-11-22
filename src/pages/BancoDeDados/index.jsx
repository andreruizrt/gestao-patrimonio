
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import Logo from '../../common/Logo';
import Card from '../../components/Card';
import Checkbox from '../../components/Checkbox';
import { colors } from '../../globals';

import { Patrimonio } from '../../service/Api/Patrimonio';

import styles from './style';

export default function BancoDeDados() {
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

    return (

        loading ?
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size='large' color={colors.secundary} />
            </View> 
            :
            <View style={{ flex: 1 }}>
                {/* <View>
                    <View style={{ alignItems: "center" }}>
                        <Text>x de y</Text>
                    </View>
                    <View>
                        <Checkbox size={20} />
                    </View>
                </View> */}

                <SafeAreaView>
                    <FlatList data={patrimonios} renderItem={Card} keyExtractor={item => item.id} />
                </SafeAreaView>


                <View style={{ margin: 8, alignItems: "center" }}>
                    <Logo width={146} />
                </View>
            </View>
    );
};

