import React from "react";
import ActionSheet from "react-native-actionsheet";
import { View } from "react-native";
import { Button } from "react-native-paper";
import numberWithCommas from "../../data/formatNumber";

export default class QuantityWidget extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show({ useNativeDriver: true });
  };

  constructor(props) {
    super(props);
    this.unit = this.props.unit;
    this.handlePress = this.props.handlePressQuantity;
    this.price = this.props.price;
  }

  options = ["1", "Cancel"];

  render() {
    const { quantity, text } = this.unit;
    const { amount, prefix } = this.price;
    return (
      <View>
        <Button
          theme={{ colors: { primary: this.props.theme } }}
          icon="arrow-down-drop-circle"
          onPress={this.showActionSheet}
          mode="contained"
          style={{ elevation: 0 }}
        >
          Select quantity
        </Button>
        <ActionSheet
          ref={(o) => (this.ActionSheet = o)}
          title={`Available options`}
          options={this.options.map((option, index) => {
            if (index === this.options.length - 1) {
              return option;
            }
            return `${
              option * quantity
            } ${text} - ${prefix}. ${numberWithCommas(amount * option)}`;
          })}
          cancelButtonIndex={this.options.length - 1}
          destructiveButtonIndex={this.options.length - 1}
          useNativeDriver={false}
          onPress={this.handlePressWidget}
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
