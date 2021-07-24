import React from "react";
import { Card, CardItem, Body } from "native-base";
import { StyleSheet, Text } from "react-native";

const RenderCard = (props) => {
  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          <Text>{props.text}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default RenderCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },
});
