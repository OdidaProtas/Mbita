import React from "react";
import ActionSheet from "react-native-actionsheet";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default class ColorWidget extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show({ useNativeDriver: true });
  };

  options = [
    <Text>Black</Text>,
    ,
    <Text style={{ color: "orange" }}>Orange</Text>,
    <Text style={{ color: "green" }}>Green</Text>,
    <Text style={{ color: "purple" }}>Purple</Text>,
    <Text style={{ color: "pink" }}>Pink</Text>,
    <Text style={{ color: "maroon" }}>Maroon</Text>,

    "Cancel",
  ];

  render() {
    return (
      <View style={{ marginBottom: 18 }}>
        <Button 
          style={{ marginTop: 19 }}
          icon="arrow-down-drop-circle"
          onPress={this.showActionSheet}
        >
          Select Color
        </Button>
        <ActionSheet
          ref={(o) => (this.ActionSheet = o)}
          title="Available Options"
          options={this.options}
          cancelButtonIndex={this.options.length -1}
          destructiveButtonIndex={this.options.length -1}
          useNativeDriver={true}
          onPress={(index) => {
            console.log(index);
          }}
        />
      </View>
    );
  }
}

const styles = {
  titleBox: {
    background: "pink",
  },
  titleText: {
    fontSize: 16,
    color: "#000",
  },
};
