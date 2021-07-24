import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { AppStyles } from "../AppStyles";
import { connect } from "react-redux";
import { startResetPassword } from "../actions/auth";
import AuthButton from "../components/AuthButton";
import AuthLoaderButton from "../components/AuthLoaderButton";

export class ResetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      error: "",
      loading: false,
    };
  }

  onButtonPress() {
    const { mobile } = this.state;

    if (mobile) {
      this.props.startResetPassword({ mobile });
      this.setState({ error: "", loading: true });
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <AuthLoaderButton />;
    }

    return (
      <AuthButton
        onPress={this.onButtonPress.bind(this)}
        text="Send Reset Code"
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Reset Password</Text>
        <Text style={styles.descriptionTxt}>
          Enter phone number to reset password. A verification code will be sent
          to the number above.
        </Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="07XX XXX XXX"
            onChangeText={(text) => this.setState({ mobile: text })}
            value={this.state.mobile}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
            keyboardType="number-pad"
          />
        </View>
        {this.renderButton()}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startResetPassword: (user) => dispatch(startResetPassword(user)),
});
export default connect(undefined, mapDispatchToProps)(ResetPasswordScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: AppStyles.color.white,
  },
  or: {
    color: "black",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.darkTheme,
    marginTop: 20,
    marginBottom: 20,
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

  placeholder: {
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
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

  descriptionTxt: {
    padding: 20,
    color: AppStyles.color.grey,
  },
});
