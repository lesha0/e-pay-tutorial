import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card, CardItem, Left, Right, Badge } from "native-base";

const ChargeCard = (props) => {
  return (
    <Card style={styles.card}>
      <CardItem>
        <Left style={styles.left}>
          <Text style={[{ fontWeight: "bold" }]}>{props.data.name}</Text>
          <Text></Text>
        </Left>
        <Right>
          <Badge success>
            <Text style={[{ color: "white" }]}>Ksh {props.data.price}</Text>
          </Badge>
          <Text style={[{ color: "#696969" }]}>{props.data.duration}</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default ChargeCard;

const styles = StyleSheet.create({
  left: {
    flexDirection: "column",
    alignItems: "flex-start",
  },

  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
    borderWidth: 2,
  },
});
