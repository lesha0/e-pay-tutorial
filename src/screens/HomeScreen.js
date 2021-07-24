import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import call from "react-native-phone-call";
import Grid from "../components/Grid";
import LoaderScreen from "../components/LoaderScreen";
import { AppStyles } from "../AppStyles";

const gridData = [
  {
    params: { title: "Pay" },
    navigateTo: "Bill Manager",
    text: "Pay",
    iconName: "coins",
    iconType: "FontAwesome5",
    iconBackground: AppStyles.color.darkTheme,
  },
  {
    navigateTo: "Charges",
    text: "Charges",
    iconName: "payments",
    iconType: "MaterialIcons",
    iconBackground: AppStyles.color.darkTheme,
  },
  {
    navigateTo: "History",
    text: "My Transactions",
    iconName: "file-alt",
    iconType: "FontAwesome5",
    iconBackground: AppStyles.color.darkTheme,
  },
  {
    navigateTo: "Help",
    text: "Help",
    iconName: "help-circle",
    iconType: "Feather",
    iconBackground: AppStyles.color.darkTheme,
  },
];

const HomeScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gridViewItems, setGridViewItems] = useState([]);

  useEffect(() => {
    setGridViewItems(gridData);
    setIsLoading(false);
  }, []);

  const navigateHelper = (route) => {
    if (route.navigateTo === "Help") {
      const args = {
        number: "+254701694004", // String value with the number to call
        prompt: true, // Optional boolean property. Determines if the user should be prompt prior to the call
      };

      return call(args).catch(console.error);
    } else {
      props.navigation.navigate(route.navigateTo, {
        item: route.params,
      });
    }
  };
  if (isLoading) return <LoaderScreen />;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: AppStyles.color.darkTheme }}
    >
      <Grid
        gridViewItems={gridViewItems}
        navigator={navigateHelper}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: AppStyles.color.darkTheme,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    backgroundColor: AppStyles.color.background,
  },
  banner: {
    backgroundColor: AppStyles.color.darkTheme,
    height: 100,
  },
  gridContainer: {
    // borderTopLeftRadius: 30,
    borderWidth: 2,
    borderColor: "black",
  },
});
