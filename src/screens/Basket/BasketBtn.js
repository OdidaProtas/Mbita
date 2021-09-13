import React, { useRef, useState, useEffect } from "react";
import { View, AppState } from "react-native";
import { Badge, IconButton } from "react-native-paper";
import { StateContext } from "../../data/state/StateContext";
import * as SecureStore from "expo-secure-store";

const BasketBtn = ({ navigation }) => {
  const [{ basket }] = React.useContext(StateContext);
  const appState = useRef(AppState.currentState);
  const [, setAppStateVisible] = useState(appState.current);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          console.log("App has come to the foreground!");
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        if (appState.current === "background") {
          basket = await SecureStore.setItemAsync(
            "basket",
            JSON.stringify(basket)
          );
        }
      }
    );

    return () => {
      subscription?.remove();
    };
  }, [basket]);
  return (
    <View>
      <IconButton
        size={27}
        color="#632B30"
        onPress={() => navigation.navigate("Basket")}
        icon="shopping"
      />
      <Badge style={{ position: "absolute", top: 9, right: 6 }}>
        {Object.keys(basket).length}
      </Badge>
    </View>
  );
};

export default BasketBtn;
