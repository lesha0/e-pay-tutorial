import React from "react";
import { StyleSheet } from "react-native";
import { AppStyles } from "../AppStyles";
import { Button, Text } from "native-base";

const TintButton = (props) => {
  return (
    <Button rounded bordered onPress={props.onPress} style={styles.btn}>
      <Text style={styles.txt}>{props.text}</Text>
    </Button>
  );
};

export default TintButton;

const styles = StyleSheet.create({
  btn: {
    borderColor: AppStyles.color.darkTheme,
    backgroundColor: AppStyles.color.white,
    width: "70%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
  },
  txt: {
    color: AppStyles.color.darkTheme,
  },
});
