import React from "react";
import ActionSheet from "react-native-actionsheet";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default class SizeWidet extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show({ useNativeDriver: true });
  };

  options = ["1kg", "2kg", "3kg", "4kg", "5kg", "Cancel"];

  render() {
    return (
      <View style={{marginBottom:18}}>
        <Button
          style={{ marginTop: 19 }}
          icon="arrow-down-drop-circle"
          onPress={this.showActionSheet}
        >
          Select Size
        </Button>
        <ActionSheet
          ref={(o) => (this.ActionSheet = o)}
          title="Available Options"
          options={this.options}
          cancelButtonIndex={5}
          destructiveButtonIndex={5}
          useNativeDriver={false}
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
