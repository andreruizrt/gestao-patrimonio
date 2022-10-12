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
    alignSelf: 'center',    
    zIndex: 1,    
  }
});

export default styles;