import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep";
import ConfirmCheckout from "./ConfirmCheckout";
import DeliveryStep from "./DeliveryStep";
import PaymentStep from "./PaymentStep";

const allSteps = [
  { name: "step 1", component: DeliveryStep },
  { name: "step 3", component: ConfirmCheckout },
];

export default class PaymentScreen extends Component {
  onNext = () => {
    console.log("Next");
  };

  onBack = () => {
    console.log("Back");
  };

  finish = (finalState) => {
    console.log(finalState);
  };

  render() {
    return (
      <View style={styles.root}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingTop: 12 },
});
