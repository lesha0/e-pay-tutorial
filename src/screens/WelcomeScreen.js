import React, { useState } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Container, Content, View } from "native-base";
import { AppStyles } from "../AppStyles";
import AuthButton from "../components/AuthButton";
import TintButton from "../components/TintButton";

const WelcomeScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        {/* <Image source={require('../../assets/img.png')} style={styles.logo} /> */}
        <Text style={styles.title}>E-Pay</Text>
        <View>
          <AuthButton
            onPress={() => props.navigation.navigate("Login")}
            text="Log In"
          />
          <TintButton
            onPress={() => props.navigation.navigate("Register")}
            text="Sign Up"
          />
        </View>
      </Content>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppStyles.color.white,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginTop: 40,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.darkTheme,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  spinner: {
    marginTop: 200,
  },
});
