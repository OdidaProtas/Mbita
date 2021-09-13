import React, { Component } from "react";
import { View, Share } from "react-native";
import { QRCode, Canvas } from "easyqrcode-react-native";
import { IconButton } from "react-native-paper";

export default class ShareScreen extends Component {
  generateQRCode = (canvas) => {
    if (canvas !== null) {
      var options = {
        text: "www.easyproject.cn/donation",
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H,
      };
      var qrCode = new QRCode(canvas, options);
    }
  };

  render() {
    return (
      <View style={{ alignItems: "center", paddingTop: 18 }}>
        <Canvas ref={this.generateQRCode} />
        <IconButton icon="link" />
      </View>
    );
  }
}
