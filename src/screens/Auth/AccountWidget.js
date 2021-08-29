import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import AuthContext from "../../data/auth/authContext";

const AccountWidget = () => {
    const {signOut}= useContext(AuthContext);
  return (
      <Button onPress={signOut} style={styles.logout} icon="exit-to-app">Logout</Button>
  );
};

export default AccountWidget;

const styles= StyleSheet.create({
logout:{
    position:"absolute",
    bottom:-200,
    left:24
}
})
