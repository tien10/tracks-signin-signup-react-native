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
        ...state,
        errorMessage: "",
        token: action.payload,
      };
    case "signin":
      return {
        ...state,
        errorMessage: "",
        token: action.payload,
      };
    default:
      return state;
  }
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
        type: "signup",
        payload: res.data.result.accessToken,
      });
      // chuyen toi man hinh chinh
      navigate("TrackListScreen");
    } catch (error) {
      console.log("error: ", error.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
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
  { signup, signin },
  { token: null, errorMessage: "" }
);
