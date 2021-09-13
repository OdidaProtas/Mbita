import React from "react";
import { View } from "react-native";


export default class DateWidget extends React.Component {


  render() {
    return (
      <View style={{ marginBottom: 18 }}>
        {/* <Button
          style={{ marginTop: 19 }}
          icon="calendar"
          onPress={this.showActionSheet}
        >
          Schedule
        </Button> */}
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
