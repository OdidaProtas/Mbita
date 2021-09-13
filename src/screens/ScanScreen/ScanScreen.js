import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { BarCodeScanner } from "expo-barcode-scanner";

function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

export default class ScanScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Scan",
    headerRight: () => (
      <IconButton
        icon="shopping"
        size={25}
        onPress={() => navigation.navigate("Basket")}
        style={{ marginRight: 9 }}
      />
    ),
  });

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Scanner navigation={navigation} />
        <IconButton style={styles.iconBtn} icon="link" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 420,
    marginTop: 20,
  },
  iconBtn: {
    alignSelf: "center",
    marginTop: 100,
  },
});
