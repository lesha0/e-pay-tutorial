import React, { useState, useEffect } from "react";
import { Container, Content } from "native-base";
import BillCard from "../components/BillCard";
import LoaderScreen from "../components/LoaderScreen";
import RenderCard from "../components/Card";
import { AppStyles } from "../AppStyles";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getServices } from "../actions/payment";

const BillManagerScreen = (props) => {
  const { services, error } = props.payment;

  useEffect(() => {
    props.getServices();
  }, []);

  const renderServices = () => {
    if (Array.isArray(services) && services.length) {
      return services.map((item, i) => (
        <BillCard
          item={item}
          key={i}
          name={item.name}
          billHandler={navigateHelper}
        />
      ));
    } else {
      return <RenderCard text="No Services." />;
    }
  };
  const navigateHelper = (data) => {
    props.navigation.navigate("PaymentForm", { item: data });
  };
  if (!Array.isArray(services)) return <LoaderScreen />;
  return (
    <Container style={styles.container}>
      <Content>{renderServices()}</Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    payment: state.payment,
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  getServices: () => dispatch(getServices()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BillManagerScreen);
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.color.background,
  },
});
