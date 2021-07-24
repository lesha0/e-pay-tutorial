import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppStyles } from "../AppStyles";
import {
  Ionicons,
  Fontisto,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";


const renderIcon = (iconType, iconName) => {
  switch (iconType) {
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={iconName}
          size={35}
          color={AppStyles.color.darkTheme}
        />
      );
    case "Feather":
      return (
        <Feather name={iconName} size={35} color={AppStyles.color.darkTheme} />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          name={iconName}
          size={30}
          color={AppStyles.color.darkTheme}
        />
      );
    case "FontAwesome5":
      return (
        <FontAwesome5
          name={iconName}
          size={30}
          color={AppStyles.color.darkTheme}
        />
      );
    case "AntDesign":
      return (
        <AntDesign
          name={iconName}
          size={30}
          color={AppStyles.color.darkTheme}
        />
      );
    case "MaterialIcons":
      return (
        <MaterialIcons
          name={iconName}
          size={30}
          color={AppStyles.color.darkTheme}
        />
      );
    case "Ionicons":
      return (
        <Ionicons name={iconName} size={35} color={AppStyles.color.darkTheme} />
      );
    case "Fontisto":
      return (
        <Fontisto name={iconName} size={35} color={AppStyles.color.darkTheme} />
      );

    default:
      break;
  }
};

const CardContainer = (props) => {
  return (
    <View style={{ ...styles.GridViewBlockStyle }}>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: AppStyles.color.white,
        }}
      >
        {renderIcon(props.iconType, props.iconName)}
      </View>
      <Text style={styles.txt}>{props.text}</Text>
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: AppStyles.color.white,
    borderRadius: 100,
    height: 70,
    width: 70,
  },
  txt: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  GridViewBlockStyle: {
    borderTopWidth: 3,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 150,
    margin: 15,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 0.5,
  },
});
