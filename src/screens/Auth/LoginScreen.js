import React, { useEffect, useContext } from "react";
import { View, StyleSheet, LogBox, Pressable } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import AuthContext from "../../data/auth/authContext";
import LottieView from "lottie-react-native";

WebBrowser.maybeCompleteAuthSession();

function FBSignIN({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "570471834296929",
    responseType: ResponseType.Code,
    permissions: ["public_profile"],
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      navigation.navigate("Verification", { code });
      // signIn(code);
    }
  }, [response]);

  return (
    <Button
      uppercase={false}
      style={styles.fbBtn}
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
      icon="facebook"
      theme={{ colors: { primary: "#fff" } }}
    >
      LOG IN WITH FACEBOOK
    </Button>
  );
}

const GoogleSignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "831771932640-kgsb93kch15vbgk54aqogsa120tneidq.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      const { accessToken } = authentication;
      const code = accessToken;
      navigation.navigate("Verification", { code });
      // signIn(accessToken);
    }
  }, [response]);

  return (
    <Button
      onPress={() => {
        promptAsync();
      }}
      style={styles.gBtn}
      icon="google"
      theme={{ colors: { primary: "#fff" } }}
    >
      sign In With Google
    </Button>
  );
};

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("category"),
  });

  render() {
    return (
      <View style={styles.root}>
        <View style={{ margin: 36, alignItems: "center", marginTop: 0 }}>
          <Title style={{ color: "white" }}>Artik</Title>
        </View>
        <Paragraph style={styles.title}>Sign in to continue</Paragraph>
        <View style={{ paddingTop: 18, alignItems: "center" }}>
          <LottieView
            loop
            autoPlay
            style={{
              height: 144,
              width: 144,
              borderRadius: 2,
              marginBottom: 36,
            }}
            source={require("../../../assets/67207-green-delivery.json")}
          />
        </View>
        <FBSignIN navigation={this.props.navigation} />
        <GoogleSignIn navigation={this.props.navigation} />
      </View>
    );
  }
}

LogBox.ignoreAllLogs();

const styles = StyleSheet.create({
  root: {
    // backgroundColor: "#30343F",
  },
  fbBtn: {
    // marginTop: 0,
    alignSelf: "center",
  },
  title: {
    alignSelf: "center",
    color: "#fff",
  },
  gBtn: {
    marginTop: 10,
    alignSelf: "center",
  },
});
