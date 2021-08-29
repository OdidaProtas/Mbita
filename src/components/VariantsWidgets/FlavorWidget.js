import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

const FlavorWidget = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default FlavorWidget;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center"
  }
});