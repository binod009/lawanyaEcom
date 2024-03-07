import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { UseSelector } from "react-redux";
class HttpServices {
  headers = {};
  getheaders = (config) => {
    if (config.login) {
      let access_token = localStorage.getItem("access_Token");
      this.headers = {
        authorization: "Bearer " + access_token,
        "content-type": "application/json",
      };
    }
    if (config.files) {
      this.headers = {
        ...this.headers,
        "content-type": "multipart/form-data",
      };
    }
  };

  postRequest = async (url, data, config = {}) => {
    try {
      this.getheaders(config);
      let response = await axiosInstance.post(url, data, {
        headers: this.headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  getRequest = async (url, config = {}) => {
    try {
      this.getheaders(config);
      let response = await axiosInstance.get(url, {
        headers: this.headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  deleteRequest = async (url, config = {}) => {
    try {
      this.getheaders(config);
      let response = await axiosInstance.delete(url, {
        headers: this.headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default HttpServices;
