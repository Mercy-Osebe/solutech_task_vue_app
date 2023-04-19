import axios from "axios";
import { useAuthUser } from "../stores/auth";

const axiosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "Application/json",
    Accept: "application/json",
  },
});
const axiosAuthApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "Application/json",
    Accept: "application/json",
  },
});
axiosAuthApi.interceptors.request.use((config) => {
  const userStore = useAuthUser();
  const token = userStore.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
export { axiosAuthApi, axiosApi };
