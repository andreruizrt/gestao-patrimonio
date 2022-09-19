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
  pagesContainer: {
    flex: 2,
  }
});

export default styles;