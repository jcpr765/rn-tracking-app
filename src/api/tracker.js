import axios from "axios";
import getEnvVars from "../../environment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { trackerApiBaseUrl } = getEnvVars();

const instance = axios.create({
  baseURL: trackerApiBaseUrl,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
