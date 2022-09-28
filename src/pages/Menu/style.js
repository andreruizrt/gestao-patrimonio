import { StyleSheet } from "react-native";
import { colors } from "../../globals";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  menuItens: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
});

export default styles;