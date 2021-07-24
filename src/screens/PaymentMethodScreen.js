import React, { useState, useEffect } from "react";
import { Container, Content, Footer } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { AppStyles } from "../AppStyles";
import FormButton from "../components/FormButton";
import LoaderScreen from "../components/LoaderScreen";
import FormTintButton from "../components/FormTintButton";
import PaymentMethodCard from "../components/PaymentMethodCard";

const paymentMethodsData = [
  {
    image: require("../../assets/mpesa.png"),
    name: "M-Pesa",
    method: "M-Pesa",
    entity: "M-Pesa",
    accountNumber: "0701694004",
    height: 40,
    width: 60,
  },
  {
    entity: "Equity Bank",
    method: "Bank",
    name: "Equity Bank",
    image: require("../../assets/equity.png"),
    accountNumber: "5755088888840147",
    height: 40,
    width: 60,
  },
  {
    entity: "Co-operative Bank",
    method: "Bank",
    name: "Co-operative Bank",
    image: require("../../assets/co-op.png"),
    accountNumber: "5755088888840147",
    height: 40,
    width: 40,
  },
  {
    entity: "Visa",
    method: "Credit Card",
    name: "Visa",
    image: require("../../assets/visa.png"),
    accountNumber: "5755088888840147",
    height: 30,
    width: 40,
  },
];

const PaymentMethodScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    setPaymentMethods(paymentMethodsData);
    setIsLoading(false);

  }, []);


  const paymentMethodHandler = (object) => {
    if (props.route.params.item.text !== "Payment Methods") {
      props.navigation.navigate("PaymentForm", {
        utility: { ...props.route.params.item },
        paymentMethodData: object,
      });
    } else {
      return null;
    }
  };
  if (isLoading) return <LoaderScreen />;
  return (
    <Container style={{ backgroundColor: "#E0E0E0" }}>
      <Content style={{ paddingTop: 10 }}>
        <Text style={[styles.title, styles.leftTitle]}>
          Select Payment method{" "}
        </Text>
        {paymentMethods.map((object, i) => (
          <View style={{ padding: 0, marginLeft: 20, marginRight: 20 }}>
            <PaymentMethodCard
              key={i}
              data={object}
              paymentMethodHandler={paymentMethodHandler}
            />
          </View>
        ))}
      </Content>
      <Footer style={styles.footer}>
        <FormButton
          text="Add Bank Account"
          onPress={() => {
            props.navigation.navigate("PaymentForm", {
              utility: {
                ...props.route.params.item,
                text: "Add Bank Account",
              },
              paymentMethodData: {
                entity: "Add Bank Account",
                method: "Add Bank Account",
              },
            });
          }}
        />
        <FormTintButton
          text="Add Credit Card "
          onPress={() => {
            props.navigation.navigate("CreditCard", {
              utility: {
                ...props.route.params.item,
                text: "Add Credit Card",
              },
              paymentMethodData: {
                entity: "Add Credit Card",
                method: "Add Credit Card",
              },
            });
          }}
        />
      </Footer>
    </Container>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 20,
  },
  footer: {
    backgroundColor: AppStyles.color.white,
    flexDirection: "column",
    height: 120,
  },
});
