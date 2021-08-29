import React, { useReducer, useEffect, useMemo } from "react";
import AppContainer from "./src/navigations/AppNavigation";
import * as SecureStore from 'expo-secure-store';
import AuthContext from "./src/data/auth/authContext";
import AuthNavigator from "./src/screens/Auth/AuthNavigator";

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
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
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        console.log("restoring token failed");
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy_auth_token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy_auth_token" });
      },
      userToken:()=> state.userToken
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken ===null|| state.userToken===undefined? (<AuthNavigator/>):(<AppContainer />)}
    </AuthContext.Provider>
  );
}
