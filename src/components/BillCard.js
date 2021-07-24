import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppStyles } from "../AppStyles";
import {
  AntDesign,
} from "@expo/vector-icons";
import { CardItem } from "native-base";


const BillCard = (props) => {
  return (
    <View style={styles.GridViewBlockStyle}>
      <CardItem
        button
        onPress={() => {
          props.billHandler(props.item);
        }}
        style={styles.cardItem}
      >
        <View style={{ ...styles.iconContainer, backgroundColor: "#d3d3d3" }}>
          <AntDesign name="idcard" size={17} color={AppStyles.color.darkTheme} />
        </View>
        <Text style={styles.txt}>{props.name}</Text>
      </CardItem>
    </View>
  );
};

export default BillCard;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: AppStyles.color.white,
    borderColor: "red",
    borderRadius: 100,
    height: 40,
    width: 40,
  },
  cardItem: {
    marginLeft: 10,
  },
  txt: {
    marginLeft: 15,
    textAlign: "center",
    fontSize: 17,
  },
  GridViewBlockStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    height: 68,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#ffff",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
