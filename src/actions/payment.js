import axios from "axios";
import { Alert } from "react-native";
import { API } from "../config";
import showToast from "../components/ShowToast";
import {
  SET_PAYMENT_HISTORY,
  SET_SERVICES,
  SET_CHARGES,
  ERROR,
  SET_LOADER,
  PAYMENT_FAIL,
  MPESA_STK_SUCCESS,
  MPESA_STK_FAIL,
  COOP_REQUEST_FAIL,
  COOP_REQUEST_SUCCESS,
} from "./types";
// GET Charges
export const getCharges = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(`${API}/charges`, config);

    dispatch({
      type: SET_CHARGES,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
    if (err.response) {
      // client received an error response (5xx, 4xx)
      showToast(err.response.data);
    } else if (err.request) {
      // client never received a response, or request never left
      showToast("Error!");
    } else {
      // anything else
      showToast("Error!");
    }
    dispatch({
      type: ERROR,
      payload: {
        msg: err.response ? err.response.data : "Error",
        status: err.response ? err.response.status : "Error",
      },
    });
  }
};

// GET Services
export const getServices = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(`${API}/services`, config);

    dispatch({
      type: SET_SERVICES,
      payload: res.data,
    });
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)

      showToast(err.response.data);
    } else if (err.request) {
      // client never received a response, or request never left
      showToast("Error!");
    } else {
      // anything else
      showToast("Error!");
    }
    dispatch({
      type: ERROR,
      payload: {
        msg: err.response ? err.response.data : "Error",
        status: err.response ? err.response.status : "Error",
      },
    });
  }
};

// GET  Transactions
export const getTransactions = (userId, token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get(
      `${API}/user/transactionHistory/${userId}`,
      config
    );

    dispatch({
      type: SET_PAYMENT_HISTORY,
      payload: res.data,
    });
  } catch (err) {
    if (err.response) {
      showToast(err.response.data);
    } else if (err.request) {
      // client never received a response, or request never left
      showToast("Error!");
    } else {
      
      // anything else
      showToast("Error!");
    }
    dispatch({
      type: ERROR,
      payload: {
        msg: err.response ? err.response.data : "Error",
        status: err.response ? err.response.status : "Error",
      },
    });
  }
};

// Lipa Na M-pesa
export const MpesaStk = (formData, userId, token, navigation) => async (
  dispatch
) => {
  dispatch({
    type: SET_LOADER,
  });
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `${API}/mpesa/payment/stk/${userId}`,
      formData,
      config
    );
    //check for error
    if (res.data.errorCode) {
      showToast(res.data.errorMessage);
      dispatch({
        type: MPESA_STK_FAIL,
      });
    } else if (res.data.ResponseCode === "0") {
      dispatch({
        type: MPESA_STK_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: MPESA_STK_FAIL,
      });
      showToast("Error");
    }
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      showToast(err.response.data);
    } else if (err.request) {
      // client never received a response, or request never left
      showToast("Error!");
    } else {
      // anything else
      showToast("Error!");
    }
    dispatch({
      type: PAYMENT_FAIL,
      payload: {
        msg: err.response ? err.response.errorMessage : "Error",
        status: err.response ? err.response.errorCode : "Error",
      },
    });
  }
};

// Pay Via Co-operative Bank
export const CoopBankPay = (formData, userId, token, navigation) => async (
  dispatch
) => {
  dispatch({
    type: SET_LOADER,
  });
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `${API}/coop/payment/processPayment/${userId}`,
      formData,
      config
    );
    // console.log("request sent successfuly", res.data);

    //handle response
    if (res.data.MessageCode === "0") {
      dispatch({
        type: COOP_REQUEST_SUCCESS,
        payload: res.data,
      });
      // Works on both Android and iOS
      Alert.alert(
        "",
        `${res.data.MessageDescription}`,
        [{ text: "OK", onPress: () => navigation.navigate("Home") }],
        { cancelable: false }
      );
    } else {
      // console.log(res);
      dispatch({
        type: COOP_REQUEST_FAIL,
        payload: res.data.MessageDescription,

      });
      showToast(res.data.MessageDescription);
    }
  } catch (err) {
    showToast("ERROR");
    dispatch({
      type: COOP_REQUEST_FAIL,
      payload: "Error",
    });
  }
};
