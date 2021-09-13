import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, IconButton } from "react-native-paper";
import AuthContext from "../../data/auth/authContext";

const AccountWidget = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <View style={styles.footer}>
        <IconButton
          onPress={() => navigation.navigate("Scan")}
          icon="qrcode-scan"
        />
        <IconButton
        size={30}
          onPress={() => navigation.navigate("Account")}
          icon="account-circle"
        />
      </View>
    </>
  );
};

export default AccountWidget;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 18,
    paddingHorizontal: 18,
  },
});
