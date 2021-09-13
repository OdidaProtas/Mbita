import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const DescWidget = () => {
  const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Text Customization</Text>
      <TextInput></TextInput>
      <Text>Desc </Text>
      <TextInput />
    </View>
  );
};

export default DescWidget;

const useStyles = StyleSheet.create({
  root: {
    padding: 9,
  },
});
