import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { AppStyles } from "../AppStyles";

const FormButton = (props) => {
  return (
    <Button block style={styles.formBtn} onPress={props.onPress}>
      <Text style={{ color: "#ffff" }}>{props.text}</Text>
    </Button>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  formBtn: {
    backgroundColor: AppStyles.color.darkTheme,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
});
