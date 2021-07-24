import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  // bg:require('../assets/bg.jpg'),
  // success:require('../assets/success.png'),
  profile: require("../assets/profile.jpg"),
  color: {
    main: "#5ea23a",
    text: "#696969",
    title: "#464646",
    subtitle: "#545454",
    categoryTitle: "#161616",
    tint: "#ff5a66",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#2bdf85",
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    grey: "#696969",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#E0E0E0",
    aliceblue: "#F0F8FF",
    blue: "#3293fe",
    lightBlue: "#00b5ec",
    darkTheme: "#660000",
    gridTextColor: "#696969",
  },
  fontSize: {
    title: 25,
    content: 20,
    normal: 16,
  },
  buttonWidth: {
    main: "70%",
  },
  textInputWidth: {
    main: "80%",
  },
  borderRadius: {
    main: 25,
    small: 5,
  },
};

export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25,
  },
  // images: {
  //   home: require("../assets/icons/home.png"),
  //   defaultUser: require("../assets/icons/default_user.jpg"),
  //   logout: require("../assets/icons/shutdown.png")
  // }
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row",
  },
  container: {
    padding: 10,
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6,
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
  },
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontWeight: "bold",
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10,
  },
  leftSubtitle: {
    flex: 2,
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
});
