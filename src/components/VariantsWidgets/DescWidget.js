import React from "react";
import {View, Text, StyleSheet} from "react-native";

const DescWidget = () => {
    const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Text Customization</Text>
      <Text>Desc </Text>
    </View>
  );
};

export default DescWidget;

const useStyles = StyleSheet.create({
    root:{
        padding: 9
    }
})
