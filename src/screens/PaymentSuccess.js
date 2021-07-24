import React from "react";
import { Container, Content, Text, Body } from "native-base";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FormButton from "../components/FormButton";

const PaymentSuccess = (props) => {
  return (
    <Container>
      <Content>
        <Body style={styles.container}>
          <AntDesign name="checkcircleo" size={180} color="green" />
          <Text style={styles.txt}>{props.route.params.message}</Text>
          <FormButton
            text="Ok"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </Body>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
  container: {
    paddingTop: 120,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default PaymentSuccess;
