import React, { useState, useEffect } from "react";
import { Form, Item, Input, Label, Icon, Picker } from "native-base";
import { StyleSheet, Text, Image, View, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FormButton from "../components/FormButton";
import FormLoaderButton from "../components/FormLoaderButton";
import showToast from "../components/ShowToast";

const PaymentForm = (props) => {
  const [values, setValues] = useState({
    username: props.user ? props.user.user.username
      : "",
    account_number: "",
    pay_for: props.item ? props.item.name : "",
    amount: "",
    payment_method: "",
    payment_methods: ["M-Pesa", "Co-operative Bank"],
    error: false,
    loading: true,
  });
  const {
    username,
    account_number,
    pay_for,
    amount,
    payment_methods,
    payment_method,
    loading,
    error,
  } = values;

  useEffect(() => {
    setValues({ ...values, loading: false });
  }, []);
  const handleChange = (username, value) => {
    setValues({ ...values, error: false, [username]: value });
  };

  const clickSubmit = () => {
    let formData;

    // handle respective payment gateways
    if (payment_method === "M-Pesa") {
      formData = {
        phone: account_number,
        amount,
        pay_for,
      };
      if (account_number && amount && pay_for) {
        props.mPesaHandler(formData);
      } else {
        showToast("Please fill all details...");
      }
    } else if (payment_method === "Co-operative Bank") {
      formData = {
        SourceAccountNumber: account_number,
        Amount: amount,
        SourceNarration: pay_for,
        DestinationNarration: pay_for,
      };
      if (account_number && amount && pay_for) {
        props.coopBankHandler(formData);
      } else {
        showToast("Please fill all details...");
      }
    }
  };

  const showButton = () => {
    if (props.loading) {
      return <FormLoaderButton text="processing..." />;
    } else {
      let txt = `Pay Ksh ${amount}`;
      return <FormButton text={txt} onPress={clickSubmit} />;
    }
  };

  const renderSelectInput = () => {
    return (
      <Item style={{ width: "95%", marginLeft: 10 }} picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined, height: 50 }}
          selectedValue={payment_method}
          onValueChange={(text) => handleChange("payment_method", text)}
        >
          <Picker.Item label="-Select Payment Method-" value="" />
          {payment_methods.map((method, i) => (
            <Picker.Item label={method} value={method} key={i} />
          ))}
        </Picker>
      </Item>
    );
  };


  return (
    <Form style={styles.form}>

      <View style={styles.header}>
        <AntDesign name="user" size={30} color="black" />
        <Text style={{ marginLeft: 50, fontSize: 17 }}>Pay</Text>
      </View>
      <Item stackedLabel style={styles.item}>
        <Label>username</Label>
        <Input disabled value={username} />
      </Item>
      <Item stackedLabel style={styles.item}>
        <Label>Pay For</Label>
        <Input disabled value={pay_for} />
      </Item>
      {renderSelectInput()}
      {payment_method !== "" && (
        <Item stackedLabel style={styles.item}>
          {payment_method === "M-Pesa" ? (
            <Label>Mobile Number ( +254 )</Label>
          ) : (
            <Label>Account Number</Label>
          )}
          <Input
            value={account_number}
            onChangeText={(text) => handleChange("account_number", text)}
            keyboardType="number-pad"
          />
        </Item>
      )}

      <Item stackedLabel style={styles.item}>
        <Label>Amount(Ksh)</Label>
        <Input
          value={amount}
          onChangeText={(text) => handleChange("amount", text)}
          keyboardType="number-pad"
        />
      </Item>
      {showButton()}
    </Form>
  );
};
export default PaymentForm;

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    margin: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "darkgray",
  },
  item: {
    width: "90%",
  },
  header: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
  },
});
