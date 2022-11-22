import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { colors, metrics } from "../../globals";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: colors.background,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: metrics.fontSize,
    },
});

export default styles;