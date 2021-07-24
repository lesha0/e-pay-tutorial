import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Root } from "native-base";
import { connect } from "react-redux";
import { loadUser, logout } from "../actions/auth";
import { NavigationContainer } from "@react-navigation/native";
import { AppStyles } from "../AppStyles";
import { AuthStack, MainStack } from "../navigations/AppNavigation";
import LoaderScreen from "../components/LoaderScreen";
import { getUser } from "../utils/user";

const AuthScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    setIsLoading(true);
    const user = await getUser();
    props.loadUser(user);
    setIsLoading(false);
  };

  if (isLoading) return <LoaderScreen />;
  return (
    <Root>
      <NavigationContainer style={styles.container}>
        {props.auth.token ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </Root>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => ({
  loadUser: (user) => dispatch(loadUser(user)),
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffffff",
  },
  header: {
    elevation: 0,
    shadowOpacity: 0,
  },
  container: {
    backgroundColor: AppStyles.color.white,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
