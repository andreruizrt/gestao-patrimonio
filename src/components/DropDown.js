import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { colors } from '../globals';
import Icon from './Icon';

export default function DropDown({ item, onPress, backgroundColor = colors.backgroundColor, textColor = colors.text }) {
    return (
        <>
            <Icon item={item} />
            <FlatList
                data={item.submenu}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Text>{item.key}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.key}
            />
        </>
    );
}

const styles = StyleSheet.create({
    menuItemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: colors.secundary,
        borderRadius: 60,
    },
    item: {
        flex: 1,
        width: 140,
    },
    title: {
        alignSelf: "center"
    }
});
