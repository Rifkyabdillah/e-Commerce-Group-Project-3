// utils/axiosWithConfig.ts
import axios from "axios";
import Cookies from "js-cookie";

const axiosWithConfig = axios.create();

const token = Cookies.get("token") ?? "";

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "https://soapshop.site";

  if (token) {
    axiosConfig.headers.Authorization = `Bearer ${token}`; // Perbaiki penulisan Bearer token
  }


  return axiosConfig;
});

export default axiosWithConfig;
