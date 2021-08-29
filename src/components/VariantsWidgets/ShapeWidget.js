import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ShapeWidet = () => {
    const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Select shape</Text>
    </View>
  );
};

export default ShapeWidet;

const useStyles = StyleSheet.create({
    root:{
        padding: 9
    }
})
