import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, StatusBar, ActivityIndicator, View } from "react-native";
import { Title } from "react-native-paper";

const Loader = ({ navigation }) => (
  <View
    style={[
      styles.loaderContainer,
      { backgroundColor: navigation.getParam("themeColor") },
    ]}
  >
    <ActivityIndicator size="large" color="#564D65" />
    <Title style={{ alignSelf: "center" }}>{navigation.getParam("name")}</Title>
  </View>
);

export default class ExternalApps extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false,
  });
  render() {
    const url = this.props.navigation.getParam("web_url");
    return (
      <WebView
        startInLoadingState={true}
        renderLoading={() => <Loader {...this.props} />}
        style={styles.container}
        source={{ uri: url }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
