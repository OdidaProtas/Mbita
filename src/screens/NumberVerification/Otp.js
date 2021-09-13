import React, { Component, useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Title, Caption, Button, Text, Paragraph } from "react-native-paper";
import AuthContext from "../../data/auth/authContext";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CountDown = (props) => {
  const [state, setState] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (state >= 1) {
        setState((prevState) => prevState - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [state, setState]);
  return (
    <View style={{ marginTop: 18 }}>
      {state >= 1 ? (
        <Button disabled>Resend in {state} seconds</Button>
      ) : (
        <Button onPress={() => setState(60)}>Resend</Button>
      )}
    </View>
  );
};

const VerifyOtBtn = ({ code }) => {
  const { signIn } = useContext(AuthContext);

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleSignIn = () => {
    if (value.length < 4) {
      setError(true);
    } else {
      signIn(code);
    }
  };

  const handleChange = (e) => {
    setError(false);
    setValue(e);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "flex-start" }}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={handleChange}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoFocus
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      {error ? (
        <Caption style={{ color: "red" }}>Please Provide an Otp</Caption>
      ) : null}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CountDown />
        <Button
          onPress={handleSignIn}
          style={{ elevation: 0, margin: 18 }}
          mode="contained"
        >
          Submit
        </Button>
      </View>
    </View>
  );
};

export default class LoginConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      international: "",
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <Paragraph style={{ marginTop: 10 }}>Artik</Paragraph>
        <Title style={{ marginTop: 9, marginBottom: 9 }}>
          Verify your phone number
        </Title>
        <Caption>Enter verification code</Caption>
        <VerifyOtBtn code={this.props.navigation.getParam("code")} />
      </View>
    );
  }
}
const CELL_COUNT = 4;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 9,
    paddingTop: 108,
    flex: 1,
  },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#00000030",
    textAlign: "center",
    marginRight: 9,
    borderRadius: 2,
  },
  focusCell: {
    borderColor: "#000",
  },
});
