import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, TextInput } from "react-native-paper";

const ShapeWidet = () => {
  const [text, setText] = React.useState("");

  const styles = useStyles;
  return (
    <View style={styles.root}>
      <Title>Custom shape</Title>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default ShapeWidet;

const useStyles = StyleSheet.create({
  root: {
    padding: 9,
  },
});
