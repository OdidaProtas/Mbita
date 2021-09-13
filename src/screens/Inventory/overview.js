import React, { Component } from "react";
import { View, Text } from "react-native";
import { Caption, Paragraph } from "react-native-paper";

export default class OverView extends Component {
  render() {
    return (
      <View>
        <View
          style={{ padding: 3, alignItems: "center" }}
        >
          <Text>Summary</Text>
        </View>
        <View style={{ paddingHorizontal: 72 }}>
          <Paragraph>
            <Caption>Products </Caption> 35
          </Paragraph>
          <Paragraph>
            <Caption>Orders </Caption> 5
          </Paragraph>
          <Paragraph>
            <Caption>Issues </Caption> 9
          </Paragraph>
          <Paragraph>
            <Caption>ThemeColor </Caption> "#fff"
          </Paragraph>
        </View>
      </View>
    );
  }
}
