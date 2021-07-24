import React from "react";
import { StyleSheet, Text } from "react-native";
import { AppStyles } from "../AppStyles";
import Loader from "./Loader";
import { Button } from "native-base";

const AuthLoaderButton = (props) => {
  return (
    <Button rounded onPress={props.onPress} style={styles.btn}>
      <Text style={styles.txt}>{props.text}</Text>
      <Loader size="small" color={AppStyles.color.white} />
    </Button>
  );
};

export default AuthLoaderButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: AppStyles.color.darkTheme,
    width: "70%",
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  txt: {
    color: "white",
    marginRight: 30,
  },
});
