import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { Button, H2 } from "native-base";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerContent from "../screens/DrawerContent";
import ChargesScreen from "../screens/ChargesScreen";
import PaymentFormScreen from "../screens/PaymentFormScreen";
import BillManagerScreen from "../screens/BillManagerScreen";
import TransactionHistoryScreen from "../screens/TransactionHistoryScreen";
import PaymentSuccess from "../screens/PaymentSuccess";
import ContactScreen from "../screens/ContactScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TransactionScreen from "../screens/TransactionScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppStyles } from "../AppStyles";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  Entypo
} from "@expo/vector-icons";
// import DrawerContent from "../screens/DrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function BillNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bill Manager"
        component={BillManagerScreen}
        options={({ navigation }) => ({
          title: "Pay",
          headerLeftContainerStyle: { paddingLeft: 15 },
          headerStyle: {
            backgroundColor: AppStyles.color.darkTheme,
          },
          headerTitleStyle: { color: AppStyles.color.white },
          headerLeft: () => (
            <AntDesign
              onPress={() => navigation.jumpTo("Home")}
              name="arrowleft"
              color={AppStyles.color.white}
              size={25}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function ContactNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={({ navigation }) => ({
          title: "Contact",
          headerLeftContainerStyle: { paddingLeft: 15 },
          headerStyle: {
            backgroundColor: AppStyles.color.darkTheme,
          },
          headerTitleStyle: { color: AppStyles.color.white },

          headerLeft: () => (
            <AntDesign
              onPress={() => navigation.jumpTo("Home")}
              name="arrowleft"
              color={AppStyles.color.white}
              size={25}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 5,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: AppStyles.color.white,
        headerStyle: { backgroundColor: AppStyles.color.darkTheme },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <H2 style={{ color: "white", marginLeft: -50, marginTop: 35 }}>
              Digital Payment.
            </H2>
          ),
          headerStyle: {
            height: 200,
            backgroundColor: AppStyles.color.darkTheme,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeftContainerStyle: {
            marginTop: -100,
            marginLeft: 20,
          },

          headerLeft: () => (
            <SimpleLineIcons
              onPress={() => navigation.openDrawer()}
              name="menu"
              color={AppStyles.color.white}
              size={25}
            />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentForm"
        component={PaymentFormScreen}
        options={({ route, navigation }) => ({
          title: route.params.item.name,
          transitionSpec: {
            open: config,
            close: config,
          },
          headerLeftContainerStyle: { paddingLeft: 15 },
          headerTitleStyle: { color: AppStyles.color.white },
        })}
      />
      <Stack.Screen
        name="Bill Manager"
        component={BillManagerScreen}
        options={({ route }) => {
          return {
            headerTitle: route.params.item.title,
            // swipeEnabled: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          };
        }}
      />

      <Stack.Screen
        name="Charges"
        component={ChargesScreen}
        options={({ route }) => ({
          title: "Charges",
          transitionSpec: {
            open: config,
            close: config,
          },
        })}
      />
      <Stack.Screen
        name="History"
        component={TransactionHistoryScreen}
        options={({ route }) => ({
          title: "Transaction history",
          transitionSpec: {
            open: config,
            close: config,
          },
        })}
      />
      <Stack.Screen
        name="Transaction"
        component={TransactionScreen}
        options={({ route }) => ({
          title: "Transaction",
          transitionSpec: {
            open: config,
            close: config,
          },
        })}
      />

      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={({ route }) => ({
          transitionSpec: {
            open: config,
            close: config,
          },
        })}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={({ route }) => ({
          title: "Successful",
        })}
      />
    </Stack.Navigator>
  );
}
export const AuthStack = () => (
  <Stack.Navigator initialRouteName="Welcome" headerMode="float">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={({ navigation }) => ({
        title: "",
        headerShown: false,
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      })}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={({ navigation }) => ({
        title: "",
        headerLeft: () => (
          <Button
            transparent
            onPress={() => navigation.navigate("Welcome")}
            style={styles.btn}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              color={AppStyles.color.darkTheme}
              size={60}
            />
          </Button>
        ),
      })}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={({ navigation }) => ({
        title: "",
        headerLeft: () => (
          <Button
            transparent
            onPress={() => navigation.goBack()}
            style={styles.btn}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              color={AppStyles.color.darkTheme}
              size={60}
            />
          </Button>
        ),
      })}
    />
    {/* <Stack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={({ navigation }) => ({
        title: "",
        headerLeft: () => (
          <Button
            transparent
            onPress={() => navigation.navigate("Login")}
            style={styles.btn}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              color={AppStyles.color.darkTheme}
              size={60}
            />
          </Button>
        ),
      })}
    /> */}
  </Stack.Navigator>
);

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
});

export const MainStack = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerPosition="left"
    drawerWidth={250}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={HomeStack}
      options={({ route }) => ({
        drawerLabel: "Home",
        drawerIcon: (config) => (
          <Entypo
            name="home"
            color={AppStyles.color.darkTheme}
            size={20}
          />
        ),
        gestureEnabled: getDrawerMode(route),
      })}
    />

    <Drawer.Screen
      name="Bill Manager"
      component={BillNavigator}
      options={() => ({
        gestureEnabled: false,
        drawerLabel: "Pay",
        drawerIcon: (config) => (
          <FontAwesome5
            name="coins"
            color={AppStyles.color.darkTheme}
            size={22}
          />
        ),
      })}
    />

    <Drawer.Screen
      name="Contacts"
      component={ContactNavigator}
      options={{
        drawerLabel: "Contact",
        gestureEnabled: false,
        drawerIcon: (config) => (
          <Ionicons
            name="ios-people"
            color={AppStyles.color.darkTheme}
            size={25}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);
// const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
function getDrawerMode(route) {
  // Access the drawer navigator's state using `route.state`
  // const routeName = route.state
  //   ? // Get the currently active route name in the drawer navigator
  //     route.state.routes[route.state.index].name
  //   : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
  //     // In our case, it's "Home" as that's the first screen inside the navigator
  //     route.params?.screen || "Home";
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "Home":
      return true;
    default:
      return false;
  }
}

LogBox.ignoreAllLogs();
