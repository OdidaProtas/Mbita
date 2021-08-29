import React from "react";
import {View, Text, StyleSheet} from "react-native";

const DateWidget = () => {
    const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Schedule</Text>
    </View>
  );
};

export default DateWidget;

const useStyles = StyleSheet.create({
    root:{
        padding: 9
    }
})
