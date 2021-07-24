import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Content,
} from "native-base";
import { AppStyles } from "../AppStyles";
import { MaterialIcons } from "@expo/vector-icons";

const data = [
  { icon: "logo-googleplus", text: "Google Plus", color: "red" },
  { icon: "logo-facebook", text: "Facebook", color: "blue" },
  { icon: "logo-twitter", text: "Twitter", color: "dodgerblue" },
  { icon: "logo-linkedin", text: "Linkedin", color: "dodgerblue" },
  { icon: "logo-youtube", text: "YouTube", color: "red" },
  { icon: "logo-instagram", text: "Instagram", color: "purple" },
];

const ContactScreen = () => {
  // onPress={() => Linking.openURL('https://mywebsite.com/help')}

  return (
    <Container style={{ backgroundColor: AppStyles.color.background }}>
      <Content>
        <Card style={styles.card}>
          <CardItem header>
            <Text
              style={[{ color: AppStyles.color.darkTheme, fontWeight: "bold" }]}
            >
              Social Applications
            </Text>
          </CardItem>
          {data.map((item, i) => (
            <CardItem key={i} button onPress={() => alert(` ${item.text}`)}>
              <Icon active name={item.icon} style={{ color: item.color }} />
              <Text>{item.text}</Text>
              <Right>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color={AppStyles.color.grey}
                />
              </Right>
            </CardItem>
          ))}
        </Card>
      </Content>
    </Container>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    paddingBottom: 70,
  },
});
