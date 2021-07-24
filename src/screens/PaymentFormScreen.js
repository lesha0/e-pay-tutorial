import React, { useState, useEffect } from "react";
import { Container, Content } from "native-base";
import { StyleSheet } from "react-native";
import { AppStyles } from "../AppStyles";
import { MpesaStk, CoopBankPay } from "../actions/payment";
import LoaderScreen from "../components/LoaderScreen";
import PaymentForm from "../components/PaymentForm";
import { connect } from "react-redux";

const PaymentFormScreen = (props) => {
  const { user, payment } = props;
  const { loading } = payment;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const mPesaHandler = (formData) => {
    let userId = user.user._id;
    let token = user.token;
    props.MpesaStk(formData, userId, token, props.navigation);
  };

  const coopBankHandler = (formData) => {
    let userId = user.user._id;
    let token = user.token;
    props.CoopBankPay(formData, userId, token, props.navigation);
  };

  if (isLoading) return <LoaderScreen />;
  return (
    <Container style={{ backgroundColor: AppStyles.color.background }}>
      <Content>
        <PaymentForm
          mPesaHandler={mPesaHandler}
          coopBankHandler={coopBankHandler}
          item={props.route.params.item}
          user={props.user}
          loading={loading}
        />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    payment: state.payment,
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  MpesaStk: (formData, userId, token, navigation) =>
    dispatch(MpesaStk(formData, userId, token, navigation)),
  CoopBankPay: (formData, userId, token, navigation) =>
    dispatch(CoopBankPay(formData, userId, token, navigation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentFormScreen);

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
