import React from "react";
import { StyleSheet } from "react-native";
import { AppStyles } from "../AppStyles";
import { Button, Text } from "native-base";

const FormTintButton = (props) => {
  return (
    <Button bordered block onPress={props.onPress} style={styles.btn}>
      <Text style={{ color: AppStyles.color.darkTheme }}>{props.text}</Text>
    </Button>
  );
};

export default FormTintButton;

const styles = StyleSheet.create({
  btn: {
    borderColor: AppStyles.color.darkTheme,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

// import React from "react";
// import { StyleSheet } from "react-native";
// import { AppStyles } from "../AppStyles";
// import { Button, Text } from "native-base";

// const FormTintButton = (props) => {
//   return (
//     <Button bordered onPress={props.onPress} style={styles.btn}>
//       <Text style={{ color: AppStyles.color.darkTheme }}>{props.text}</Text>
//     </Button>
//   );
// };

// export default FormTintButton;

// const styles = StyleSheet.create({
//   btn: {
//     borderColor: AppStyles.color.darkTheme,
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//     marginLeft: 20,
//     marginRight: 20,
//   },
// });
