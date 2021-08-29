import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";
import PaymentActionSheet from "./PaymentActionSheet";

const SummaryWidet = ({navigation}) => {
  const styles = useStyles;
  return (
    <View style={styles.root}>
      <Title>summary</Title>
      <Text>Amount: Ksh. 300</Text>
      <Button>Add to basket</Button>
      <PaymentActionSheet navigation={navigation}/>
    </View>
  );
};

export default SummaryWidet;

const useStyles = StyleSheet.create({
  root: {
    padding: 18,
  },
});
