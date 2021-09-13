import axios from "axios";
import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Title, Caption, Button, Paragraph } from "react-native-paper";
import { firebase, auth } from "../../data/firebase/firebase";

export default class LoginConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      international: "",
      error: false,
    };
    this.phoneField;
  }

  sendRequest = async () => {
    try {
    } catch (e) {
      Alert.alert("An error occured");
    }
  };

  handleRequest = () => {
    if (isValid(this.phoneField.getRawValue())) {
      const code = this.props.navigation.getParam("code");
      this.props.navigation.navigate("Otp", { code });
      axios.post("https://artikky.herokuapp.com/auth", {
        phoneNumber: this.phoneField.getRawValue(),
      });
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <View style={styles.root}>
        <Paragraph style={{ marginTop: 10 }}>Artik</Paragraph>
        <Title style={{ marginTop: 9, marginBottom: 9 }}>
          Verify your phone number
        </Title>
        <Caption>Enter phone number to receive a verification code</Caption>
        <TextInputMask
          autoFocus
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(07)",
          }}
          value={this.state.international}
          onChangeText={(text) => {
            this.setState({
              international: text,
              error: false,
            });
          }}
          ref={(ref) => (this.phoneField = ref)}
        />
        {this.state.error && (
          <Caption style={{ color: "red" }}>
            Please use a valid phone number. 07XX..
          </Caption>
        )}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <Button
            onPress={this.handleRequest}
            style={{ elevation: 0, margin: 18 }}
            mode="contained"
          >
            Send Otp
          </Button>
        </View>
      </View>
    );
  }
}

const isValid = (number) => {
  let phoneNumber = parseInt(number);
  let pattern =
    /^(?:254|\+254|0)?((?:1|7)?(?:(?:[0124569][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
  return pattern.test(phoneNumber);
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 9,
    paddingTop: 108,
    flex: 1,
  },
});
