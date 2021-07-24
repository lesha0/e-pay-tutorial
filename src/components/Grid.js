import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { AppStyles } from "../AppStyles";
import CardContainer from "./CardContainer";

const Grid = (props) => {
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={props.gridViewItems}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                props.navigator(item);
              }}
            >
              <View style={styles.GridViewBlockStyle}>
                <CardContainer
                  iconName={item.iconName}
                  iconType={item.iconType}
                  text={item.text}
                  params={item.params}
                  iconBackground={item.iconBackground}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        numColumns={props.numColumns}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    backgroundColor:AppStyles.color.background,
    // margin: 10,
    marginTop: 10,
    // padding:10,
    padding:20,
    // paddingTop: Platform.OS === "ios" ? 20 : 0,
    // borderWidth: 2,
    borderColor: "blue",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 150,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
});

