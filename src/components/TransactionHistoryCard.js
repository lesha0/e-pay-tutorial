import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { CardItem } from "native-base";
import { Entypo } from "@expo/vector-icons";

const renderLogo = (param) => {
  switch (param) {
    case "M-pesa":
      return (
        <Image
          source={require("../../assets/mpesa.png")}
          style={[{ height: 40, width: 60, margin: 0 }]}
        />
      );
    case "Co-operative Bank":
      return (
        <Image
          source={require("../../assets/co-op.png")}
          style={[{ height: 40, width: 40, margin: 0 }]}
        />
      );

    default:
      break;
  }
};

const TransactionHistoryCard = (props) => {
  let str1 = props.data.account_number;
  let str2 = str1.slice(-4);

  return (
    <View style={styles.card}>
      <CardItem>
        <View style={styles.mainContainer}>
          <View>
            {props.data.mode === "M-pesa"
              ? renderLogo(props.data.mode)
              : renderLogo(props.data.bank_name)}
            <Text style={[{ color: "#696969", marginTop: -3 }]}>...{str2}</Text>
          </View>
        </View>
        <View style={styles.containerTwo}>
          <Text style={[{ fontWeight: "bold" }]}>{props.data.paid_for}</Text>
          <Text style={[{ color: "#696969", marginTop: 5 }]}>
            {props.data.createdAt}
          </Text>
        </View>
        <View style={styles.containerThree}>
          <Text style={[{ color: "black" }]}>Ksh {props.data.amount}</Text>
        </View>
        <View style={styles.containerFour}>
          <TouchableOpacity
            onPress={() => {
              props.navigator(props.data);
            }}
            // style={styles.containerFour}
          >
            <Entypo name="chevron-right" size={35} color="#696969" />
          </TouchableOpacity>
        </View>
      </CardItem>
    </View>
  );
};

export default TransactionHistoryCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: "#AEBBC3",
  },
  mainContainer: {
    width: "25%",
    height: "100%",
    flexDirection: "column",
  },
  containerTwo: {
    width: "40%",
    height: "100%",
    flexDirection: "column",
  },
  containerThree: {
    width: "20%",
    height: "100%",
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  containerFour: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
