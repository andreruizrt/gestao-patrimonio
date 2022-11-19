import { StyleSheet } from "react-native";
import { colors, metrics } from "../../globals";

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    backgroundColor: colors.cardColor,
    alignItems: "center"
  },
  scrollContainer: {
  },
  inputContainer: {
    flexDirection: 'row',
    width: metrics.inputContainer,
  },
  input: {
    margin: metrics.inputMargin,
    padding: metrics.inputPadding,
    width: metrics.inputWidth,
    height: metrics.height,
    color: colors.text,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderRadius: metrics.inputBorderRadius,
    borderColor: colors.borderColor
  },
  inputRight: {
    marginLeft: 5,
  },
  navContainer: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#F5EFEB",
    backgroundColor: colors.background
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: colors.error,
  },
});

export default styles;