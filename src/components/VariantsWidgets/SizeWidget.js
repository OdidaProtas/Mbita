import React from "react";
import {View, Text, StyleSheet} from "react-native";

const SizeWidget = () => {
    const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Select Size</Text>
    </View>
  );
};

export default SizeWidget;

const useStyles = StyleSheet.create({
    root:{
        padding: 9
    }
})
