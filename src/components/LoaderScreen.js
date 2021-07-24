import React from "react";
import { StyleSheet,View } from "react-native";
import { AppStyles } from "../AppStyles";
import Loader from "./Loader";

const LoaderScreen = (props) => {
  return (
    <View style={styles.loader}>
      <Loader size={60} color={AppStyles.color.darkTheme} />
    </View>
  );
};

export default LoaderScreen;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
