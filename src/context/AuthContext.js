import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return { token: action.payload, errorMessage: "" };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: "CLEAR_ERROR_MESSAGE",
  });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: "SIGNIN",
        payload: token,
      });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with signup",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: "SIGNIN",
        payload: token,
      });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong signing in",
      });
    }
  };

const signout = (dispatch) => {
  return () => {
    // somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { errorMessage: "", token: null }
);
