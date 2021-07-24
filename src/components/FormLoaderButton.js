import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "native-base";
import { AppStyles } from "../AppStyles";
import Loader from "../components/Loader";

const FormLoaderButton = (props) => {
  return (
    <Button block style={styles.formBtn}>
      <Text style={styles.txt}>{props.text}</Text>
      <Loader size="small" color={AppStyles.color.white} />
    </Button>
  );
};
export default FormLoaderButton;

const styles = StyleSheet.create({
  formBtn: {
    backgroundColor: AppStyles.color.darkTheme,
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  txt: {
    color: "white",
    marginRight: 30,
  },
});
