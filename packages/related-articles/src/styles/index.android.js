import { StyleSheet } from "react-native";
import { spacing } from "@times-components/styleguide";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  ...sharedStyles,
  headline: {
    ...sharedStyles.headline,
    lineHeight: 28,
    marginTop: spacing(-1)
  },
  opinionByline: {
    ...sharedStyles.opinionByline,
    lineHeight: 28,
    marginTop: spacing(-1)
  }
});

export default styles;
