import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "signup":
      return {
        // ...state,
        errorMessage: "",
        token: action.payload,
      };
    case "signin":
      return {
        // ...state,
        errorMessage: "",
        token: action.payload,
      };
    case "clear_error_message":
      return {
        ...state,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackListScreen");
  } else {
    navigate("SignupScreen");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: "clear_error_message",
  });
};
const signup = (dispatch) => {
  return async ({ userNameOrEmailAddress, password }) => {
    try {
      const res = await trackerApi.post("/Authenticate", {
        userNameOrEmailAddress,
        password,
      });
      // console.log("accessToken: ", res.data.result.accessToken);
      await AsyncStorage.setItem("token", res.data.result.accessToken);
      dispatch({
        type: "signin",
        payload: res.data.result.accessToken,
      });
      // chuyen toi man hinh chinh
      navigate("TrackListScreen");
    } catch (error) {
      console.log("error: ", error.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ userNameOrEmailAddress, password }) => {
    try {
      const res = await trackerApi.post("/Authenticate", {
        userNameOrEmailAddress,
        password,
      });
      // console.log("accessToken: ", res.data.result.accessToken);
      await AsyncStorage.setItem("token", res.data.result.accessToken);
      dispatch({
        type: "signin",
        payload: res.data.result.accessToken,
      });
      // chuyen toi man hinh chinh
      navigate("TrackListScreen");
    } catch (error) {
      console.log("error: ", error.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {};
};
export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
