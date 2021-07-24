import {
  LOGOUT,
  SET_PAYMENT_HISTORY,
  SET_LOADER,
  SET_SERVICES,
  SET_CHARGES,
  ERROR,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
  MPESA_STK_SUCCESS,
  MPESA_STK_FAIL,
  COOP_REQUEST_SUCCESS,
  COOP_REQUEST_FAIL,
} from "../actions/types";

const initialState = {
  payment_history: null,
  services: null,
  charges: null,
  loading: false,
  error: null,
  response: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PAYMENT_HISTORY:
      return {
        ...state,
        payment_history: payload,
      };
    case SET_CHARGES:
      return {
        ...state,
        charges: payload,
      };
    case SET_SERVICES:
      return {
        ...state,
        services: payload,
      };
    case SET_LOADER:
      return {
        ...state,
        loading: true,
      };
    case MPESA_STK_SUCCESS:
    case MPESA_STK_FAIL:
    case COOP_REQUEST_SUCCESS:
    case COOP_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        response: payload,
      };
    case PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case PAYMENT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        payment_history: null,
        services: null,
        charges: null,
        loading: false,
        error: null,
        response: null,
      };
    default:
      return state;
  }
}
