import { StyleSheet } from "react-native";
import { colors, metrics } from "../../globals";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  profileContainer: {
    marginBottom: 60,
    alignSelf: 'center',    
    zIndex: 1,
  }
});

export default styles;