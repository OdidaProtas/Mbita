import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { QRCode, Canvas } from "easyqrcode-react-native";
import AuthContext from "../../data/auth/authContext";
import { Button } from "react-native-paper";

class PersonalTabQrCode extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.route.navigation;
  }

  generateQRCode = (canvas) => {
    if (canvas !== null) {
      var options = {
        height: 144,
        width: 144,
        text: "www.easyproject.cn/donation",
      };
      var qrCode = new QRCode(canvas, options);
    }
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text>First Name</Text>
          <View style={{ paddingTop: 36 }}>
            <Canvas ref={this.generateQRCode} />
          </View>
        </View>
      </View>
    );
  }
}

export default function PersonalTab(props) {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <PersonalTabQrCode {...props} />
      <View style={{ alignItems: "center" }}>
        <Button onPress={signOut} style={{ marginTop: 144 }}>
          Sign 0ut
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 18,
  },
  header: {
    alignItems: "center",
  },
});
