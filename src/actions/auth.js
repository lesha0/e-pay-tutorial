import axios from "axios";
import { API } from "../config";
import { clearUser, setUser } from "../utils/user";
import showToast from "../components/ShowToast";
import {
  SET_AUTH_LOADER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_USER,
  ERROR,
} from "./types";

// Load user
export const loadUser = (user) => (dispatch) => {
  dispatch({
    type: LOAD_USER,
    payload: user,
  });
};
// Register User
export const register = (formData) => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADER,
  });
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`${API}/signup`, formData, config);
    setUser(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
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
      type: REGISTER_FAIL,
      payload: {
        msg: err.response ? err.response.data : "Error",
        status: err.response ? err.response.status : "Error",
      },
    });
  }
};

//Login user
export const login = (formData) => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADER,
  });
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`${API}/signin`, formData, config);
    setUser(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (err.response) {
      // client received an error response (5xx, 4x x)

      showToast(err.response.data);
    } else if (err.request) {
      // client never received a response, or request never left
      showToast("Error!");
    } else {
      // anything else
      showToast("Error!");
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: {
        msg: err.response ? err.response.data : "Error",
        status: err.response ? err.response.status : "Error",
      },
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    clearUser();
    const res = await axios.get(`${API}/signout`);
    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    console.log(err);
    if (err.response) {
      // client received an error response (5xx, 4xx)
      showToast(err.response.data);
    } else if (err.request) {
      // client never received a response, or request never left
      showToast("Network Error!");
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
