import React from "react";
import {View, Text, StyleSheet} from "react-native";

const QuantityWidget = () => {
    const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Select Quantity</Text>
    </View>
  );
};

export default QuantityWidget;

const useStyles = StyleSheet.create({
    root:{
        padding: 9
    }
})
