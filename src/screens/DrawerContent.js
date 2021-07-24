import React from "react";
import { Alert } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import call from "react-native-phone-call";
import { Ionicons, Feather } from "@expo/vector-icons";
import { AppStyles } from "../AppStyles";
import { logout } from "../actions/auth";
import { connect } from "react-redux";

export const DrawerContent = (props) => {
  const { navigation, logout } = props;

  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        activeTintColor={AppStyles.color.grey}
        inactiveTintColor={AppStyles.color.grey}
        icon={() => (
          <Feather
            name="help-circle"
            size={20}
            color={AppStyles.color.darkTheme}
          />
        )}
        onPress={() => {
          const args = {
            number: "+254701694004", // String value with the number to call
            prompt: true, // Optional boolean property. Determines if the user should be prompt prior to the call
          };

          call(args).catch(console.error);
          // navigation.navigate('Home');
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Logout"
        activeTintColor={AppStyles.color.grey}
        inactiveTintColor={AppStyles.color.grey}
        icon={() => (
          <Ionicons
            name="ios-log-out"
            color={AppStyles.color.darkTheme}
            size={20}
          />
        )}
        onPress={() => {
          Alert.alert(
            "",
            "Are you sure you want to logout?",
            [
              ,
              {
                text: "No",
                // onPress: () => console.log('Cancel Pressed'),
                style: "cancel",
              },
              {
                text: "Yes",
                onPress: () => logout(),
              },
            ],
            { cancelable: false }
          );
          navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  logout: () => dispatch(logout()),
});
export default connect(undefined, mapDispatchToProps)(DrawerContent);
