import { Toast } from "native-base";

const ShowToast = (text) => {
  Toast.show({
    text: text,
    buttonText: "Okay",
    position: "bottom",
    duration: 4500,
    buttonTextStyle: { color: "#008000" },
    buttonStyle: { backgroundColor: "#5cb85c" },
    textStyle: { marginLeft: 20 },
  });
};

export default ShowToast;
