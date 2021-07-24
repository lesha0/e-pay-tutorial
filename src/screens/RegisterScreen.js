import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Container, Content } from "native-base";
import { AppStyles } from "../AppStyles";
import { connect } from "react-redux";
import { register } from "../actions/auth";
import AuthLoaderButton from "../components/AuthLoaderButton";
import AuthButton from "../components/AuthButton";
import showToast from "../components/ShowToast";

const RegisterScreen = (props) => {
  const { loading, error } = props.auth;

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = values;

  const handleChange = (username, value) => {
    setValues({ ...values, [username]: value });
  };

  const clickSubmit = () => {
    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        setValues({ ...values, loading: true });
        const user = { username, email, password };
        props.register(user);
        setValues({ ...values, loading: false });
      } else {
        showToast("Passwords do not match...");
      }
    } else {
      showToast("Please fill all details...");
    }
  };

  const showButton = () => {
    if (loading) {
      return (
        <AuthLoaderButton
          color={AppStyles.color.darkTheme}
          text="signing up..."
        />
      );
    }

    return <AuthButton onPress={clickSubmit} text="Register" loader={false} />;
  };
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Text style={[styles.title, styles.leftTitle]}>Create Account</Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="username"
              onChangeText={(text) => handleChange("username", text)}
              value={username}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Email"
              onChangeText={(text) => handleChange("email", text)}
              value={email}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => handleChange("password", text)}
              value={password}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(text) => handleChange("confirmPassword", text)}
              value={confirmPassword}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <View>{showButton()}</View>
        </View>
      </Content>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  register: (user) => dispatch(register(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: AppStyles.color.white,
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.darkTheme,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  signupText: {
    color: AppStyles.color.white,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.darkTheme,
    marginTop: 5,
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.darkTheme,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  signupText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 25,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
});
