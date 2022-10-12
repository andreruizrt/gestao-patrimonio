import { StyleSheet } from "react-native";
import { colors, metrics } from "../../globals";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  loginAndIconContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
    position: "relative",
    top: 70,
    left: 30,
    marginBottom: 40,
  },
  logoContainer: {
    flex: 2,
    margin: 40,
  },
  loginContainer: {
    flex: 3,
    margin: 10,
  },
  iconAndText: {
    width: 70,
    flexDirection: "row",
  },
  input: {
    width: 260,
    height: 40,
    paddingH: 5,
    margin: 6,
    borderWidth: 1,
    borderRadius: 10
  },
  button: {
    width: 270,
    height: metrics.screenHeight / 15,
    marginTop: 20,
    backgroundColor: colors.submitButton,
    borderRadius: 10
  },
  buttonText: {
    flex: 1,
    color: colors.submitButtonText,
    textAlign: "center",
    textAlignVertical: "center",
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  recuperarSenha: {
    flex: 4,
    margin: 40,
    position: "relative",
    top: 40,
    left: 80,
    textDecorationLine: "underline"
  }
});

export default styles;