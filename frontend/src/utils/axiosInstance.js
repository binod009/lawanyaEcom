import axios from "axios";
import { toast } from "react-toastify";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3005",
  timeout: 4000,
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
      localStorage.removeItem("access_Token");
      localStorage.removeItem("active_client");
      window.location.href = "/login";
    } else if (error.response.status === 404 || error.response.status === 403) {
      toast.error(error.response.msg);
    } else {
      throw error;
    }
  }
);

export default axiosInstance;
