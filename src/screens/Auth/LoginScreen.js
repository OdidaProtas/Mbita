import React from "react";
import { View, StyleSheet } from "react-native";
import { Button , Title} from "react-native-paper";
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("category")
  });

  async googleLogin(){

  }

  async logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '',
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <Title style={styles.title}>Welcome</Title>
        <Button onPress={this.logIn} style={styles.fbBtn}>
          Login With facebook
        </Button>
        <Button onPress={this.googleLogin} style={styles.fbBtn}>
          Login With Google
        </Button>
      </View>
    );
  }
}

// LogBox.ignoreAllLogs();

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  fbBtn: {
    marginTop: 470,
    alignSelf:"center"
  },
  title:{
      alignSelf: "center",
      marginTop: 180
  }
});
