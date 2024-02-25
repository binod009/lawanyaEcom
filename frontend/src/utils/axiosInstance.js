import axios from "axios";
import { message } from "antd";

message.config({
  duration: 2,
});
const axiosInstance = axios.create({
  baseURL: "http://localhost:3005",
  timeout: 3000,
  timeoutErrorMessage: "Server timeout...",
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("access_Token");
      localStorage.removeItem("active_client");
      window.location.href = "/login";
    } else if (error.response.status === 404 || error.response.status === 403) {
      throw error.response.data.msg;
    } else {
      throw error;
    }
  }
);

export default axiosInstance;
