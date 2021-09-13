import React, { Component } from "react";
import { View } from "react-native";
import LoginConfirm from "./LoginConfirm";
import Otp from "./Otp";

export default class NumberVerification extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginConfirm navigation={this.props.navigation} />
      </View>
    );
  }
}
