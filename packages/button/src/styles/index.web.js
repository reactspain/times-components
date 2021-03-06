import { StyleSheet } from "react-native";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  button: {
    ...sharedStyles.button,
    width: 160
  },
  textStyle: {
    ...sharedStyles.textStyle,
    paddingTop: 1
  }
});

export default styles;
