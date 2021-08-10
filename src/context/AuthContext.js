import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { token: action.payload, errorMessage: "" };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: "SIGNUP",
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

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in
    // Handle success updating state
    // Handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { errorMessage: "", token: null }
);
