import React from "react";
import {View, Text, StyleSheet} from "react-native";

const DeliveryWidget = () => {
    const styles = useStyles;
  return (
    <View style={styles.root}>
      <Text>Delivery Informaion</Text>
    </View>
  );
};

export default DeliveryWidget;

const useStyles = StyleSheet.create({
    root:{
        padding: 9
    }
})
