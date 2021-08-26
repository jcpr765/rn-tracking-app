import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  try {
    const response = await trackerApi.get("/tracks");
    dispatch({ type: "FETCH_TRACKS", payload: response.data });
  } catch (err) {}
};

const createTrack = (dispatch) => async (name, locations) => {
  try {
    const response = await trackerApi.post("/tracks", { name, locations });

    dispatch({ type: "SAVE_RECORDING", payload: { name, locations } });
  } catch (err) {}
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
