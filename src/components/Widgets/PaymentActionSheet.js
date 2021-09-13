import React from "react";
import ActionSheet from "react-native-actionsheet";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default class PaymentActionSheet extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show({useNativeDriver:true});
  };

  options = [ 
    'Mpesa',
    'Pay On Delivery', 
    'Cancel'
  ]
 
  render() {
    return (
      <View>
        <Button onPress={this.showActionSheet}>Buy Now</Button>
        <ActionSheet
          ref={(o) => (this.ActionSheet = o)}
          title={"Pay with"}
          options={this.options}
          cancelButtonIndex={2}
          destructiveButtonIndex={2}
          useNativeDriver={false}
          onPress={(index) => { 
            this.props.navigation.navigate("Order");
          }}
        />
      </View>
    );
  }
}


const styles = {
    titleBox: {
        background: 'pink'
      },
      titleText: {
        fontSize: 16,
        color: '#000'
      } 
}