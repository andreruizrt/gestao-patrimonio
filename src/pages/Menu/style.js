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
  menuItemContainer: {
    flex: 1,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "yellow",
    borderRadius: 40,
  },
  menuItens: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  item: {
    flex: 1,
    height: 100,
    backgroundColor: "red"
  }
});

export default styles;