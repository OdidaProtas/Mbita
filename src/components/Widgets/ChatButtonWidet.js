import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const ChatButtonWidget = (props) => {
  const { navigation, themeColor } = props;
  return (
    <FAB
      style={styles.fab}
      icon="chat"
      onPress={() => navigation.navigate("Chat")}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    elevation: 0,
  },
});

export default ChatButtonWidget;
