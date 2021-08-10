import axios from "axios";
import getEnvVars from "../../environment";

const { trackerApiBaseUrl } = getEnvVars();

export default axios.create({
  baseURL: trackerApiBaseUrl,
});
