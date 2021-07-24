import React, { useState, useEffect } from "react";
import { Container, Content } from "native-base";
import { AppStyles } from "../AppStyles";
import { connect } from "react-redux";
import { getTransactions } from "../actions/payment";
import LoaderScreen from "../components/LoaderScreen";
import TransactionHistoryCard from "../components/TransactionHistoryCard";
import RenderCard from "../components/Card";

const TransactionHistoryScreen = (props) => {
  const { payment, user } = props;
  const { payment_history, error } = payment;
  let userId = user.user._id;
  let token = user.token;
  useEffect(() => {
    props.getTransactions(userId, token);
  }, []);
  const renderTransactions = () => {
    if (Array.isArray(payment_history) && payment_history.length) {
      return payment_history.map((object, i) => (
        <TransactionHistoryCard
          data={object}
          key={i}
          navigator={navigateHelper}
        />
      ));
    } else {
      return <RenderCard text="No Transactions." />;
    }
  };

  const navigateHelper = (data) => {
    props.navigation.navigate("Transaction", { data });
  };
  if (!Array.isArray(payment.payment_history)) return <LoaderScreen />;
  return (
    <Container
      style={{ backgroundColor: AppStyles.color.background, marginBottom: 20 }}
    >
      <Content style={{ paddingTop: 10 }}>{renderTransactions()}</Content>
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
  getTransactions: (userId, token) => dispatch(getTransactions(userId, token)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistoryScreen);
