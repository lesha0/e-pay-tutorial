import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import AuthScreen from "./src/screens/AuthScreen";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers/Index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loading: true,
      authenticated: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const appStore = createStore(
      reducers,
      composeEnhancers(applyMiddleware(thunk))
    );

    if (!this.state.isReady) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={appStore}>
          <AuthScreen />
        </Provider>
      );
    }
  }
}
