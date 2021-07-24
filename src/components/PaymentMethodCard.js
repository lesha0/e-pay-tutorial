import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card, CardItem, Left } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PaymentMethodCard = (props) => {
  let str1 = props.data.accountNumber;
  let str2 = str1.slice(-4);
  return (
    <Card style={{ borderRadius: 5 }}>
      <CardItem
        button
        onPress={() => {
          props.paymentMethodHandler(props.data);
        }}
        style={{ borderWidth: 0, height: 60, borderRadius: 5 }}
      >
        <Left>
          <View style={{ width: "10%" }}>
            <Image
              source={props.data.image}
              style={[
                {
                  height: props.data.height,
                  width: props.data.width,
                  margin: 0,
                },
              ]}
            />
          </View>
          <View style={{ marginLeft: 40, paddingLeft: 10 }}>
            <View style={{ ...styles.container }}>
              <Text style={{ ...styles.lightTxt, fontSize: 16 }}>
                {props.data.name}{" "}
              </Text>
              <Text style={{ ...styles.lightTxt, fontSize: 13 }}>
                Ending {str2}
              </Text>
            </View>
          </View>
        </Left>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "",
              "Are you sure you delete this account?",
              [
                ,
                {
                  text: "No",
                  // onPress: () => console.log('Cancel Pressed'),
                  style: "cancel",
                },
                {
                  text: "Yes",
                  // onPress: () =>  startLogout(),
                },
              ],
              { cancelable: false }
            );
            // navigation.navigate('Home');
            // navigation.closeDrawer();
          }}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="delete" size={35} color="#AEBBC3" />
          </View>
        </TouchableOpacity>
      </CardItem>
    </Card>
  );
};

export default PaymentMethodCard;

const styles = StyleSheet.create({
  boldTxt: {
    fontWeight: "bold",
  },
  lightTxt: {
    // color:AppStyles.color.grey,
  },

  container: {
    flexDirection: "column",
  },

  iconContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
