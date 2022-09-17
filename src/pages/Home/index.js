import React, { useState, useEffect } from 'react';
import databse from '../../config/firebaseconfig';

import { View, Text } from 'react-native';

import Logo from '../../common/Logo';

import styles from './style';

export default function Home() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        databse.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            });
            setTask(list);
        })
    }, [])

    return (
        <View>
            <Logo />
            <Text>HomeScreen</Text>
        </View>
    );
};

