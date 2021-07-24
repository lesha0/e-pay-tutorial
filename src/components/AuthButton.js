import React from "react";
import { StyleSheet } from "react-native";
import { AppStyles } from "../AppStyles";
import { Button, Text } from "native-base";

const AuthButton = (props) => {
  return (
    <Button rounded onPress={props.onPress} style={styles.btn}>
      <Text>{props.text}</Text>
    </Button>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: AppStyles.color.darkTheme,
    width: "70%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
