import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Paragraph } from "react-native-paper";

export default function App() {
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
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <View style={{ marginTop: 36 }}>
          <View style={{ alignItems: "center" }}>
            <Paragraph>Product Has not been registered</Paragraph>
          </View>
          <Button style={{ marginTop: 48 }} onPress={() => setScanned(false)}>
            Tap to Scan Again
          </Button>
        </View>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ aspectRatio: 2 / 3 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
