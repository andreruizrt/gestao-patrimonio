import { StyleSheet } from "react-native";
import { colors } from "../../globals";

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
  },
  logoContainer: {
    flex: 2,
  },
  loginContainer: {
    flex: 3,
  },
  input: {
    width: 260,
    height: 40,
    padding: 5,
    margin: 6,
    borderWidth: 1,
  },
  button: {
    width: 270,
    height: 36,
    marginTop: 20,
    backgroundColor: colors.submitButton,
    borderRadius: "10px"
  },
  buttonText: {
    flex: 1,
    top: 10,
    color: colors.submitButtonText,
    textAlign: "center",
    textAlignVertical: "center"
  },
  iconAndText: {
    width: 70,
    flexDirection: "row",
    position: "relative",
    top: 20,
    borderWidth: 2,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "0.7",
  }
});

export default styles;