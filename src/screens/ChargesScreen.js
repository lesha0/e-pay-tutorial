import React, { useState, useEffect } from "react";
import { Container, Content } from "native-base";
import LoaderScreen from "../components/LoaderScreen";
import { AppStyles } from "../AppStyles";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getCharges } from "../actions/payment";
import ChargeCard from "../components/ChargeCard";
import RenderCard from "../components/Card";

const ChargesScreen = (props) => {
  const { charges, error } = props.payment;
  useEffect(() => {
    props.getCharges();
  }, []);

  const renderCharges = () => {
    if (Array.isArray(charges) && charges.length) {
      return charges.map((object, i) => <ChargeCard key={i} data={object} />);
    } else {
      return <RenderCard text="No Charges." />;
    }
  };
  if (!Array.isArray(charges)) return <LoaderScreen />;
  return (
    <Container style={styles.container}>
      <Content style={[{ paddingTop: 15 }]}>{renderCharges()}</Content>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    payment: state.payment,
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  getCharges: () => dispatch(getCharges()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ChargesScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.color.background,
  },
});
