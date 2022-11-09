import { StyleSheet } from "react-native";
import { colors } from "../../globals";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  menuItens: {
    flex: 2,
    
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  menuItem: {
    flex: 2,
    width: 30,
    height: 50,
    backgroundColor: colors.backgroundColor
  }
});

export default styles;