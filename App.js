import React, { useReducer, useEffect, useMemo } from "react";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import AppContainer from "./src/navigations/AppNavigation";
import * as SecureStore from "expo-secure-store";
import AuthContext from "./src/data/auth/authContext";
import AuthNavigator from "./src/screens/Auth/AuthNavigator";
import reducer from "./src/data/state/reducer";
import { initialState, StateContext } from "./src/data/state/StateContext";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#632B30",
    accent: "#D5B0AC",
    text:"#632B30"
  },
};

export default function App() {
  const [store, manager] = useReducer(reducer, initialState);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            isSignOut: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignOut: true,
            userToken: action.token,
          };
        case "ADD_TO_BASKET":
          return {
            ...prevState,
            basket: {
              ...state.basket,
              [action.id]: { ...action.item, quantity: action.quantity },
            },
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
      products: [],
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      let basket;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
        basket = await SecureStore.getItemAsync("basket");
      } catch (e) {
        console.log("restoring token failed");
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
      manager({ type: "RESTORE_BASKET", payload: JSON.parse(basket) });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        await SecureStore.setItemAsync("userToken", data);
        dispatch({ type: "SIGN_IN", token: data });
      },
      signOut: async () => {
        await SecureStore.deleteItemAsync("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
      userToken: () => state.userToken,
    }),
    []
  );

  return (
    <PaperProvider theme={theme}>
      <StateContext.Provider value={[store, manager]}>
        <AuthContext.Provider value={authContext}>
          {state.userToken === null || state.userToken === undefined ? (
            <AuthNavigator />
          ) : (
            <AppContainer />
          )}
        </AuthContext.Provider>
      </StateContext.Provider>
    </PaperProvider>
  );
}
