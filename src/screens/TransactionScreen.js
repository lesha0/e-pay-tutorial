import React, { useState, useEffect } from "react";
import { Container } from "native-base";
import { AppStyles } from "../AppStyles";
import TransactionCard from "../components/TransactionCard";
import FormButton from "../components/FormButton";
import LoaderScreen from "../components/LoaderScreen";

const TransactionScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) return <LoaderScreen />;
  return (
    <Container style={{ backgroundColor: AppStyles.color.background }}>
      <TransactionCard data={props.route.params.data} />
      <FormButton
        text="Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </Container>
  );
};

export default TransactionScreen;
