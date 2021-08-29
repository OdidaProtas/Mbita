import React from "react";
import {View, Text, StyleSheet} from "react-native";



const ColorWidget = () => {
    const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Select Color</Text>
    </View>
  );
};

export default ColorWidget;

const useStyles = StyleSheet.create({
    root:{
        padding: 9
    }
})
