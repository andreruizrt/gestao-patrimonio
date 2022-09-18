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
  menuItem: {
    flex: 2,
    width: 30,
    height: 50,
    backgroundColor: colors.backgroundColor
  }
});

export default styles;