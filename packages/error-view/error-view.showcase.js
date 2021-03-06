/* eslint-disable react/prefer-stateless-function, react/require-render-return, react/no-multi-comp */

import React, { Component } from "react";
import { View, ViewPropTypes, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { fontSizes } from "@times-components/styleguide";
import ErrorView from "./src/error-view";

const { style: ViewPropTypesStyle } = ViewPropTypes;

class BadComponent extends Component {
  render() {
    throw new Error("oh no");
  }
}

const styles = StyleSheet.create({
  text: { color: "white", fontSize: fontSizes.smallestHeadline },
  background: {
    backgroundColor: "red"
  },
  customError: {
    width: 400,
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  }
});

const ErrorState = ({ error: { message }, style }) => (
  <View style={[styles.background, style]}>
    <Text style={styles.text}>Err Message: {message}</Text>
  </View>
);

ErrorState.defaultProps = {
  error: null,
  style: {}
};

ErrorState.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    stack: PropTypes.string
  }),
  style: ViewPropTypesStyle
};

class FiresOnError extends Component {
  componentDidMount() {
    setTimeout(() => this.props.onError(new Error("async error")), 500);
  }

  render() {
    return <Text>Fires errors</Text>;
  }
}

FiresOnError.propTypes = {
  onError: PropTypes.func.isRequired
};

export default {
  name: "Primitives/Error View",
  children: [
    {
      type: "story",
      name: "handles a component that errors",
      component: () => (
        <ErrorView>
          {({ hasError, error }) =>
            hasError ? (
              <ErrorState error={error} style={styles.customError} />
            ) : (
              <BadComponent />
            )
          }
        </ErrorView>
      )
    },
    {
      type: "story",
      name: "handles a component that fires onError",
      component: () => (
        <ErrorView>
          {({ hasError, onError, error }) =>
            hasError ? (
              <ErrorState error={error} style={styles.customError} />
            ) : (
              <FiresOnError onError={onError} />
            )
          }
        </ErrorView>
      )
    }
  ]
};
