import React, { Component } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

export default class DeliveryStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
    };
  }

  static getDerivedStateFromProps = (props) => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://artik-pay.web.app");
  };

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <View style={styles.centeredView}>
        <View>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Delivery Information</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 9,
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={this._handlePressButtonAsync}
                >
                  <Text style={styles.textStyle}>Continue</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width: 100,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    marginTop: 18,
    marginLeft: 6,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
