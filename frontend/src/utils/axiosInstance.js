import axios from "axios";
import { toast } from "react-toastify";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3005",
  timeout: 5000,
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
      // needs a logout
      // localStorage.removeItem("access_Token");
      // localStorage.removeItem("active_client");
      // window.location.href = "/login";
    } else if (error.response.status === 404 || error.response.status === 403) {
      // console.log("fromaxiosError", error ?? error.data);
    } else {
      throw error;
    }
  }
);

export default axiosInstance;
